"use client";

import { gsapAnimation, SplitText, useGsap } from "@/animation/gsap";
import { CLASSNAMES } from "@/config/animation";
import { basicIdentitySSKey } from "@/config/storage";
import { MESSAGE } from "@/lib/i18n";
import useChatMutation from "@/lib/services/useChatMutation";
import { trackCustomEvent } from "@/lib/tracking";
import { ChatHistory, Role, TChat } from "@/lib/types/common";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { toast } from "sonner";

type TContext = ReturnType<typeof useChatPage>;
const returnPromise = new Promise<void>((resolve) => resolve());
const initialState: TContext = {
  isSubmitChat: true,
  isErrorMutateChat: false,
  answer: "",
  chat: {
    message: "",
    phase: "intro",
  },
  handleChangeAnswer: () => {},
  handleSendMessage: () => returnPromise,
  handleEndConversation: () => returnPromise,
};

const ChatPageContext = createContext(initialState);

const useChatPage = () => {
  const {
    mutateAsync: postChat,
    isPending: isSubmitChat,
    isError: isErrorMutateChat,
  } = useChatMutation();
  const chatHistories = useRef<Array<ChatHistory>>([]);
  const [chat, setChat] = useState<TChat>({
    message: "",
    phase: "intro",
  });

  const [answer, setAnswer] = useState("");

  // set the identity from session storage
  const identityRef = useRef<string>("");

  useEffect(() => {
    document.body.style.background = "white";
  }, []);

  useEffect(() => {
    if (chat.message.length > 0 && chat.phase === "intro") {
      _animateIntroChatResponse();
    }
  }, [chat]);

  useEffect(() => {
    if (chat.phase === "conversation") {
      _animateChatResponse();
    }
    if (chat.phase === "end") {
      _animateLastChatResponse();
    }
  }, [chat]);

  const { contextSafe } = useGsap(() => {}, {});

  // get the identity from onboarding
  useEffect(() => {
    const ss = sessionStorage.getItem(basicIdentitySSKey);
    if (!ss) return;

    const basicIdentity = JSON.parse(ss);

    const identity = `
      User Identity (for personalization)
      Gender: ${basicIdentity.gender}
      Age: ${basicIdentity.age}
      Mode: Just Listening
      Language: ${basicIdentity.preferredLanguage}
    `;

    identityRef.current = identity;

    postChat({
      history: chatHistories.current,
      newMessage: identity,
    })
      .then((res) => {
        setChat({
          message: res.message,
          phase: "intro",
        });
        _addNewHistory("user", identity);
        _addNewHistory("model", res.message);
      })
      .catch(() => {
        trackCustomEvent("error_api_call");
        toast.error(MESSAGE.SERVER_ERROR);
      });
  }, []);

  const handleSendMessage = async () => {
    try {
      trackCustomEvent("send_message", {
        value: 1,
      });
      const res = await postChat({
        history: chatHistories.current,
        newMessage: answer,
      });

      if (res.status !== "success") throw new Error(res.message);

      setChat({
        message: res.message,
        phase: "conversation",
      });

      _addNewHistory("user", answer);
      _addNewHistory("model", res.message);

      setAnswer("");
    } catch (err: any) {
      toast.error(MESSAGE.SERVER_ERROR);
      trackCustomEvent("error_api_call");
    }
  };

  const handleEndConversation = async () => {
    try {
      trackCustomEvent("end_conversation", {
        value: 1,
      });
      const res = await postChat({
        history: chatHistories.current,
        newMessage: "Thank you salma!",
      });

      if (res.status !== "success") throw new Error(res.message);

      setChat({
        message: res.message,
        phase: "end",
      });
    } catch (err: any) {
      toast.error(err.message);
      trackCustomEvent("error_api_call");
    }
  };

  const handleChangeAnswer = (val: string) => setAnswer(val);

  const _addNewHistory = (role: Role, message: string) => {
    const newHistories = [
      ...chatHistories.current,
      {
        role,
        parts: [
          {
            text: message,
          },
        ],
      },
    ];
    chatHistories.current = newHistories;
  };

  const _animateIntroChatResponse = contextSafe(() => {
    const tl = gsapAnimation.timeline({
      defaults: { duration: 1, autoAlpha: 1, ease: "power1.out" },
    });
    const texts = SplitText.create(`.${CLASSNAMES.CHAT.RESPONSE}`, {
      type: "words",
    });
    tl.to(`.${CLASSNAMES.CHAT.TITLE_NAME}`, {
      scale: 1.1,
      duration: 0.8,
    })
      .to(`.${CLASSNAMES.CHAT.TITLE_NAME}`, {
        autoAlpha: 0,
        duration: 1,
        onComplete: () => {
          const element = document.querySelector(
            `.${CLASSNAMES.CHAT.TITLE_NAME}`
          );
          if (element) {
            // @ts-ignore
            element.style.display = "none";
          }
        },
      })
      .to(
        `.${CLASSNAMES.CHAT.INTRO_CHAT}`,
        {
          height: 120,
        },
        "-=0.4"
      )
      .from(
        texts.words,
        {
          stagger: 0.03,
          duration: 0.3,
          autoAlpha: 0,
          y: -20,
        },
        "-=0.4"
      )
      .to(`.${CLASSNAMES.CHAT.SHARE_STORY}`, {});
  });

  const _animateChatResponse = contextSafe(() => {
    const tl = gsapAnimation.timeline({
      defaults: { duration: 1, autoAlpha: 1 },
    });
    tl.to(`.${CLASSNAMES.CHAT.CONVERSATION}`, {})
      .to(`.${CLASSNAMES.CHAT.SHARE_STORY}`, {})
      .to(`.${CLASSNAMES.CHAT.END_BUTTON}`, {});
    // const texts = SplitText.create(`.${CLASSNAMES.CHAT.RESPONSE}`, {
    //   type: "words",
    // });
    // .from(texts.words, {
    //   stagger: 0.03,
    //   duration: 0.3,
    //   autoAlpha: 0,
    //   y: -20,
    // })
  });

  const _animateLastChatResponse = contextSafe(() => {
    const tl = gsapAnimation.timeline({
      defaults: { duration: 1, autoAlpha: 1 },
    });
    tl.to(document.body, {
      backgroundImage:
        "linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)",
    })
      .to(`.${CLASSNAMES.CHAT.CONVERSATION}`, {})
      .to(`.${CLASSNAMES.GENERAL.CONVO_TITLE}`, {}, "-=0.8")
      .to(`.${CLASSNAMES.CHAT.NAME_SECTION}`, {}, "-=0.6")
      .fromTo(
        `.${CLASSNAMES.CHAT.PROFILE_SECTION}`,
        { autoAlpha: 0 },
        { scale: 1.1, autoAlpha: 1 },
        "-=0.6"
      );
  });

  return {
    chat,
    isSubmitChat,
    isErrorMutateChat,
    answer,
    handleChangeAnswer,
    handleSendMessage,
    handleEndConversation,
  };
};

export const ChatPageProvider = ({ children }: React.PropsWithChildren) => {
  const value = useChatPage();
  return (
    <ChatPageContext.Provider value={value}>
      {children}
    </ChatPageContext.Provider>
  );
};

export const useChatPageContext = () => {
  if (!ChatPageContext) {
    throw new Error("onboarding context doesn't existed");
  }
  return useContext(ChatPageContext);
};
