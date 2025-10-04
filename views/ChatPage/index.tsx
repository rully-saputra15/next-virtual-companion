import Loading from "@/components/custom/Loading";
import React from "react";
import { useChatPageContext } from "./useChatPage";
import { cn } from "@/lib/utils";
import { CLASSNAMES } from "@/config/animation";
import SubmitSection from "./blocks/SubmitSection";
import ChatSection from "./blocks/ChatSection";
import EndButton from "./blocks/EndButton";
import ErrorView from "@/components/custom/ErrorView";

const ChatPage = () => {
  const { isSubmitChat, isErrorMutateChat, handleSendMessage } =
    useChatPageContext();

  if (isErrorMutateChat) {
    return <ErrorView onRetry={handleSendMessage} />;
  }

  return (
    <main className="h-dvh flex flex-col items-center justify-center px-2 relative">
      {isSubmitChat ? (
        <Loading />
      ) : (
        <>
          <h1
            className={cn(
              "text-3xl font-bold text-center invisible opacity-0",
              CLASSNAMES.CHAT.TITLE_NAME
            )}
          >
            Hi, my name is Salma!
          </h1>
          <ChatSection />
          <SubmitSection />
          <EndButton />
        </>
      )}
    </main>
  );
};

export default ChatPage;
