"use client";

import React from "react";
import s from "./LandingPage.module.css";
import { cn } from "@/lib/utils";
import useLandingPage from "./useLandingPage";
import { CLASSNAMES } from "@/config/animation";

const LandingPage = () => {
  const { containerRef, handleGoToOnboarding } = useLandingPage();
  return (
    <main
      className={cn(
        "flex flex-col justify-center items-center h-full gap-2 text-balance text-center relative"
      )}
      ref={containerRef}
    >
      <div
        className={cn(
          "bg-white rounded-md p-2 shadow-md",
          CLASSNAMES.GENERAL.CONVO_TITLE
        )}
      >
        <h1 className="font-bold text-2xl">Convo</h1>
      </div>
      <p className={cn("font-medium text-xl", CLASSNAMES.LANDING.TAGLINE)}>
        Say the unsaid
      </p>
      <p
        className={cn(
          "font-light text-sm text-balance",
          CLASSNAMES.LANDING.SUBLINE
        )}
      >
        No need to hold it in anymore. Say it freely, I’m here with you.
      </p>
      <button
        role="button"
        className={cn(
          s.main_button,
          "px-4 py-2 rounded-md text-sm shadow-xs font-bold text-slate-900"
        )}
        onClick={handleGoToOnboarding}
      >
        I&apos;ll listen
      </button>
      <small
        className={cn(
          "font-bold text-xs mt-4 text-gray-600",
          CLASSNAMES.LANDING.ADDITIONAL_INFORMATION
        )}
      >
        Your stories are never stored · 100% anonymous · No judgment, ever.
      </small>
    </main>
  );
};

export default LandingPage;
