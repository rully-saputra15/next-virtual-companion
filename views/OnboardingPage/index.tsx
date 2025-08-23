"use client";

import React from "react";
import { useOnboardingContext } from "./useOnboardingPage";
import { cn } from "@/lib/utils";
import { CLASSNAMES } from "@/config/animation";

const OnboardingPage = () => {
  const { handleAnswerStepper } = useOnboardingContext();
  return (
    <main className="flex flex-col h-full justify-center text-center gap-2 text-balance">
      <h1 className="font-bold text-3xl">
        Before we start, let's set the basics.
      </h1>
      <p className="font-medium text-lg">
        We ask a few simple details — your gender, age, and preferred language —
        so the conversation feels natural and in the right perspective.
      </p>
      <div className="h-10 max-h-12">
        <p
          onClick={() => {
            handleAnswerStepper(
              "first",
              CLASSNAMES.ONBOARDING.FIRST_QUESTION,
              CLASSNAMES.ONBOARDING.SECOND_QUESTION
            );
          }}
          className={cn(CLASSNAMES.ONBOARDING.FIRST_QUESTION)}
        >
          First
        </p>
        <p
          className={cn("invisible opacity-0", CLASSNAMES.ONBOARDING.SECOND_QUESTION)}
          onClick={() => {
            handleAnswerStepper(
              "second",
              CLASSNAMES.ONBOARDING.SECOND_QUESTION,
              CLASSNAMES.ONBOARDING.THIRD_QUESTION
            );
          }}
        >
          Second
        </p>
        <p
          className={cn("invisible opacity-0", CLASSNAMES.ONBOARDING.THIRD_QUESTION)}
          onClick={() => {
            handleAnswerStepper("third", CLASSNAMES.ONBOARDING.THIRD_QUESTION);
          }}
        >
          third
        </p>
      </div>
    </main>
  );
};

export default OnboardingPage;
