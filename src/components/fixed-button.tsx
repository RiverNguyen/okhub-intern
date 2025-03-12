"use client";

import FormPopup from "@/app/(home)/_components/form-popup";
import Image from "next/image";
import React from "react";

const FixedButton = () => {
  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-4 fixed right-[1.62rem] bottom-[2.88rem] z-[99]">
      <FormPopup />
      <button className="relative flex items-center justify-center -mt-3">
        <div className="absolute w-[2.3125rem] h-[2.3125rem] animate-ping rounded-full bg-white/15"></div>
        <Image
          src="/cta-call.svg"
          alt="Call icon"
          width={51}
          height={51}
          className="size-[3.125rem] relative z-10 ml-2"
        />
      </button>
      <button onClick={handleScrollUp}>
        <Image
          src="/scroll-up.svg"
          alt="scroll"
          width={44}
          height={44}
          className="relative z-10 cursor-pointer"
        />
      </button>
    </div>
  );
};

export default FixedButton;
