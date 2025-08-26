import { gsapAnimation, SplitText, useGsap } from "@/animation/gsap";
import React, { useRef } from "react";
import s from "./LandingPage.module.css";
import { useRouter } from "next/navigation";
import { ROUTE_PATH } from "@/config/path";
import { CLASSNAMES } from "@/config/animation";
import { trackCustomEvent } from "@/lib/tracking";

const useLandingPage = () => {
  const containerRef = useRef(null);
  const router = useRouter();
  useGsap(
    () => {
      const tl = gsapAnimation.timeline({ defaults: { duration: 1, ease: 'power1.out' } });
      const subline = SplitText.create(`.${CLASSNAMES.LANDING.SUBLINE}`, {type: 'words'})
      tl.from(`.${CLASSNAMES.GENERAL.CONVO_TITLE}`, {
        autoAlpha: 0
      })
      .from(`.${CLASSNAMES.LANDING.TAGLINE}`, {
        scale: 0.8,
        autoAlpha: 0
      }, "-=0.7")
      .from(subline.words, {
        stagger: 0.05,
        autoAlpha: 0,
        y: -10
      }, "-=1")
      .from(`.${s.main_button}`,{autoAlpha: 0}, "-=0.7")
      .to(`.${s.main_button}`, {
        backgroundImage: "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)",
        repeat: -1,
        yoyo: true,
        duration: 3,
      },"-=1").from(`.${CLASSNAMES.LANDING.ADDITIONAL_INFORMATION}`, {
        autoAlpha: 0,
        y: -20
      }, "-=2")
    },
    { scope: containerRef }
  );

  const handleGoToOnboarding = () => {
    trackCustomEvent("start_conversation", {
      value: 1
    })
    router.push(ROUTE_PATH.ONBOARDING);
  };
  return {
    containerRef,
    handleGoToOnboarding,
  };
};

export default useLandingPage;
