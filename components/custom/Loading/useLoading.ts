import { gsapAnimation, useGsap } from "@/animation/gsap";
import { useRef } from "react";

export const LOADING_EMOJIS = ["😊", "🤗", "💙"];

const useLoading = () => {
  const containerRef = useRef(null);
  useGsap(
    () => {
      const tl = gsapAnimation.timeline({
        defaults: {
          duration: 0.3,
          repeat: -1,
          repeatDelay: 0.5,
          yoyo: true,
          scale: 1.1,
          y: -10,
          ease: "power2.out",
        },
      });
      tl.to(`.item-0`, {});
      tl.to(`.item-1`, {
      });
      tl.to(`.item-2`, {});
    },
    { scope: containerRef }
  );
  return { containerRef };
};

export default useLoading;
