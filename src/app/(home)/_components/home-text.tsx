"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const HomeText = () => {
  const divElement = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (divElement.current) {
      const tl = gsap.timeline();

      tl.to(divElement.current, {
        opacity: 0,
        y: -300,
        duration: 3.5,
      });

      return () => {
        tl.kill();
      };
    }
  }, []);

  return (
    <div ref={divElement} className="absolute top-[10rem] z-30 uppercase">
      <h3 className="text-white/60 font-semibold text-center text-[1.125rem]">
        Get Ready
      </h3>
      <h1 className="font-[900] text-[6rem] text-center leading-[6rem] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/10">
        Discover <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/10">
          Ha Giang Loop
        </span>
      </h1>
    </div>
  );
};

export default HomeText;
