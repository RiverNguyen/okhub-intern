import Image from "next/image";
import React from "react";
import { londrinaSolid } from "@/configs/font-family";

export const Trip = () => {
  return (
    <div className="flex justify-between mt-[3.31rem]">
      <div className="mt-[2rem] sticky top-[5rem] max-h-screen">
        <p className="text-[1.125rem] font-bold text-[#262626]/60">EXPLORE</p>
        <h3
          className={`${londrinaSolid.className} text-[#262626] text-[3.5rem] font-[900]`}
        >
          BEST TRIPS FOR YOU
        </h3>
        <Image
          src={"/2days-3nights.svg"}
          alt="tour"
          width={468}
          height={450}
          className="mt-[2.44rem]"
        />
      </div>
      <div className="flex flex-col gap-y-[2rem]">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={`w-[47.3125rem] h-[34.375rem] bg-no-repeat rounded-[1.5rem] bg-contain relative`}
            style={{ backgroundImage: `url(/images/trip-${index + 1}.png)` }}
          >
            <div className="w-full bg-[linear-gradient(180deg,rgba(18,39,24,0.00)_10%,#122718_100%)] absolute top-0 right-0 bottom-0 left-0 rounded-[1.5rem]"></div>
            <div className="absolute bottom-[1.5rem] left-[1.5rem] text-white">
              <p className="text-[1.5rem] font-[900]">
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
            <div className="absolute right-[1.88rem] bottom-[1.2rem] ">
              <p className="text-[1rem] font-bold text-white/60 float-right">
                From To
              </p>
              <p className="font-bold text-[3rem] text-white">$199</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
