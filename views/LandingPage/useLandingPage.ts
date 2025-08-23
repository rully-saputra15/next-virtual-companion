import { gsapAnimation, useGsap } from "@/animation/gsap";
import React, { useRef } from "react";
import s from "./LandingPage.module.css";
import { useRouter } from "next/navigation";
import { ROUTE_PATH } from "@/config/path";

const useLandingPage = () => {
  const containerRef = useRef(null);
  const router = useRouter();
  useGsap(
    () => {
      const tl = gsapAnimation.timeline({ defaults: { duration: 1 } });
      tl.to(`.${s.main_button}`, {
        backgroundImage: "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)",
        repeat: -1,
        yoyo: true,
        duration: 3,
      });
    },
    { scope: containerRef }
  );

  const handleGoToOnboarding = () => {
    router.push(ROUTE_PATH.ONBOARDING);
  };
  return {
    containerRef,
    handleGoToOnboarding,
  };
};

export default useLandingPage;
