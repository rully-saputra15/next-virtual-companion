"use client";

import React from "react";
import s from "./LandingPage.module.css";
import { cn } from "@/lib/utils";
import useLandingPage from "./useLandingPage";
import { CLASSNAMES } from "@/config/animation";
import { Lock, ShieldCheck } from "lucide-react";
import CtaPage from "./blocks/CtaPage";
import StartPage from "./blocks/StartPage";

const LandingPage = () => {
  const { pageState, containerRef, handleGoToOnboarding, handleGoToCtaPage } = useLandingPage();
  return (
    <main
      className={cn(
        "flex flex-col justify-center items-center h-full gap-2 text-balance text-center relative px-5"
      )}
      ref={containerRef}
    >
      {pageState === "START" && (
        <StartPage onCtaClick={handleGoToCtaPage}/>
      )}
      {pageState === "CTA" && <CtaPage handleGoToOnBoarding={handleGoToOnboarding} />}
    </main>
  );
};

export default LandingPage;
