import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CLASSNAMES } from "@/config/animation";
import { cn } from "@/lib/utils";
import React from "react";
import { useChatPageContext } from "../useChatPage";

const SubmitSection = () => {
  const { answer, handleChangeAnswer, handleSendMessage } =
    useChatPageContext();
  return (
    <div
      className={cn(
        "grid w-full gap-2 px-5 invisible opacity-0 mt-4",
        CLASSNAMES.CHAT.SHARE_STORY
      )}
    >
      <Textarea
        placeholder="...."
        value={answer}
        rows={6}
        className="min-h-20"
        onChange={(ev) => handleChangeAnswer(ev.currentTarget.value)}
      />
      <Button onClick={handleSendMessage} className="main_button text-black">
        Send
      </Button>
    </div>
  );
};

export default SubmitSection;
