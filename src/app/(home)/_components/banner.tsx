"use client";

import { useEffect, useRef } from "react";
import { Check, MoveRight } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { havana, londrinaSolid } from "@/configs/font-family";
import Mountain from "./mountain";

gsap.registerPlugin(ScrollTrigger);

export const Banner = () => {
  const about = [
    { text: "13 years experience" },
    { text: "Personalization" },
    { text: "Tour guide with good English" },
    { text: "10.000 customers" },
    { text: "Unique Experiences" },
  ];

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      gsap.fromTo(
        videoRef.current,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: videoRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div className="h-[161.3rem] relative z-50">
      <div className="w-full absolute -top-[5.25rem] h-[9.25rem] ">
        <Image src={"/mountain.svg"} alt="mountain" fill />
      </div>

      <div className="w-full bg-[linear-gradient(180deg,#122718_50%,rgba(18,39,24,0.85)_70%,#122718_100%)] absolute top-0 right-0 bottom-0 left-0">
        <div className="flex flex-col gap-y-[4rem] items-center justify-center px-[5rem] text-white">
          <Image src={"/logo-1.svg"} alt="logo-1" width={112} height={112} />
          <p
            className={`text-[3.5rem] w-[53.75rem] text-center font-[900] ${londrinaSolid.className}`}
          >
            Hong Hao Travel is a travel company in Ha Giang, we specialize in
            organizing unforgettable tours to explore Ha Giang loop but still
            focus on the pristine nature of nature.
          </p>
          <div className="flex gap-x-[2.5rem] justify-center items-center uppercase">
            {about.map((item, index) => (
              <div
                key={index}
                className="relative size-[12.5rem] flex justify-center items-center"
              >
                <div
                  className="absolute inset-0 border border-dashed rounded-full animate-spin"
                  style={{ animationDuration: "2s" }}
                ></div>
                <p className="relative text-center w-[6.88rem] text-[0.875rem] font-bold">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[url(/bg-banner.svg)] bg-no-repeat bg-contain h-full w-full opacity-5 z-20 absolute top-0"></div>
        <div className="text-white flex flex-col gap-y-[2rem] mt-[8rem] items-center justify-center">
          <p className="text-[0.875rem] font-extrabold">
            EXPLORE YOUR JOURNEY WITH US
          </p>
          <Image
            src={"/arrow-icon.svg"}
            alt="icon"
            width={49}
            height={49}
            className="rotate-180"
          />
        </div>
        <div className="mt-[3.5rem] flex justify-between px-[5rem]">
          <div>
            <h3
              className={`text-[3.5rem] font-[900] ${londrinaSolid.className} text-white`}
            >
              HONG HAO MOTORBIKE TOUR
            </h3>
            <p className="mt-[3.5rem] w-[38.815rem] text-[#C5C5C5] text-[1rem] font-normal leading-[1.5rem]">
              Experience the raw beauty of Hà Giang with our immersive travel
              adventures. From rugged mountain landscapes to vibrant ethnic
              cultures, Hà Giang offers a truly unique and authentic experience.
              Explore remote villages.
            </p>
            <ul className="*:flex items-center mt-[1rem] *:mt-[0.5rem] *:text-white font-bold *:text-[1rem]">
              <li>
                <Check className="mr-[0.56rem] text-green-500" />
                Tours accommodate a maximum of 10 guests
              </li>
              <li>
                <Check className="mr-[0.56rem] text-green-500" />
                Flexible cancellation policy
              </li>
              <li>
                <Check className="mr-[0.56rem] text-green-500" />
                Book now, pay later
              </li>
              <li>
                <Check className="mr-[0.56rem] text-green-500" />
                Fluent English-speaking guides
              </li>
              <li>
                <Check className="mr-[0.56rem] text-green-500" />
                Creating job opportunities for the Vietnamese community
              </li>
            </ul>
            <div className="flex mt-[2rem] gap-x-[1rem]">
              <button className="px-[2rem] py-[1rem] flex justify-center items-center text-white bg-[#DA4B19] rounded-[0.5rem] uppercase text-[0.875rem] font-bold hover:cursor-pointer">
                Book Now <MoveRight className="ml-[0.5rem]" />
              </button>
              <button className="px-[2rem] py-[1rem] flex justify-center items-center text-white/40 border border-white/40 rounded-[0.5rem] uppercase text-[0.875rem] hover:cursor-pointer font-bold">
                All Tour <MoveRight className="ml-[0.5rem]" />
              </button>
            </div>
          </div>
          <Mountain />
        </div>
        <div className="flex flex-col justify-center items-center relative z-30 mt-[10rem]">
          <p className="uppercase text-white/60 text-[1.125rem] font-bold leading-[1.125rem]">
            Welcome to
          </p>
          <h3
            className={`${londrinaSolid.className} text-white uppercase font-[900] text-[3.5rem]`}
          >
            HA GIANG NATURALLY
          </h3>
          <h3
            className={`${havana.className} text-[15.625rem] text-white -mt-[6.675rem]`}
          >
            Beautiful
          </h3>
        </div>
        <video
          ref={videoRef}
          src="https://cms.honghaotravel.com/wp-content/uploads/0622.mov"
          autoPlay
          loop
          playsInline
          muted
          className="transition-transform duration-1000 ease-out -mt-[28rem]"
        ></video>
      </div>
    </div>
  );
};
