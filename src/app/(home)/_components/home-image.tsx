"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const HomeImage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 639.98);
  }, []);

  const firstImageRef = useRef<HTMLDivElement>(null);
  const secondImageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isMobile) return;

    const tl = gsap.timeline();

    tl.to(firstImageRef.current, {
      opacity: 0,
      scale: 1,
      duration: 0.8,
    })
      .set(firstImageRef.current, { display: "none" })
      .fromTo(
        secondImageRef.current,
        { opacity: 0, scale: 0.5, display: "block" },
        { opacity: 1, scale: 0.8, duration: 1.5 }
      )
      .to(secondImageRef.current, {
        scale: 15,
        duration: 1,
        ease: "power2.out",
      });

    return () => {
      tl.kill();
    };
  }, [isMobile]);

  return (
    <div className="relative w-full h-full ">
      <div ref={firstImageRef} className="absolute inset-0">
        <Image
          src="/images/home/home-image.png"
          alt="home"
          width={300}
          height={300}
          className="w-[30.3125rem] h-[32.5625rem] scale-75"
        />
      </div>

      <div ref={secondImageRef} className="absolute inset-0 opacity-0">
        <Image
          src="/default-map.svg"
          alt="map"
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HomeImage;
