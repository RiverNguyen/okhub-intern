import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { Tour } from "@/lib/type";
import { cn } from "@/lib/utils";

const CardTour = ({ data, full }: { data: Tour; full?: boolean }) => {
  return (
    <Card
      className={cn(
        `p-0 rounded-[1.5rem]  bg-[url(/images/home/tour.png)]  bg-cover bg-bottom bg-no-repeat relative group overflow-hidden`,
        full
          ? "w-full h-[15rem] md:h-[35rem] md:w-[21.3175rem]"
          : "w-[16.8755rem] md:w-[21.3175rem] h-[23.33956rem] md:h-[35rem]"
      )}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(18, 39, 24, 0.00) 60%, #122718 100%)",
        }}
      />
      <CardContent className="p-0 rounded-[1.5rem]">
        <div className="absolute group-hover:bottom-[4.4125rem] duration-500 transform -bottom-[5.25rem] left-[1rem] flex flex-col gap-y-[0.8125rem]">
          <div className="absolute group-hover:-top-[22rem] duration-500 transform -top-[5rem] md:-top-[6rem]">
            <div className="relative w-fit group-hover:opacity-0 duration-500 transform border border-white/50 mb-[0.8125rem] px-[0.5rem] md:px-[0.75rem] py-[0.25rem] md:py-[0.38rem] bg-white/20 rounded-full backdrop-blur-xs overflow-hidden">
              <div
                className="flex group-hover:h-0 h-[5.10919rem] w-[3.80475rem] rotate-[-24.824deg] opacity-80 absolute top-[-1.28494rem] right-[-1.27806rem] animate-leftToRight"
                style={{
                  background:
                    "linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, .3) 50%, rgba(255, 253, 253, 0))",
                }}
              />
              <p className="text-[0.75rem] md:text-[1rem] flex items-center text-white gap-x-[0.5rem]">
                <Image src={"/clock.svg"} alt="clock" width={24} height={24} />{" "}
                {data?.duration}
              </p>
            </div>
            <div className="text-white flex items-center gap-x-[1.25rem]">
              <p className="text-[1.125rem] md:text-[1.5rem] font-bold flex items-center gap-[0.5rem] ">
                ${data?.price.self_driving}
                <span className="text-[0.75rem] md:text-[0.875rem] font-normal underline">
                  Self - Driving
                </span>
              </p>
              <p className="text-[1.125rem] md:text-[1.5rem] font-bold flex items-center gap-[0.5rem]">
                ${data?.price.local_driver}
                <span className="text-[0.75rem] md:text-[0.875rem] font-normal underline">
                  Local Driver
                </span>
              </p>
            </div>
          </div>
          <div className="text-white">
            <p className="text-[1rem] md:w-auto md:text-[1.25rem] font-[900] group-hover:underline transform duration-300">
              {data?.title}
            </p>
            <br />

            <p className="flex items-center gap-x-[0.25rem] text-[0.875rem] font-bold">
              <Image src={"/room.svg"} alt="room" height={20} width={24} />
              Accommodation:{" "}
              <span className="font-normal">{data?.accommodation}</span>
            </p>
            <p className="flex items-center gap-x-[0.25rem] text-[0.875rem] font-bold">
              <Image
                src={"/motorbike.svg"}
                alt="motorbike"
                height={18}
                width={24}
              />
              Motorbike:{" "}
              <span className="font-normal">{data?.motorbike.join(", ")}</span>
            </p>
            <p className="flex items-center gap-x-[0.25rem] text-[0.875rem] font-bold">
              <Image src={"/user.svg"} alt="room" height={24} width={24} />
              Tour guide:{" "}
              <span className="font-normal">{data?.tour_guide}</span>
            </p>
            <p className="flex items-center gap-x-[0.25rem] text-[0.875rem] font-bold">
              <Image src={"/bus.svg"} alt="room" height={24} width={24} />
              Transport: <span className="font-normal">{data?.transport}</span>
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
