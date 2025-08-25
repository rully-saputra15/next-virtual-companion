import React from "react";
import { useChatPageContext } from "../useChatPage";
import { CLASSNAMES } from "@/config/animation";
import { cn } from "@/lib/utils";

const ChatSection = () => {
  const { chat } = useChatPageContext();
  return (
    <>
      {chat.phase === "intro" && chat.message.length > 0 && (
        <div
          className={cn(
            "invisible opacity-0 h-0 text-center text-balance",
            CLASSNAMES.CHAT.INTRO_CHAT
          )}
          dangerouslySetInnerHTML={{
            __html: chat.message,
          }}
        ></div>
      )}
      {(chat.phase === "conversation" || chat.phase === "end") && (
        <div
          className={cn(
            "text-center text-balance invisible opacity-0",
            CLASSNAMES.CHAT.CONVERSATION
          )}
          dangerouslySetInnerHTML={{
            __html: chat.message,
          }}
        ></div>
      )}
    </>
  );
};

export default ChatSection;
