import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { MoveRight } from "lucide-react";

const CardTour = () => {
  return (
    <Card className="p-0 rounded-[1.5rem] w-[21.3175rem] bg-[url(/images/home/tour.png)] h-[35rem] bg-cover bg-bottom bg-no-repeat relative group overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(18, 39, 24, 0.00) 60%, #122718 100%)",
        }}
      />
      <CardContent className="p-0 rounded-[1.5rem]">
        <div className="absolute group-hover:bottom-[4.4125rem] duration-500 transform -bottom-[5.25rem] left-[1rem] flex flex-col gap-y-[0.8125rem]">
          <div className="absolute group-hover:-top-[22rem] duration-500 transform -top-[6rem]">
            <div className="relative w-fit group-hover:opacity-0 duration-500 transform border border-white/50 mb-[0.8125rem] px-[0.5rem] md:px-[0.75rem] py-[0.25rem] md:py-[0.38rem] bg-white/20 rounded-full backdrop-blur-xs overflow-hidden">
              <div
                className="flex group-hover:h-0 h-[5.10919rem] w-[3.80475rem] rotate-[-24.824deg] opacity-80 absolute top-[-1.28494rem] right-[-1.27806rem] animate-leftToRight"
                style={{
                  background:
                    "linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, .3) 50%, rgba(255, 253, 253, 0))",
                }}
              />
              <p className="flex items-center text-white gap-x-[0.5rem]">
                <Image src={"/clock.svg"} alt="clock" width={24} height={24} />4
                Days 5 Nights
              </p>
            </div>
            <div className="text-white flex items-center gap-x-[1.25rem]">
              <p className="text-[1.5rem] font-bold flex items-center gap-[0.5rem] ">
                $199{" "}
                <span className="text-[0.875rem] font-normal underline">
                  Self - Driving
                </span>
              </p>
              <p className="text-[1.5rem] font-bold flex items-center gap-[0.5rem]">
                $199{" "}
                <span className="text-[0.875rem] font-normal underline">
                  Local Driver
                </span>
              </p>
            </div>
          </div>
          <div className="text-white md:block hidden">
            <p className="text-[1.25rem] font-[900] group-hover:underline transform duration-300">
              Ha Giang Loop tour: Itinerary in 4 Days 5 Nights
            </p>
            <br />

            <p className="flex items-center gap-x-[0.25rem] text-[0.875rem] font-bold">
              <Image src={"/room.svg"} alt="room" height={20} width={24} />
              Accommodation: <span className="font-normal">Phòng Doom</span>
            </p>
            <p className="flex items-center gap-x-[0.25rem] text-[0.875rem] font-bold">
              <Image
                src={"/motorbike.svg"}
                alt="motorbike"
                height={18}
                width={24}
              />
              Motorbike: <span className="font-normal">Xe Wave, Vision</span>
            </p>
            <p className="flex items-center gap-x-[0.25rem] text-[0.875rem] font-bold">
              <Image src={"/user.svg"} alt="room" height={24} width={24} />
              Tour guide:{" "}
              <span className="font-normal">
                01 Tour guide with good English
              </span>
            </p>
            <p className="flex items-center gap-x-[0.25rem] text-[0.875rem] font-bold">
              <Image src={"/bus.svg"} alt="room" height={24} width={24} />
              Transport:{" "}
              <span className="font-normal">Xe VIP, có trung chuyển</span>
            </p>
            <button className="px-[2rem] py-[1rem] bg-[#DA4B19] text-white flex justify-center items-center gap-x-[0.5rem] rounded-[1rem] absolute -left-[1rem] mt-[1rem] w-[calc(100%+1rem)]">
              Book Now
              <MoveRight />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardTour;
