import { londrinaSolid } from "@/configs/font-family";
import { MoveRight } from "lucide-react";
import React from "react";
import TabCarousel from "../app/(main)/_components/tab-carousel";
import { cn } from "@/lib/utils";

const Team = ({ aboutPage }: { aboutPage?: boolean }) => {
  return (
    <div className="flex md:flex-row flex-col md:items-center pb-[3rem] pt-[2rem]">
      <div className="relative z-30 flex flex-col gap-y-[2.12rem]">
        <div className="">
          <h3
            className={cn(
              `uppercase text-[1.125rem] text-white/40 font-bold`,
              aboutPage && "text-[#262626]/40"
            )}
          >
            Hong hao Travel
          </h3>
          <h2
            className={cn(
              `${londrinaSolid.className} text-[3.5rem] font-[900] text-white`,
              aboutPage && "text-[#262626]"
            )}
          >
            Our Team
          </h2>
        </div>
        <p
          className={cn(
            `text-[0.875rem] w-[21rem] md:w-[24rem] text-[#F1F1F1]/50`,
            aboutPage && "text-[#6A6A6A]"
          )}
        >
          We pride ourselves on having a team of dedicated and passionate
          individuals who are committed to providing exceptional service and
          unforgettable experiences to our guests. Our team is comprised of
          knowledgeable professionals with diverse backgrounds and expertise in
          various aspects of the tourism industry.
        </p>
        <div className="flex gap-x-[1rem] pr-[1rem]">
          <button className="px-[1.25rem] py-[0.62rem] w-full flex justify-center items-center text-white bg-[#DA4B19] rounded-[0.5rem] uppercase text-[0.875rem] font-bold hover:cursor-pointer group">
            {aboutPage ? "About Us" : " Join with us"}{" "}
            <MoveRight className="ml-[0.5rem] group-hover:translate-x-1 transform duration-300 ease-in-out" />
          </button>
          <button
            className={cn(
              `px-[1.25rem] py-[0.62rem] w-full flex justify-center items-center text-white/40 border border-white/40 rounded-[0.5rem] uppercase text-[0.875rem]hover:cursor-pointer font-bold group`,
              aboutPage && "text-[#E64827] border-[#E64827]"
            )}
          >
            {aboutPage ? "All Tour" : "Contact Us"}{" "}
            <MoveRight className="ml-[0.5rem] group-hover:translate-x-1 transform duration-300 ease-in-out" />
          </button>
        </div>
      </div>

      <div className="relative flex-1 z-30">
        <TabCarousel />
      </div>
    </div>
  );
};

export default Team;
