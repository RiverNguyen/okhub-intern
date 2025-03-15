import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-[url(/images/about/bg-about.png)] bg-no-repeat bg-cover h-[88rem] relative">
      <div
        className="absolute top-0 left-0 right-0 bottom-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(18, 39, 24, 0.00) 0%, #122718 100%)",
        }}
      />
      <div className="relative z-10 flex">
        <div className="pl-[5rem] pt-[8.7rem] ">
          <Image
            src={"/images/about/title.png"}
            alt="title-about"
            width={840}
            height={355}
          />
          <p className="w-[50rem] text-white text-[1rem] mt-[3rem]">
            Ha Giang, nestled in the rugged mountains of northern Vietnam,
            beckons adventurers with its breathtaking scenery and vibrant
            cultural tapestry. From the towering peaks of the Dong Van Karst
            Plateau to the winding roads of the Ma Pi Leng Pass, Ha Giang offers
            an unforgettable journey through some of Vietnam&apos;s most
            awe-inspiring landscapes.
          </p>
          <div className="mt-[2rem]">
            <div className="flex uppercase gap-[0.5rem]">
              <button
                form="bookForm"
                type="submit"
                className="flex py-[1rem] px-[2rem] bg-[#E64827] text-white text-[0.875rem] font-bold rounded-[0.5rem] items-center justify-center gap-[0.5rem] group"
              >
                BOOK NOW{" "}
                <MoveRight className="group-hover:translate-x-1 transform duration-300" />
              </button>
              <button className="flex py-[1rem] px-[2rem] border border-white/60 text-white/60 text-[0.875rem] font-bold rounded-[0.5rem] items-center justify-center gap-[0.5rem] group">
                All Tour
                <MoveRight className="group-hover:translate-x-1 transform duration-300" />
              </button>
            </div>
          </div>
        </div>
        <div className="relative right-[12rem] top-[18rem]">
          <Image
            src={"/images/about/map.png"}
            alt="map"
            width={1000}
            height={1000}
          />
          <div className="absolute top-[50%] left-[40.8%] transform -translate-y-1/2 flex gap-x-[5rem]">
            <Image
              src={"/images/about/pin.svg"}
              alt="pin"
              width={20}
              height={20}
              className="animate-scale"
            />
            <div className="">
              <h2 className="text-[7.5rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-white from-30% to-transparent leading-32">
                10.000
              </h2>
              <p className="text-white px-[0.75rem] py-[0.375rem] rounded-[1.5rem] bg-black/15 backdrop-blur-lg w-fit ml-auto">
                Visitors experience
              </p>
            </div>
          </div>
          <div className="absolute bottom-[14%] -left-[64%] transform -translate-y-1/2 flex gap-x-[2.175rem]">
            <div className="">
              <h2 className="text-[7.5rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-white from-30% to-transparent leading-32">
                13 YEAR
              </h2>
              <p className="text-white px-[0.75rem] py-[0.375rem] rounded-[1.5rem] bg-black/15 backdrop-blur-lg w-fit ">
                Experience
              </p>
            </div>
            <Image
              src={"/images/about/pin.svg"}
              alt="pin"
              width={20}
              height={20}
              className="animate-scale"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
