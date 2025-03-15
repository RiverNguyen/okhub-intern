import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const Weather = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="relative  z-30 -mt-[9rem]">
      <div className="h-[10rem] overflow-hidden relative z-40 -ml-[20rem] w-[calc(100% + 16rem)]">
        <div
          className="absolute h-[2rem] bottom-4 left-10 z-30 right-0"
          style={{
            background:
              "linear-gradient(0deg, #FFF 50%, rgba(255, 255, 255, 0) 100%)",
          }}
        ></div>
        {Array.from({ length: 30 }).map((_, index) => {
          const leftPosition = `${(index / 29) * 100}%`;
          const scaleSize = 0.8 + Math.random() * 0.5;
          const opacity = 0.5 + Math.random() * 0.5;
          const blurAmount = Math.random() * 5;
          const topPosition = Math.random() * 5;

          return (
            <Image
              key={index}
              src={`/cloud-${(index % 2) + 2}.svg`}
              alt={`cloud-${index + 1}`}
              width={1000}
              height={800}
              className={`absolute ${
                index === 0 ? "animate-none" : "animate-float"
              }`}
              style={{
                left: leftPosition,
                top: `${topPosition}rem`,
                transform: `scale(${scaleSize})`,
                opacity: opacity,
                zIndex: 50,
                filter: `blur(${blurAmount}px)`,
                mixBlendMode: "overlay",
              }}
            />
          );
        })}
      </div>

      <div className="relative px-[1rem] md:px-[5rem] ">
        <Carousel className="w-full h-[16rem] md:h-[44rem] rounded-[1.5rem] overflow-hidden relative ">
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index} className="h-[44rem] p-0 ">
                <div
                  className="h-[16rem] md:h-[44rem] w-full rounded-[1.5rem] relative"
                  style={{
                    background: `url(/images/weather-${
                      index + 1
                    }.png) center/cover`,
                  }}
                ></div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="rounded-[0.71156rem] bg-white/20 backdrop-blur-xs absolute md:left-[2.06rem] md:top-[2.06rem] top-[0.75rem] left-[0.75rem] flex flex-row-reverse md:flex-col justify-center items-center gap-x-[0.5rem] py-[0.45rem] px-[0.5rem] md:py-[0.5rem] md:px-[2.5rem]">
            <p
              className="text-white font-extrabold text-[1.25rem] md:text-[2rem]"
              style={{
                textShadow: "-1.139px 1.708px 0.569px rgba(0, 0, 0, 0.10)",
              }}
            >
              24ºC
            </p>
            <Image
              src={"/cloudy.svg"}
              alt="weather"
              width={80}
              height={80}
              className="size-[2.5rem] md:size-[4rem]"
            />
            <p className="text-[1.125rem] text-white md:block hidden">19/3</p>
          </div>
          <div className="absolute bottom-[1.62rem] left-[3.75rem] right-[3.75rem] justify-between md:flex hidden">
            <Separator className="absolute bottom-[8.5rem]" />
            {months.map((month, index) => (
              <div
                key={index}
                className="w-[5.25rem] h-[6.75rem] rounded-[0.71156rem] backdrop-blur-xs"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.38)",
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.01) 100%)",
                }}
              >
                <div className="flex flex-col items-center justify-center text-white pt-[0.4rem]">
                  <p className="text-[1rem] font-bold uppercase">{month}</p>
                  <p className="text-[0.75rem]">Degree</p>
                  <p className="text-[0.75rem] font-bold">27-32</p>
                  <Image src={"/rain.svg"} alt="rain" width={16} height={16} />
                  <p className="text-[0.75rem] font-bold">60-80 mm</p>
                </div>
              </div>
            ))}
          </div>
          <CarouselPrevious className="absolute md:flex hidden top-1/2 left-[4rem]" />
          <CarouselNext className="absolute md:flex hidden top-1/2 right-[4rem]" />
        </Carousel>
        <div className="hidden-x-scroll gap-x-[0.75rem] whitespace-nowrap overflow-x-auto mt-[1rem] flex md:hidden">
          {months.map((month, index) => (
            <div
              key={index}
              className="w-[5.25rem] h-[6.75rem] rounded-[0.71156rem] backdrop-blur-xs bg-black/15 shrink-0"
            >
              <div className="flex flex-col items-center justify-center text-[#6A6A6A] opacity-65 pt-[0.4rem]">
                <p className="text-[1rem] font-bold uppercase text-black opacity-100">
                  {month}
                </p>
                <p className="text-[0.75rem]">Degree</p>
                <p className="text-[0.75rem] font-bold">27-32</p>
                <Image
                  src={"/rain-color.svg"}
                  alt="rain"
                  width={16}
                  height={16}
                />
                <p className="text-[0.75rem] font-bold">60-80 mm</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weather;
