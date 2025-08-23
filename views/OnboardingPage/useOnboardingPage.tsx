import { gsapAnimation, useGsap } from "@/animation/gsap";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useRef, useState } from "react";

type TContext = ReturnType<typeof useOnboardingPage>;


const initialState: TContext = {
  handleAnswerStepper: () => {}
}

const OnboardingContext = createContext(initialState);

const useOnboardingPage = () => {
  const router = useRouter();
  const [data, setData] = useState({
    gender: "",
    age: "",
    preferredLanguage: "",
  });

  const {contextSafe}= useGsap(() => {
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
      });
  });

  const handleAnswerStepper = contextSafe((value: string, currentClassName: string, nextClassName?: string) => {
    const tl = gsapAnimation.timeline({ defaults: { duration: 1 } });
    tl.to(`.${currentClassName}`, {
      y: -20,
      autoAlpha: 0,
      height: 0
    })
    .fromTo(`.${nextClassName}`, {y: 40},{
      y: 0,
      autoAlpha: 1,
      duration: 0.4
    },"-=0.2")
  })

  return {handleAnswerStepper};
};

export const OnboardingProvider = ({ children }: React.PropsWithChildren) => {
    const value = useOnboardingPage();
    return <OnboardingContext.Provider value={value}>{children}</OnboardingContext.Provider>;
  };
  
  export const useOnboardingContext = () => {
    if (!OnboardingContext) {
      throw new Error("Home context doesn't existed");
    }
    return useContext(OnboardingContext);
  };
  
