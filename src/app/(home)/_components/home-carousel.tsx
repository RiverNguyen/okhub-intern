"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useGSAP } from "@gsap/react";
import Autoplay from "embla-carousel-autoplay";
import gsap from "gsap";
import { useRef } from "react";

const HomeCarousel = () => {
  const divElement = useRef<HTMLDivElement>(null);

  const mm = gsap.matchMedia();

  useGSAP(() => {
    if (divElement.current) {
      const tl = gsap.timeline();
      mm.add("(min-width: 639.98px)", () => {
        tl.fromTo(
          divElement.current,
          { opacity: 0, y: 300, scale: 0 },
          {
            opacity: 1,
            y: 0,
            scale: 0.5,
            duration: 1.5,
            ease: "power3.out",
          }
        ).to(divElement.current, {
          opacity: 1,
          y: -820,
          scale: 1,
          duration: 2,
          ease: "power1.out",
        });
      });

      return () => {
        tl.kill();
      };
    }
  }, []);

  return (
    <div>
      <div
        ref={divElement}
        className="relative z-30 w-full h-screen -mt-[6rem] md:mt-0 md:opacity-0"
      >
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full h-screen rounded-[1rem] overflow-hidden relative"
        >
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index} className="h-screen p-0">
                <div
                  className="h-full w-full rounded-[1rem] relative"
                  style={{
                    background: `url(/images/home/weather-${
                      index + 1
                    }.png) center/cover`,
                  }}
                ></div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default HomeCarousel;
