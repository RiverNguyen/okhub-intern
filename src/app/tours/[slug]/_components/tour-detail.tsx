import { londrinaSolid } from "@/configs/font-family";
import { Dot } from "lucide-react";
import Image from "next/image";
import React from "react";
import TourContent from "./tour-content";

const TourDetail = () => {
  return (
    <div className="py-[8.175rem] pl-[5rem] flex items-center overflow-y-hidden">
      <Image
        src={"/images/home/tour-2.png"}
        alt="tour"
        width={800}
        height={800}
        className="w-[33.75rem] h-[42rem] object-contain"
      />
      <div
        className="w-[70.5rem] h-[42rem] bg-[#FAFAFA] rounded-[2rem] py-[6.175rem] over pl-[2.125rem]"
        style={{
          boxShadow:
            "-206px 319px 106px 0px rgba(13, 48, 33, 0.00), -132px 204px 97px 0px rgba(13, 48, 33, 0.01), -33px 51px 61px 0px rgba(13, 48, 33, 0.09), -8px 13px 33px 0px rgba(13, 48, 33, 0.10)",
        }}
      >
        <div className="flex items-center gap-x-[0.5rem]">
          <p className="flex items-center text-[1rem] font-extrabold gap-[0.375rem]">
            <Image
              src={"/clock.svg"}
              alt="clock"
              width={24}
              height={24}
              className="size-[1.5rem]"
            />
            Time
          </p>
          <Dot className="text-[#A9A9A9]" />
          <p className="flex items-center text-[1rem] text-[#A9A9A9]">
            3 Days / 4 Night
          </p>
        </div>
        <div className="flex justify-between items-center pr-[7.3125rem]">
          <p
            className={`${londrinaSolid.className} text-[2rem] font-[900] text-[#262626]`}
          >
            Schedule tour: 3 Days 4 Nights
          </p>
          <div className="flex items-center gap-x-[1.25rem]">
            <p className="text-[#E64827] text-[1.5rem] font-bold flex items-center gap-x-[0.45rem]">
              $169{" "}
              <span className="text-[0.875rem] border-b border-black font-normal text-[#262626]">
                Self - Driving
              </span>
            </p>
            <p className="text-[#E64827] text-[1.5rem] font-bold flex items-center gap-x-[0.45rem]">
              $199{" "}
              <span className="text-[0.875rem] border-b border-black font-normal text-[#262626]">
                Local driver
              </span>
            </p>
          </div>
        </div>
        <div className="h-full w-full overflow-hidden pr-[7.25rem] flex">
          <TourContent />
        </div>
      </div>
    </div>
  );
};

export default TourDetail;
