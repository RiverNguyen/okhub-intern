import { Separator } from "@/components/ui/separator";
import { londrinaSolid } from "@/configs/font-family";
import { Dot } from "lucide-react";
import Image from "next/image";
import React from "react";

const BannerMobile = () => {
  return (
    <div className="z-10 flex flex-col justify-center items-center mt-[1.25rem] px-[1rem] md:px-[5rem] md:hidden">
      <div className="relative">
        <div className="about-title">
          <div className="">
            <div className="flex items-center text-black gap-x-[0.5rem]">
              <p className="flex items-center text-[1rem] font-extrabold gap-[0.375rem]">
                <Image
                  src={"/clock.svg"}
                  alt="clock"
                  width={24}
                  height={24}
                  className="size-[1.5rem]"
                />
                Intermediate
              </p>
              <Dot />
              <p className="flex items-center text-[1rem]">3 Days / 4 Night</p>
            </div>
            <h1
              className={`${londrinaSolid.className} text-[2rem] font-[900] text-black mt-[0.75rem]`}
            >
              Ha Giang Loop tour: Itinerary in 3 Days 4 Nights
            </h1>
            <div className="grid md:grid-cols-2 mt-[1.5625rem] gap-y-[1.25rem] gap-x-[3rem] ">
              <div className="flex flex-col gap-y-[1rem]">
                <div className="flex flex-col gap-y-[0.5rem]">
                  <div className="flex items-center gap-x-[0.25rem] ">
                    <Image
                      src={"/star-color.svg"}
                      alt="star"
                      height={24}
                      width={24}
                    />
                    <p className="uppercase text-[#828282] text-[1rem]">
                      Special
                    </p>
                  </div>
                  <Separator className="bg-gradient-to-r from-[#D9D9D9] to-transparent" />
                  <ul className="list-disc list-inside text-black text-[0.75rem] font-bold">
                    <li>Expert Local Guides good English</li>
                    <li>Book now, pay later</li>
                    <li>Flexible cancellation policy</li>
                    <li>Tours accommodate a maximum of 10 guests</li>
                    <li>
                      Creating job opportunities for the Vietnamese community
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-y-[0.5rem]">
                  <div className="flex items-center gap-x-[0.25rem] ">
                    <Image
                      src={"/location-color.svg"}
                      alt="location"
                      height={24}
                      width={24}
                    />
                    <p className="uppercase text-[#828282] text-[1rem]">
                      Destination
                    </p>
                  </div>
                  <Separator className="bg-gradient-to-r from-[#D9D9D9] to-transparent" />
                  <p className="text-black text-[0.75rem] font-bold">
                    Hanoi - Ba Be - Meo Vac - Dong Van - Ha Giang
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-y-[1rem]">
                <div className="flex flex-col gap-y-[0.5rem]">
                  <div className="flex items-center gap-x-[0.25rem] ">
                    <Image
                      src={"/room-color.svg"}
                      alt="star"
                      height={24}
                      width={24}
                    />
                    <p className="uppercase text-[#828282] text-[1rem]">
                      ACCOMMODATION
                    </p>
                  </div>
                  <Separator className="bg-gradient-to-r from-[#D9D9D9] to-transparent" />
                  <ul className="list-disc list-inside text-black text-[0.75rem] font-bold">
                    <li>Doom Room</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-y-[0.5rem]">
                  <div className="flex items-center gap-x-[0.25rem] ">
                    <Image
                      src={"/motor-color.svg"}
                      alt="location"
                      height={24}
                      width={24}
                    />
                    <p className="uppercase text-[#828282] text-[1rem]">
                      TRANSPORT
                    </p>
                  </div>
                  <Separator className="bg-gradient-to-r from-[#D9D9D9] to-transparent" />
                  <ul className="list-disc list-inside text-black text-[0.75rem] font-bold">
                    <li>Sleeper bus</li>
                    <li>Xe Wave, Vision</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-6 w-[8.5rem] h-[7rem] flex justify-center items-center z-30">
            <Image
              src={"/tours/images/price.png"}
              alt="price"
              fill
              className="object-cover scale-105"
            />
            <p className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 text-white text-[1.25rem] font-bold">
              From 169$
            </p>
            <Image
              src={"/tours/svg/text-circle.svg"}
              alt="text"
              fill
              className="spinner mt-[0.725rem] scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerMobile;
