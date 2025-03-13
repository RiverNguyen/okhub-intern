"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { londrinaSolid } from "@/configs/font-family";
import { MoveRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Trip = () => {
  const [currentImage, setCurrentImage] = useState("/images/tour-2.png");

  useEffect(() => {
    const sections = document.querySelectorAll(".trip-item");

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        onEnter: () => setCurrentImage(`/images/tour-${index + 2}.png`),
        onEnterBack: () => setCurrentImage(`/images/tour-${index + 2}.png`),
      });
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div className="flex justify-between -mt-[30rem]">
      <div className="mt-[2rem] sticky top-[5rem] h-fit">
        <p className="text-[1.125rem] font-bold text-[#262626]/60">EXPLORE</p>
        <h3
          className={`${londrinaSolid.className} text-[#262626] text-[3.5rem] font-[900]`}
        >
          BEST TRIPS FOR YOU
        </h3>
        mt-[3.31rem]
        <Image
          src={currentImage}
          alt="tour"
          width={468}
          height={450}
          className="mt-[2.44rem]"
        />
      </div>
      <div className="flex flex-col gap-y-[2rem]">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="trip-item w-[47.3125rem] h-[34.375rem] bg-no-repeat rounded-[1.5rem] bg-contain relative group hover:cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300"
            style={{ backgroundImage: `url(/images/trip-${index + 1}.png)` }}
          >
            <div className="w-full bg-[linear-gradient(180deg,rgba(18,39,24,0.00)_10%,#122718_100%)] absolute top-0 right-0 bottom-0 left-0 rounded-[1.5rem]"></div>
            <div className="absolute bottom-[1.5rem] left-[1.5rem] text-white">
              <p className="text-[1.5rem] font-[900] group-hover:underline transform duration-300">
                Ha Giang Loop tour: Itinerary in 4 Days 5 Nights
              </p>
              <p className="flex items-center gap-x-[0.25rem] text-[1rem] font-bold">
                <Image src={"/room.svg"} alt="room" height={20} width={24} />
                Accommodation: <span className="font-normal">Phòng Doom</span>
              </p>
              <p className="flex items-center gap-x-[0.25rem] text-[1rem] font-bold">
                <Image
                  src={"/motorbike.svg"}
                  alt="motorbike"
                  height={18}
                  width={24}
                />
                Motorbike: <span className="font-normal">Xe Wave, Vision</span>
              </p>
              <p className="flex items-center gap-x-[0.25rem] text-[1rem] font-bold">
                <Image src={"/user.svg"} alt="room" height={24} width={24} />
                Tour guide:{" "}
                <span className="font-normal">
                  01 Tour guide with good English
                </span>
              </p>
              <p className="flex items-center gap-x-[0.25rem] text-[1rem] font-bold">
                <Image src={"/bus.svg"} alt="room" height={24} width={24} />
                Transport:{" "}
                <span className="font-normal">Xe VIP, có trung chuyển</span>
              </p>
            </div>
            <div className="absolute top-[1.5rem] right-[1.5rem] px-[0.75rem] py-[0.38rem] bg-white/20 rounded-full backdrop-blur-xs">
              <p className="flex items-center text-white gap-x-[0.5rem]">
                <Image src={"/clock.svg"} alt="clock" width={24} height={24} />4
                Days 5 Nights
              </p>
            </div>
            <div className="absolute right-[1.88rem] bottom-[1.2rem] group-hover:bottom-[4.5rem] transition-all duration-300">
              <p className="text-[1rem] font-bold text-white/60 float-right">
                From To
              </p>
              <p className="font-bold text-[3rem] text-white">$199</p>
            </div>
            <button className="absolute -right-[6.8rem] bottom-[1.5rem] bg-[#DA4B19] text-white  text-[0.875rem] font-bold flex justify-center items-center gap-[0.23rem] px-[1.2rem] py-[0.8rem] rounded-[0.5rem] group-hover:right-[1.5rem] transition-all duration-300">
              Detail <MoveRight />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
