"use client";

import Image from "next/image";
import React, { useState } from "react";
import { londrinaSolid } from "@/configs/font-family";
import Marquee from "react-fast-marquee";
import { MoveRight } from "lucide-react";

const Gallery = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const images = Array.from(
    { length: 5 },
    (_, index) => `/images/gallery-${index + 1}.png`
  );

  const imagesReverse = [...images].reverse();

  return (
    <div className="relative mt-[3.81rem]">
      <Image
        src={"/gallery.svg"}
        className="absolute left-[4rem] z-50 hidden md:block"
        alt="gallery"
        width={76}
        height={513}
      />
      <div className="absolute top-[10rem] left-0 h-[22.125rem] w-[17.5rem]  z-40 hidden md:flex">
        <div className="w-full bg-white"></div>
        <div className="h-full w-[6.5rem] bg-[linear-gradient(270deg,rgba(255,255,255,0.00)_36.51%,#FFF_92.5%)]"></div>
      </div>
      <div className="pl-[13.12rem] md:flex gap-x-[3.94rem] items-center justify-between mb-[4.38rem] hidden">
        <h2 className={`${londrinaSolid.className} text-[3.5rem] font-[900]`}>
          THE GLADDEST MOMENT
        </h2>
        <div className="">
          <svg
            width="100"
            height="100"
            viewBox="0 0 200 200"
            className="w-[6.5625rem] h-[6.5625rem]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
            </defs>

            <image href="/map.svg" x="59.5" y="59.5" width="81" height="81" />

            <text
              fill="black"
              className="text-[0.875rem] text-center font-bold tracking-[7.4]"
            >
              <textPath
                href="#circlePath"
                startOffset="0%"
                className="animate-none hover:animate-spin-text"
              >
                Hong hao travel Hong hao travel
              </textPath>
            </text>
          </svg>
        </div>
        <div className="bg-gradient-to-r from-green-500/3 via-green-500/20 to-green-500/25 pr-[5rem] py-[1.44rem] pl-[2rem]">
          <p className="text-[0.875rem] text-right text-[#262626]">
            Don&apos;t hesitate to pick up your backpack and go. When you reach
            your destination and <br /> see all the beautiful things in sight,
            you will know that your efforts were worth it
          </p>
        </div>
      </div>
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="md:hidden block">
          <Marquee
            speed={100}
            gradient={false}
            pauseOnHover={false}
            play={!isPaused}
            className="ml-0 md:ml-[13.12rem]"
            loop={0}
          >
            {images.map((index) => (
              <div
                className="flex justify-center items-center gap-[1rem] mr-[1rem]"
                key={index}
              >
                <h2
                  className={`${londrinaSolid.className} text-[3.5rem] font-[900] text-[#23704D]`}
                >
                  THE GLADDEST MOMENT
                </h2>
                <Image src={"/map.svg"} alt="map 2" height={39} width={39} />
              </div>
            ))}
          </Marquee>
        </div>
        <Marquee
          speed={200}
          gradient={false}
          pauseOnHover={false}
          play={!isPaused}
          className="ml-0 md:ml-[13.12rem]"
          loop={0}
        >
          {images.map((src, index) => (
            <div
              key={`top-${index}`}
              className="relative w-[35.5rem] h-[21.125rem] mx-[0.375rem] group"
            >
              <Image
                src={src}
                alt={`gallery-top-${index + 1}`}
                layout="fill"
                className="object-center object-cover rounded-[1rem] hover:cursor-pointer group"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[6.5625rem] hidden group-hover:block">
                <Image
                  src={"/text-circle.svg"}
                  alt="text"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 brightness-100 invert animate-spin"
                  width={100}
                  height={100}
                />
                <Image
                  src={"/map-2.svg"}
                  alt="map 2"
                  height={39}
                  width={39}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          ))}
        </Marquee>

        <Marquee
          speed={200}
          gradient={false}
          pauseOnHover={false}
          play={!isPaused}
          className="mt-[0.75rem]"
          loop={0}
        >
          {imagesReverse.map((src, index) => (
            <div
              key={`bottom-${index}`}
              className="relative w-[35.5rem] h-[21.125rem] mx-[0.375rem] group"
            >
              <Image
                src={src}
                alt={`gallery-bottom-${index + 1}`}
                layout="fill"
                className="object-center object-cover rounded-[1rem] hover:cursor-pointer group"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[6.5625rem] hidden group-hover:block">
                <Image
                  src={"/text-circle.svg"}
                  alt="text"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 brightness-100 invert animate-spin"
                  width={100}
                  height={100}
                />
                <Image
                  src={"/map-2.svg"}
                  alt="map 2"
                  height={39}
                  width={39}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          ))}
        </Marquee>
        <div className="md:hidden flex justify-center mt-[0.5rem]">
          <button className="px-[1.5rem] py-[0.75rem] md:px-[2rem] md:py-[1rem] flex justify-center items-center text-white bg-[#DA4B19] rounded-[0.5rem] uppercase text-[0.875rem] font-bold hover:cursor-pointer">
            DISCOVERY
            <MoveRight className="ml-[0.5rem] size-4 md:size-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
