import { Input } from "@/components/ui/input";
import { CLASSNAMES } from "@/config/animation";
import { cn } from "@/lib/utils";
import React from "react";
import { useOnboardingContext } from "../useOnboardingPage";
import { Button } from "@/components/ui/button";

const AgeInput = () => {
  const { handleChangeAge, handleGoToPreferredLanguage } =
    useOnboardingContext();
  return (
    <div
      className={cn(
        "flex flex-col items-stretch gap-2 invisible opacity-0",
        CLASSNAMES.ONBOARDING.SECOND_QUESTION
      )}
    >
      <p className="font-bold text-md text-left self-start">Age</p>
      <div className="flex items-center gap-2">
        <Input
          placeholder="ex: 20"
          type="number"
          onChange={(ev) => handleChangeAge(+ev.currentTarget.value)}
        />
        <Button variant="default" onClick={handleGoToPreferredLanguage}>
          Done
        </Button>
      </div>
    </div>
  );
};

export default AgeInput;
