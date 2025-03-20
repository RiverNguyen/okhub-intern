import BreadcrumbContainer from "@/components/breadcrumb";
import Team from "@/components/team";
import { londrinaSolid } from "@/configs/font-family";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import Trip from "../tours/_components/trip";

const DestinationPage = () => {
  return (
    <>
      <div className="bg-[url(/tours/images/banner.png)] bg-no-repeat bg-center md:bg-cover h-[25rem] md:h-[43.75rem] relative">
        <div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(18, 39, 24, 0.00) 50%, #122718 100%)",
          }}
        />
        <div className="relative z-10 flex md:flex-row flex-col justify-between items-center px-[1rem] md:px-[5rem] pt-[8.7rem]">
          <div className="">
            <div className="about-title">
              <Image
                src={"/destination/images/title.png"}
                alt="title-about"
                width={1000}
                height={1000}
                className="w-[16.35rem] h-[5.5rem] md:w-[42rem] md:h-[15.875rem]"
              />
            </div>
          </div>
          <div className="map-container relative md:block hidden">
            <Image
              src={"/tours/svg/map.svg"}
              alt="map"
              width={436}
              height={436}
            />
          </div>
        </div>
      </div>
      <BreadcrumbContainer first="Destination" />
      <div className="relative min-h-[50rem]">
        <div className="px-[1rem] md:px-[5rem] flex md:flex-row flex-col gap-x-[2.875rem] mt-[2.62rem]">
          <div className="md:w-[27.4125rem] z-20 md:sticky relative md:h-[10rem] md:top-[5.75rem] mb-[2rem] md:mb-0">
            <h2 className="text-[1.125rem] text-[#103223] font-bold opacity-40">
              DISCOVERY HA GIANG
            </h2>
            <h1
              className={`${londrinaSolid.className} text-[3.5rem] text-[#206545] font-[900]`}
            >
              DESTINATIONS
            </h1>
            <p className="text-[#454545] text-[1rem] mt-[1.5rem]">
              Ha Giang, nestled in the rugged mountains of northern Vietnam,
              beckons adventurers with its breathtaking scenery and vibrant
              cultural tapestry. From the towering peaks of the Dong Van Karst
              Plateau to the winding roads of the Ma Pi Leng Pass, Ha Giang
              offers an unforgettable journey through some of Vietnam&apos;s
              most awe-inspiring landscapes.
            </p>
            <Image
              src={"/sun.svg"}
              alt="sun"
              width={100}
              height={100}
              className="absolute left-[1rem] z-50 -top-[2rem] md:hidden block"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-x-[1.25rem] gap-y-[1.25rem] z-20">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="w-full md:w-[28rem] h-[30.875rem] relative group overflow-hidden rounded-[1.25rem] hover:cursor-pointer"
              >
                <div className="bg-black/40 z-10 duration-500 ease-linear group-hover:opacity-100 opacity-0 absolute inset-0 rounded-[1.25rem]"></div>
                <Image
                  src={"/destination/images/destination-card.png"}
                  alt="destination-card"
                  fill
                  className="object-cover rounded-[1.25rem] group-hover:scale-105 transition-transform duration-500 ease-linear"
                />
                <div className="absolute z-20 top-[1.5rem] left-[2rem] w-fit duration-700 transform mb-[0.8125rem] px-[0.5rem] md:px-[1.25rem] py-[0.25rem] md:py-[0.38rem] bg-[#FF350B]/70 group-hover:bg-white/15 rounded-full backdrop-blur-lg overflow-hidden">
                  <div
                    className="flex h-[5.10919rem] w-[3.80475rem] rotate-[-24.824deg] opacity-80 absolute top-[-1.28494rem] right-[-1.27806rem] animate-leftToRight"
                    style={{
                      background:
                        "linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, .3) 50%, rgba(255, 253, 253, 0))",
                    }}
                  />
                  <p className="text-[0.75rem] md:text-[0.875rem] font-medium flex items-center text-white gap-x-[0.5rem]">
                    Best destination
                  </p>
                </div>
                <div className="absolute z-20 bottom-[1.5rem] left-[2rem] right-[2rem] py-[1.5rem] px-[1rem] rounded-[1.5rem] bg-white/15 backdrop-blur-lg overflow-hidden transition-all duration-700 ease-linear group h-fit">
                  <div className="flex justify-between items-center">
                    <p className="truncate w-full text-white text-[1.5rem] font-extrabold">
                      Vách đá trắng điểm check-in độc lạ trên cung đường xuyên
                      mây ở Hà Giang
                    </p>
                    <MoveRightIcon className="text-[#E64827]" />
                  </div>
                  <div className="h-0 group-hover:h-[8rem] overflow-hidden transition-all duration-700 ease-linear">
                    <p className="md:w-[19.5625rem] mt-2 text-white text-base not-italic font-normal leading-[150%] tracking-[0.005rem]">
                      Dong Van, located in the northernmost region of Vietnam,
                      is a district renowned for its breathtaking landscapes,
                      rich cultural heritage, and vibrant ethnic diversity.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:sticky md:bottom-[10rem] md:mt-[9rem] relative mt-[2rem] h-[10rem] md:h-[25rem] w-full z-10">
          <Image
            src={"/sun.svg"}
            alt="sun"
            width={198}
            height={198}
            className="absolute left-[5rem]"
          />
          <Image
            src={"/destination/images/destination-footer.png"}
            alt="destination-footer"
            fill
          />
        </div>
      </div>
      <div className="pl-[1rem] md:px-[5rem]">
        <Team aboutPage />
      </div>
      <Trip />
    </>
  );
};

export default DestinationPage;
