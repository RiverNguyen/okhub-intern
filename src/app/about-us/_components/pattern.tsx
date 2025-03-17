import { londrinaSolid } from "@/configs/font-family";
import Image from "next/image";
import React from "react";

const Pattern = () => {
  return (
    <div className="bg-[url(/mountain-1.svg)]  h-[25rem] md:h-[54rem] w-full bg-no-repeat bg-contain bg-center relative scale-x-[-1]">
      <div className="bg-white/60 md:bg-white/85 absolute top-0 right-0 bottom-0 left-0 z-20" />

      <div className="absolute inset-0 scale-x-[-1] z-30 flex justify-center md:justify-start items-center">
        <Image
          src={"/images/about/sun.svg"}
          alt="sun"
          width={200}
          height={200}
          className="absolute top-[3rem] left-[1rem] md:left-[5rem]"
        />
        <p
          className={`w-[65.8125rem] text-[3.5rem] ${londrinaSolid.className} text-[#122718] pl-[5rem] my-[7rem] md:block hidden`}
        >
          Explore the rugged beauty of Ha Giang on our thrilling motorcycle
          tours. Feel the wind in your hair as you navigate through twisting
          mountain roads and remote villages, soaking in the breathtaking
          scenery of towering peaks and lush valleys. Our experienced guides
          will lead you on an unforgettable adventure
        </p>
        <p
          className={`px-[1.8rem] text-center font-[900] ${londrinaSolid.className} text-[#262626] text-[1.5rem] md:hidden block opacity-80`}
        >
          Hong Hao Travel is a travel company in Ha Giang, we specialize in
          organizing unforgettable tours to explore Ha Giang loop but still
          focus on the pristine nature of nature.
        </p>
      </div>
    </div>
  );
};

export default Pattern;
