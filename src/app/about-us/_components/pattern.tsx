import { londrinaSolid } from "@/configs/font-family";
import Image from "next/image";
import React from "react";

const Pattern = () => {
  return (
    <div className="bg-[url(/mountain-1.svg)] md:h-[54rem] w-full bg-no-repeat bg-contain bg-center relative scale-x-[-1]">
      <div className="bg-white/60 md:bg-white/85 absolute top-0 right-0 bottom-0 left-0 z-20" />

      <div className="absolute inset-0 scale-x-[-1] z-30">
        <Image
          src={"/images/about/sun.svg"}
          alt="sun"
          width={200}
          height={200}
          className="absolute top-[3rem] left-[5rem]"
        />
        <p
          className={`w-[65.8125rem] text-[3.5rem] ${londrinaSolid.className} text-[#122718] pl-[5rem] my-[7rem]`}
        >
          Explore the rugged beauty of Ha Giang on our thrilling motorcycle
          tours. Feel the wind in your hair as you navigate through twisting
          mountain roads and remote villages, soaking in the breathtaking
          scenery of towering peaks and lush valleys. Our experienced guides
          will lead you on an unforgettable adventure
        </p>
      </div>
    </div>
  );
};

export default Pattern;
