import { gsapAnimation, SplitText, useGsap } from "@/animation/gsap";
import { CLASSNAMES } from "@/config/animation";
import { ROUTE_PATH } from "@/config/path";
import { basicIdentitySSKey } from "@/config/storage";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useRef, useState } from "react";

type TContext = ReturnType<typeof useOnboardingPage>;

const initialState: TContext = {
  data: {
    age: 0,
    gender: "",
    preferredLanguage: "",
  },
  handleChangeGender: () => {},
  handleChangeAge: () => {},
  handleGoToPreferredLanguage: () => {},
  handleChangePreferredLanguage: () => {},
  handleStartChat: () => {},
};

const OnboardingContext = createContext(initialState);

const useOnboardingPage = () => {
  const router = useRouter();
  const [data, setData] = useState({
    gender: "",
    age: 0,
    preferredLanguage: "",
  });

  const { contextSafe } = useGsap(() => {
    const tl = gsapAnimation.timeline({
      defaults: { duration: 1, autoAlpha: 1 },
      autoRemoveChildren: true,
    });
    const texts = SplitText.create(`.${CLASSNAMES.ONBOARDING.DESCRIPTION}`, {
      type: "words",
    });
    tl.to(document.body, {
      background:
        "linear-gradient(180deg, #fff5f7 0%, #fff9f5 40%, #f7f5ff 100%)",
      duration: 1,
      ease: "power1.out",
    })
      .to(document.body, {
        background:
          "linear-gradient(180deg, #fefefe 0%, #fefefe 40%, #fefefe 100%)",
        duration: 0.8,
        ease: "power1.out",
      })
      .to(document.body, {
        background: "white",
        duration: 0.7,
        ease: "power1.out",
      })
      .to(`.${CLASSNAMES.ONBOARDING.TITLE}`, {}, 0.3)
      .from(
        texts.words,
        {
          autoAlpha: 0,
          y: -20,
          stagger: 0.06,
          duration: 0.3,
        },
        0.4
      )
      .to(`.${CLASSNAMES.ONBOARDING.MICRO_COPY}`, {}, "-=1.2")
      .to(`.${CLASSNAMES.ONBOARDING.FIRST_QUESTION}`, {}, "-=1.2");
  });

  const handleChangeGender = (value: string) => {
    _changeData("gender", value);
    handleAnswerStepper(
      CLASSNAMES.ONBOARDING.FIRST_QUESTION,
      CLASSNAMES.ONBOARDING.SECOND_QUESTION
    );
  };

  const handleChangeAge = (value: number) => {
    _changeData("age", value);
  };

  const handleGoToPreferredLanguage = () => {
    handleAnswerStepper(
      CLASSNAMES.ONBOARDING.SECOND_QUESTION,
      CLASSNAMES.ONBOARDING.THIRD_QUESTION
    );
  };

  const handleChangePreferredLanguage = (value: string) => {
    _changeData("preferredLanguage", value);
    const tl = gsapAnimation.timeline({ defaults: { duration: 1 } });
    tl.to(`.${CLASSNAMES.ONBOARDING.THIRD_QUESTION}`, {
      y: -20,
      autoAlpha: 0,
      height: 0,
    }).to(
      ".main_button",
      {
        autoAlpha: 1,
        duration: 0.3,
      },
      "-=0.2"
    );
  };

  const handleStartChat = contextSafe(() => {
    gsapAnimation.to(`.${CLASSNAMES.ONBOARDING.TITLE}`, {
      autoAlpha: 0,
    });
    gsapAnimation.to(`.${CLASSNAMES.ONBOARDING.DESCRIPTION}`, {
      autoAlpha: 0,
    });
    gsapAnimation.to(`.${CLASSNAMES.ONBOARDING.MICRO_COPY}`, {
      autoAlpha: 0,
    });
    gsapAnimation.to(`.main_button`, {
      autoAlpha: 0,
      duration: 0.5,
      onComplete: () => {
        sessionStorage.setItem(basicIdentitySSKey, JSON.stringify(data));
        router.push(`${ROUTE_PATH.CHAT}`);
      },
    });
  });

  const handleAnswerStepper = contextSafe(
    (currentClassName: string, nextClassName?: string) => {
      const tl = gsapAnimation.timeline({
        defaults: { duration: 1, ease: "power1.out" },
      });
      tl.to(`.${currentClassName}`, {
        y: -20,
        autoAlpha: 0,
        height: 0,
      }).fromTo(
        `.${nextClassName}`,
        { y: 40 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.4,
        },
        "-=0.4"
      );
    }
  );

  const _changeData = (key: keyof typeof data, value: string | number) => {
    setData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return {
    data,
    handleChangeGender,
    handleGoToPreferredLanguage,
    handleChangePreferredLanguage,
    handleChangeAge,
    handleStartChat,
  };
};

export const OnboardingProvider = ({ children }: React.PropsWithChildren) => {
  const value = useOnboardingPage();
  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboardingContext = () => {
  if (!OnboardingContext) {
    throw new Error("onboarding context doesn't existed");
  }
  return useContext(OnboardingContext);
};
