import { CLASSNAMES } from "@/config/animation";
import React from "react";
import { useOnboardingContext } from "../useOnboardingPage";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PREFERRED_LANGUAGES = [
  {
    label: "Bahasa Indonesia",
    value: "bahasa",
  },
  {
    label: "English",
    value: "english",
  },
];
const PreferredLanguageInput = () => {
  const { data, handleChangePreferredLanguage } = useOnboardingContext();
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-2 invisible opacity-0",
        CLASSNAMES.ONBOARDING.THIRD_QUESTION
      )}
    >
      <p className="font-bold text-md">Preferred Language</p>
      <div className="flex gap-2 ">
        {PREFERRED_LANGUAGES.map((el) => (
          <Button
            key={el.value}
            variant={
              data.preferredLanguage === el.value ? "secondary" : "outline"
            }
            onClick={() => handleChangePreferredLanguage(el.value)}
          >
            {el.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PreferredLanguageInput;
