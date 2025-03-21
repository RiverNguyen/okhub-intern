import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapScrollAnimation = (
  selector: string,
  animation: gsap.TweenVars
) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.from(selector, {
      scrollTrigger: {
        trigger: selector,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      ...animation,
    });
  }, [selector, animation]);
};
