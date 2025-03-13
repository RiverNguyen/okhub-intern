import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Motorbike = () => {
  const motorbikeElement = useRef<HTMLImageElement>(null);
  const roadElement = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(
          roadElement.current,
          { height: 0, opacity: 0 },
          { height: 700, opacity: 1, duration: 2, ease: "power2.out" }
        );

        const tl = gsap.timeline();
        tl.to(motorbikeElement.current, {
          y: 100,
          x: -5,
          duration: 2,
          ease: "power2.inOut",
        })
          .to(motorbikeElement.current, {
            y: 200,
            x: 30,
            duration: 2,
            ease: "power2.inOut",
          })
          .to(motorbikeElement.current, {
            y: 300,
            x: 40,
            duration: 2,
            ease: "power2.inOut",
          })
          .to(motorbikeElement.current, {
            y: 400,
            x: 15,
            duration: 2,
            ease: "power2.inOut",
          })
          .to(motorbikeElement.current, {
            y: 500,
            x: 10,
            duration: 2,
            ease: "power2.inOut",
          })
          .to(motorbikeElement.current, {
            y: 570,
            x: 10,
            duration: 2,
            ease: "power2.inOut",
          })
          .to([motorbikeElement.current, roadElement.current], {
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
              motorbikeElement.current!.style.display = "none";
              roadElement.current!.style.display = "none";
            },
          });
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="relative left-[2.5rem] -top-[3.7rem]">
      <div ref={roadElement} className="overflow-hidden w-[60px]">
        <Image src="/road.svg" alt="road" width={60} height={300} />
      </div>

      <Image
        ref={motorbikeElement}
        src="/images/motorbike.png"
        alt="motorbike"
        width={60}
        height={60}
        className="absolute top-0 -left-[1rem]"
      />
    </div>
  );
};

export default Motorbike;
