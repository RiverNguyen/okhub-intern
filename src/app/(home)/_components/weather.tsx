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
    <div className="relative w-full">
      {/* {Array.from({ length: 8 }).map((_, index) => {
        const top = Math.random() * 50; // Vị trí ngẫu nhiên theo chiều dọc
        const scale = Math.random() * 0.5 + 0.75; // Phóng to/thu nhỏ ngẫu nhiên
        const opacity = Math.random() * 0.5 + 0.5; // Làm mờ tự nhiên hơn
        const delay = Math.random() * 2; // Trễ animation ngẫu nhiên

        return (
          <Image
            key={index}
            src={`/cloud-${(index % 3) + 1}.svg`} // Chỉ dùng 3 loại cloud để lặp lại
            alt={`cloud-${index + 1}`}
            width={600}
            height={600}
            className="absolute animate-float"
            style={{
              top: `${top}%`,
              left: `${(index / 8) * 100}%`, // Trải đều theo chiều ngang
              transform: `scale(${scale})`,
              opacity: opacity,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })} */}
      <div className="relative px-[5rem]">
        <Carousel className="w-full h-[44rem] rounded-[1.5rem] overflow-hidden relative ">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="h-[44rem] p-0 ">
                <div
                  className="h-[44rem] w-full rounded-[1.5rem] relative"
                  style={{
                    background: `url(/images/weather-${
                      index + 1
                    }.png) center/cover`,
                  }}
                ></div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="size-[9.375rem] rounded-[0.71156rem] bg-white/20 backdrop-blur-xs absolute left-[2.06rem] top-[2.06rem] flex flex-col justify-center items-center gap-y-[0.75rem]">
            <p
              className="text-white font-extrabold text-[2rem]"
              style={{
                textShadow: "-1.139px 1.708px 0.569px rgba(0, 0, 0, 0.10)",
              }}
            >
              24ºC
            </p>
            <Image src={"/cloudy.svg"} alt="weather" width={80} height={80} />
            <p className="text-[1.125rem] text-white">19/3</p>
          </div>
          <div className="absolute bottom-[1.62rem] left-[3.75rem] right-[3.75rem] flex justify-between">
            <Separator className="absolute bottom-[8.5rem] " />
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
          <CarouselPrevious className="absolute top-1/2 left-[4rem]" />
          <CarouselNext className="absolute top-1/2 right-[4rem]" />
        </Carousel>
      </div>
    </div>
  );
};

export default Weather;
