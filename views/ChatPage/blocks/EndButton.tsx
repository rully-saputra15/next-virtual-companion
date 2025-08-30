import { Button } from "@/components/ui/button";
import { CLASSNAMES } from "@/config/animation";
import { cn } from "@/lib/utils";
import React from "react";
import { useChatPageContext } from "../useChatPage";

const EndButton = () => {
  const { handleEndConversation } = useChatPageContext();
  return (
    <div
      className={cn(
        "absolute bottom-19 m-auto invisible opacity-0 scale-125",
        CLASSNAMES.CHAT.END_BUTTON
      )}
    >
      <Button onClick={handleEndConversation}>Thank you Salma!</Button>
    </div>
  );
};

export default EndButton;
