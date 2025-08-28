"use client";

import React from "react";
import { useOnboardingContext } from "./useOnboardingPage";
import { cn } from "@/lib/utils";
import GenderInput from "./blocks/GenderInput";
import AgeInput from "./blocks/AgeInput";
import PreferredLanguageInput from "./blocks/PreferredLanguageInput";
import { Button } from "@/components/ui/button";
import { CLASSNAMES } from "@/config/animation";

const OnboardingPage = () => {
  const { handleStartChat } = useOnboardingContext();
  return (
    <main className="px-2 flex flex-col h-full justify-center text-center gap-2 text-balance">
      <h1
        className={cn(
          "font-bold text-3xl invisible opactiy-0",
          CLASSNAMES.ONBOARDING.TITLE
        )}
      >
        Before we start, let&apos;s set the basics.
      </h1>
      <p
        className={cn("font-medium text-md", CLASSNAMES.ONBOARDING.DESCRIPTION)}
      >
        We ask a few simple details — your gender, age, and preferred language —
        so the conversation feels natural and in the right perspective.
      </p>
      <p
        className={cn(
          "font-light text-sm text-gray-500 invisible opacity-0",
          CLASSNAMES.ONBOARDING.MICRO_COPY
        )}
      >
        ✨ You’re safe here — we don’t save this info.
      </p>
      <div className="h-10 max-h-12 px-10 mt-2">
        <PreferredLanguageInput />
        <GenderInput />
        <AgeInput />
        <Button
          className="main_button text-black font-bold w-full invisible opacity-0"
          onClick={handleStartChat}
        >
          Start
        </Button>
      </div>
    </main>
  );
};

export default OnboardingPage;
