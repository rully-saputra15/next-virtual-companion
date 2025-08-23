"use client";

import React from "react";
import { useOnboardingContext } from "./useOnboardingPage";
import { cn } from "@/lib/utils";
import { CLASSNAMES } from "@/config/animation";
import GenderInput from "./blocks/GenderInput";
import AgeInput from "./blocks/AgeInput";
import PreferredLanguageInput from "./blocks/PreferredLanguageInput";
import { Button } from "@/components/ui/button";

const OnboardingPage = () => {
  const {} = useOnboardingContext();
  return (
    <main className="px-2 flex flex-col h-full justify-center text-center gap-2 text-balance">
      <h1 className="font-bold text-3xl">
        Before we start, let's set the basics.
      </h1>
      <p className="font-medium text-md">
        We ask a few simple details — your gender, age, and preferred language —
        so the conversation feels natural and in the right perspective.
      </p>
      <p className="font-light text-sm text-gray-500">
        ✨ You’re safe here — we don’t save this info.
      </p>
      <div className="h-10 max-h-12 px-10 mt-2">
        <GenderInput />
        <AgeInput />
        <PreferredLanguageInput />
        <Button className="main_button text-black font-bold w-full invisible opacity-0">
          Start
        </Button>
      </div>
    </main>
  );
};

export default OnboardingPage;
