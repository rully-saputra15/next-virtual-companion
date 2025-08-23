import { gsapAnimation, useGsap } from "@/animation/gsap";
import { CLASSNAMES } from "@/config/animation";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useRef, useState } from "react";

type TContext = ReturnType<typeof useOnboardingPage>;

const initialState: TContext = {
  data: {
    age: 0,
    gender: "",
    preferredLanguage: "",
  },
  handleChangeGender: () => {},
  handleChangeAge: () => {},
  handleGoToPreferredLanguage: () => {},
  handleChangePreferredLanguage: () => {},
};

const OnboardingContext = createContext(initialState);

const useOnboardingPage = () => {
  const router = useRouter();
  const [data, setData] = useState({
    gender: "",
    age: 0,
    preferredLanguage: "",
  });
  console.log("data", data);
  const { contextSafe } = useGsap(() => {
    const tl = gsapAnimation.timeline({ defaults: { duration: 1 } });
    tl.to(document.body, {
      background:
        "linear-gradient(180deg, #fff5f7 0%, #fff9f5 40%, #f7f5ff 100%)",
      duration: 1,
      ease: "power1.out",
    })
      .to(document.body, {
        background:
          "linear-gradient(180deg, #fefefe 0%, #fefefe 40%, #fefefe 100%)",
        duration: 0.8,
        ease: "power1.out",
      })
      .to(document.body, {
        background: "white",
        duration: 0.7,
        ease: "power1.out",
      })
      .to(
        `.${CLASSNAMES.ONBOARDING.FIRST_QUESTION}`,
        {
          autoAlpha: 1,
        },
        "-=2"
      );
  });

  const handleChangeGender = (value: string) => {
    _changeData("gender", value);
    handleAnswerStepper(
      CLASSNAMES.ONBOARDING.FIRST_QUESTION,
      CLASSNAMES.ONBOARDING.SECOND_QUESTION
    );
  };

  const handleChangeAge = (value: number) => {
    _changeData("age", value);
  };

  const handleGoToPreferredLanguage = () => {
    handleAnswerStepper(
      CLASSNAMES.ONBOARDING.SECOND_QUESTION,
      CLASSNAMES.ONBOARDING.THIRD_QUESTION
    );
  };

  //TODO: NEED TO CHECK THE ANIMATION
  const handleChangePreferredLanguage = (value: string) => {
    _changeData("preferredLanguage", value);
    handleAnswerStepper(CLASSNAMES.ONBOARDING.THIRD_QUESTION, "main_button");
  };

  const handleAnswerStepper = contextSafe(
    (currentClassName: string, nextClassName?: string) => {
      const tl = gsapAnimation.timeline({ defaults: { duration: 1 } });
      tl.to(`.${currentClassName}`, {
        y: -20,
        autoAlpha: 0,
        height: 0,
      }).fromTo(
        `.${nextClassName}`,
        { y: 40 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.4,
        },
        "-=0.2"
      );
    }
  );

  const _changeData = (key: keyof typeof data, value: string | number) => {
    setData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return {
    data,
    handleChangeGender,
    handleGoToPreferredLanguage,
    handleChangePreferredLanguage,
    handleChangeAge,
  };
};

export const OnboardingProvider = ({ children }: React.PropsWithChildren) => {
  const value = useOnboardingPage();
  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboardingContext = () => {
  if (!OnboardingContext) {
    throw new Error("Home context doesn't existed");
  }
  return useContext(OnboardingContext);
};
