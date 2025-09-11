import { Button } from "@/components/ui/button";
import { CLASSNAMES } from "@/config/animation";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
    onCtaClick: () => void;
}

const StartPage = ({onCtaClick}: Props) => {
  return (
    <>
      <h1
        className={cn(
          "font-bold text-3xl mb-2 opacity-0",
          CLASSNAMES.LANDING.START_PAGE.TITLE
        )}
      >
        Feeling alone in a connected world?
      </h1>
      <p
        className={cn(
          "font-medium text-md mb-2 opacity-0",
          CLASSNAMES.LANDING.START_PAGE.SUBTITLE
        )}
      >
        You’re not the only one—about <b>1 in 5 adults under 50</b> often feel
        lonely. Here, <b>you can talk freely, anonymously</b>.
      </p>
      <p
        className={cn(
          "font-light text-xs mb-2 opacity-0",
          CLASSNAMES.LANDING.START_PAGE.SUBTITLE
        )}
      >
        No account. No tracking.
      </p>
      <button
        className={cn(
          "px-6 py-2 rounded-md text-sm font-bold text-slate-900 bg-white shadow-md opacity-0 cursor-pointer",
          CLASSNAMES.LANDING.START_PAGE.CTA
        )}
        onClick={onCtaClick}
      >
        One tap to start
      </button>
    </>
  );
};

export default StartPage;
