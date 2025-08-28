import { Button } from "@/components/ui/button";
import { CLASSNAMES } from "@/config/animation";
import { cn } from "@/lib/utils";
import React from "react";
import { useOnboardingContext } from "../useOnboardingPage";

const GENDERS = [
  {
    label: "Female",
    value: "female",
  },
  {
    label: "Male",
    value: "male",
  },
];
const GenderInput = () => {
  const { data, handleChangeGender } = useOnboardingContext();
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-2 invisible opacity-0",
        CLASSNAMES.ONBOARDING.SECOND_QUESTION
      )}
    >
      <p className="font-bold text-md">Gender</p>
      <div className="flex gap-2 ">
        {GENDERS.map((el) => (
          <Button
            key={el.value}
            variant={data.gender === el.value ? "secondary" : "outline"}
            onClick={() => handleChangeGender(el.value)}
          >
            {el.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default GenderInput;
