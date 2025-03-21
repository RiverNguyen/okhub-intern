"use client";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useGSAP } from "@gsap/react";
import Autoplay from "embla-carousel-autoplay";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const HomeCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);
  const divElement = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLImageElement>(null);
  const mapElement = useRef<HTMLImageElement>(null);

  const mm = gsap.matchMedia();

  useGSAP(() => {
    if (divElement.current && mapElement.current) {
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
        )
          .to(divElement.current, {
            opacity: 1,
            y: -820,
            scale: 1,
            duration: 2,
            ease: "power1.out",
          })
          .fromTo(
            mapElement.current,
            { opacity: 0, x: 300 },
            {
              opacity: 1,
              x: 0,
              duration: 2.5,
              ease: "power3.out",
            },
            "+=0.5"
          );
      });

      return () => {
        tl.kill();
        mm.revert();
      };
    }
  }, []);

  const locationPositions = [
    { bottom: "4.1rem", left: "3.8rem" },
    { bottom: "11.3rem", left: "3rem" },
    { bottom: "13.9rem", left: "8rem" },
    { bottom: "19.3rem", left: "14.5rem" },
    { bottom: "15.9rem", left: "16.2rem" },
    { bottom: "5rem", left: "11rem" },
  ];

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const newIndex = api.selectedScrollSnap() + 1;
      setCurrent(newIndex);
    };

    api.on("select", onSelect);
    setCurrent(api.selectedScrollSnap() + 1);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useGSAP(() => {
    if (locationRef.current) {
      const position =
        locationPositions[Math.min(current - 1, locationPositions.length - 1)];

      gsap.to(locationRef.current, {
        left: position.left,
        bottom: position.bottom,
        duration: 0.8,
        ease: "power2.out",
      });
    }

    return () => {
      gsap.killTweensOf(locationRef.current);
    };
  }, [current]);

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
          setApi={setApi}
          opts={{ loop: true }}
          className="w-full h-screen rounded-[1rem] overflow-hidden relative"
        >
          <CarouselContent>
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem key={index} className="h-screen p-0">
                <div
                  className="h-full w-full rounded-[1rem] relative"
                  style={{
                    background: `url(/blog/images/blog-${
                      index + 1
                    }.jpg) center/cover`,
                  }}
                ></div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div
          ref={mapElement}
          className="md:flex hidden w-full h-full absolute top-0 right-0 bg-[linear-gradient(90deg,rgba(9,42,27,0.00)_70%,#092A1B_100%)] z-10 flex-col justify-center items-center"
        >
          <div className="absolute top-[10rem] right-[3rem] z-20">
            <Image
              src={"/banner-slide.svg"}
              alt="map"
              width={1000}
              height={1000}
              className="object-contain w-[19.5rem] h-[24rem] "
            />
            <Image
              ref={locationRef}
              src={"/location-color.svg"}
              alt="location"
              width={24}
              height={24}
              className="absolute"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
