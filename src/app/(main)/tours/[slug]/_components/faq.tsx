import AccordionContainer from "@/components/accordion";
import { londrinaSolid } from "@/configs/font-family";
import Image from "next/image";
import VideoPopup from "./video-popup";

const FAQ = () => {
  return (
    <div className="px-[5rem] mt-[3rem] md:block hidden">
      <h2
        className={`${londrinaSolid.className} text-[3.5rem] font-[900] text-[#262626]`}
      >
        FAQ about the trip
      </h2>
      <div className="flex justify-between">
        <AccordionContainer />
        <div className="relative h-[26.69638rem] w-[42.4485rem]">
          <Image
            src={"/tours/images/video.png"}
            alt="video"
            width={700}
            height={700}
            className="w-[42.4485rem] cursor-pointer h-[26.69638rem] rounded-[1.25rem] shrink-0"
          />
          <VideoPopup />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
