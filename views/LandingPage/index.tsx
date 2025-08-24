"use client";

import React from "react";
import s from "./LandingPage.module.css";
import { cn } from "@/lib/utils";
import useLandingPage from "./useLandingPage";

const LandingPage = () => {
  const { containerRef, handleGoToOnboarding } = useLandingPage();
  return (
    <main
      className={cn(
        "flex flex-col justify-center items-center h-full gap-2 text-balance text-center"
      )}
      ref={containerRef}
    >
      <h1 className="font-bold text-4xl">Convo</h1>
      <p className="font-medium text-xl">Say the unsaid</p>
      <p className="font-light text-sm text-balance">
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
      <small className="font-bold text-xs mt-4 text-gray-600">
        Your stories are never stored · 100% anonymous · No judgment, ever.
      </small>
    </main>
  );
};

export default LandingPage;
