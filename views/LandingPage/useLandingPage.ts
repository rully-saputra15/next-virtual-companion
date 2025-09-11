import { gsapAnimation, SplitText, useGsap } from "@/animation/gsap";
import React, { useEffect, useRef, useState } from "react";
import s from "./LandingPage.module.css";
import { useRouter } from "next/navigation";
import { ROUTE_PATH } from "@/config/path";
import { CLASSNAMES } from "@/config/animation";
import { trackCustomEvent } from "@/lib/tracking";
import { TPageState } from "./types";

const useLandingPage = () => {
  const [pageState, setPageState] = useState<TPageState>("START");
  const containerRef = useRef(null);
  const router = useRouter();

  const { contextSafe } = useGsap(
    () => {
      const tl = gsapAnimation.timeline({
        defaults: { duration: 1, ease: "power1.out" },
      });
      tl.fromTo(
        `.${CLASSNAMES.LANDING.START_PAGE.TITLE}`,
        { scale: 0.9 },
        {
          autoAlpha: 1,
          scale: 1,
        }
      )
        .fromTo(
          `.${CLASSNAMES.LANDING.START_PAGE.SUBTITLE}`,
          {
            y: 20,
          },
          {
            y: 0,
            autoAlpha: 1,
          },
          "-=1"
        )
        .fromTo(
          `.${CLASSNAMES.LANDING.START_PAGE.CTA}`,
          {
            y: 20,
          },
          {
            y: 0,
            autoAlpha: 1,
          },
          "-=1"
        )
        .to(`.${CLASSNAMES.LANDING.START_PAGE.CTA}`, {
          repeat: -1,
          yoyo: true,
          scale: 1.1,
        });
    },
    { scope: containerRef }
  );

  useEffect(() => {
    if (pageState === "CTA") {
      _showCtaPage();
    }
  }, [pageState]);

  const handleGoToCtaPage = () => {
    setPageState("CTA");
    trackCustomEvent("tap_to_start", {
      value: 1,
    });
  };

  const _showCtaPage = contextSafe(() => {
    const tl = gsapAnimation.timeline({
      defaults: { duration: 1, ease: "power1.out" },
    });

    const subline = SplitText.create(`.${CLASSNAMES.LANDING.SUBLINE}`, {
      type: "words",
    });

    tl.to(`.${CLASSNAMES.GENERAL.CONVO_TITLE}`, {
      autoAlpha: 1,
    })
      .fromTo(
        `.${CLASSNAMES.LANDING.TAGLINE}`,
        { scale: 0.8 },
        {
          scale: 1,
          autoAlpha: 1,
        },
        "-=0.7"
      )
      .from(
        subline.words,
        {
          stagger: 0.05,
          autoAlpha: 0,
          y: -10,
          force3D: true,
        },
        "-=1"
      )
      .fromTo(`.${s.main_button}`, { autoAlpha: 0 }, { autoAlpha: 1 }, "-=0.7")
      .to(
        `.${s.main_button}`,
        {
          backgroundImage: "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)",
          repeat: -1,
          yoyo: true,
          y: -5,
          duration: 2,
        },
        "-=1"
      )
      .to(
        `.${CLASSNAMES.LANDING.ADDITIONAL_INFORMATION}`,
        {
          autoAlpha: 1,
        },
        "-=2"
      );
  });

  const handleGoToOnboarding = () => {
    trackCustomEvent("start_conversation", {
      value: 1,
    });
    router.push(ROUTE_PATH.ONBOARDING);
  };

  return {
    pageState,
    containerRef,
    handleGoToOnboarding,
    handleGoToCtaPage,
  };
};

export default useLandingPage;
