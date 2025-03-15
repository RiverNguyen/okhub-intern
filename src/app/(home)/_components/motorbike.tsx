import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Image from "next/image";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Motorbike = () => {
  const motorbikeElement = useRef<HTMLImageElement>(null);
  const roadElement = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(
          roadElement.current,
          {
            strokeDasharray: roadElement.current?.getTotalLength(),
            strokeDashoffset: roadElement.current?.getTotalLength(),
          },
          { strokeDashoffset: 0, duration: 3, ease: "power2.out" }
        );

        if (roadElement.current) {
          gsap.to(motorbikeElement.current, {
            duration: 6,
            ease: "power2.inOut",
            motionPath: {
              path: roadElement.current,
              align: roadElement.current,
              alignOrigin: [0.5, 0.5],
            },
            onComplete: () => {
              gsap.to([motorbikeElement.current, roadElement.current], {
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                onComplete: () => {
                  if (motorbikeElement.current)
                    motorbikeElement.current.style.display = "none";
                  if (roadElement.current)
                    roadElement.current.style.display = "none";
                },
              });
            },
          });
        }
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative left-[2.5rem] -top-[3.7rem] z-50 hidden md:block"
    >
      <svg
        width="68"
        height="714"
        viewBox="0 0 68 714"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={roadElement}
          d="M12.1582 1.89551C9.56033 24.1217 1.63281 54.4379 1.63281 76.8445C1.63281 94.6201 5.52653 113.236 2.49001 130.848C-1.15298 151.977 12.7991 186.622 24.8723 203.614C41.5076 227.027 56.6881 254.78 62.9698 283.047C67.5053 303.457 66.8678 323.635 63.7318 344.194C62.2826 353.694 63.8138 363.39 62.3031 372.957C60.6279 383.567 58.2166 394.057 56.1123 404.578C52.6306 421.987 46.8569 437.015 36.7778 451.915C29.2215 463.085 23.0426 472.206 22.1102 485.726C20.9194 502.992 12.5121 520.164 9.34756 537.253C6.60436 552.066 10.2048 566.045 10.2048 580.684C10.2048 603.727 8.36815 626.026 14.9669 648.022C21.4484 669.626 13.2051 691.359 15.3479 712.787"
          stroke="#E64827"
          strokeWidth="2"
          strokeLinecap="round"
          id="line_path"
        ></path>
      </svg>

      <Image
        ref={motorbikeElement}
        src="/images/home/motorbike.png"
        alt="motorbike"
        width={60}
        height={60}
        className="absolute top-0 -left-[1rem]"
      />
    </div>
  );
};

export default Motorbike;
