import CardTour from "@/components/card-tour";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { londrinaSolid } from "@/configs/font-family";

const Trip = () => {
  return (
    <div className="mt-[4.3175rem] px-[5rem] mb-[4rem]">
      <div className="uppercase ">
        <h3 className="text-[#262626] opacity-40 text-[1.125rem] font-bold">
          Explore
        </h3>
        <h1
          className={`${londrinaSolid.className} text-[#262626] font-[900] text-[3.5rem]`}
        >
          Best trips for you
        </h1>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full relative"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/4 w-[17.6875rem]">
              <div className="p-1">
                <CardTour />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-[#F2531C] text-[#F2531C]" />
        <CarouselNext className="border-[#F2531C] text-[#F2531C]" />
      </Carousel>
    </div>
  );
};

export default Trip;
