import { londrinaSolid } from "@/configs/font-family";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Plan = () => {
  return (
    <div className="relative h-[26.3125rem] md:h-[50rem] w-full mt-[6rem] md:mt-[7rem] md:pr-[2.4125rem] ">
      <Image
        src={"/blog/images/bg-start.png"}
        alt="background"
        fill
        className="md:block hidden"
      />
      <Image
        src={"/blog/images/bg-start-mobi.png"}
        alt="background"
        quality={100}
        fill
        className="block md:hidden object-cover"
      />

      <Image
        src={"/blog/images/big-blog.png"}
        alt="image"
        width={1000}
        height={1000}
        className="w-[60.5875rem] h-[40rem] absolute top-[6.25rem] left-[5rem] rounded-[1.5rem] md:block hidden"
      />
      <Image
        src={"/blog/images/spin.png"}
        alt="spin"
        width={250}
        height={250}
        className="absolute -top-[4.5rem] left-[13rem] md:top-[2.5rem] size-[8.51563rem] md:left-[2rem] spinner z-30"
      />
      <div className="relative z-50 flex flex-col items-center md:items-end justify-center h-full">
        <div className="md:w-[27rem] text-center flex items-center flex-col gap-y-[2.0625rem]">
          <h3
            className={`${londrinaSolid.className} text-[#313131] text-center text-[1.5rem] md:text-[3.5rem]`}
          >
            Start planning your journey of joy
          </h3>
          <p className="md:w-[20.3125rem] text-[#C5C5C5]">
            Experience the raw beauty of Hà Giang with our immersive travel
            adventure a truly unique and authentic experience.{" "}
          </p>
          <div className="flex uppercase gap-[0.5rem]">
            <button className="flex py-[1rem] px-[2rem] border border-[#E64827] text-[#E64827] text-[0.875rem] font-bold rounded-[0.5rem] items-center justify-center gap-[0.5rem] group">
              ALL TOUR
            </button>
            <button className="flex py-[1rem] px-[2rem] bg-[#E64827] text-white text-[0.875rem] font-bold rounded-[0.5rem] items-center justify-center gap-[0.5rem] group">
              Call Us
              <MoveRight className="group-hover:translate-x-1 transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
