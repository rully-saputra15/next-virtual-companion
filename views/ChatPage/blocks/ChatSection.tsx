import React from "react";
import { useChatPageContext } from "../useChatPage";
import { CLASSNAMES } from "@/config/animation";
import { cn } from "@/lib/utils";

import { Github, Linkedin } from "lucide-react";
import TiktokIcon from "@/assets/TiktokIcon";

const openNewTab = (url: string) => window.open(url, "noopener noreferrer");
const ChatSection = () => {
  const { chat } = useChatPageContext();
  return (
    <section className="flex flex-col justify-center items-center gap-2">
      {chat.phase === "intro" && chat.message.length > 0 && (
        <div
          className={cn(
            "invisible opacity-0 text-center text-balance",
            CLASSNAMES.CHAT.INTRO_CHAT
          )}
          dangerouslySetInnerHTML={{
            __html: chat.message,
          }}
        ></div>
      )}
      {chat.phase === "conversation" && (
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
      {chat.phase === "end" && (
        <>
          <div
            className={cn(
              "text-center text-2xl text-balance invisible opacity-0",
              CLASSNAMES.CHAT.CONVERSATION
            )}
            dangerouslySetInnerHTML={{
              __html: chat.message,
            }}
          ></div>
          <h1
            className={cn(
              "font-bold text-xl mb-5 invisible opacity-0",
              CLASSNAMES.GENERAL.CONVO_TITLE
            )}
          >
            -Convo-
          </h1>
          <p
            className={cn("invisible opactiy-0", CLASSNAMES.CHAT.NAME_SECTION)}
          >
            created by <strong>Rully Saputra</strong> for <strong>YOU</strong>
          </p>
          <div
            className={cn(
              "flex gap-3 justify-center items-center invisible opacity-0",
              CLASSNAMES.CHAT.PROFILE_SECTION
            )}
          >
            <Linkedin
              onClick={() =>
                openNewTab(
                  "https://www.linkedin.com/in/rully-saputra-7554a7138/"
                )
              }
            />
            <Github
              onClick={() => openNewTab("https://github.com/rully-saputra15")}
            />
            <TiktokIcon
              onClick={() =>
                openNewTab("https://www.tiktok.com/@rullysaputra5")
              }
            />
          </div>
        </>
      )}
    </section>
  );
};

export default ChatSection;
