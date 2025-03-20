import TabCarousel from "@/app/(main)/_components/tab-carousel";
import CardTour from "@/components/card-tour";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { londrinaSolid } from "@/configs/font-family";
import { fetchTours } from "@/lib/api";
import { cn } from "@/lib/utils";

const Trip = async ({ color }: { color?: string }) => {
  const { tours } = await fetchTours(1, 8);

  return (
    <div className="mt-[4.3175rem] px-[1rem] md:px-[5rem] mb-[4rem]">
      <div className="uppercase mb-[2rem]">
        <h3
          className={cn(
            `text-[#262626] opacity-40 text-[0.875rem] md:text-[1.125rem] font-bold`
          )}
        >
          Explore
        </h3>
        <h1
          className={cn(
            `${londrinaSolid.className} font-[900] text-[2.5rem] md:text-[3.5rem]`
          )}
          style={{ color: `${color}` || "#262626" }}
        >
          Best trips <br className="md:hidden block" /> for you
        </h1>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full relative md:block hidden"
      >
        <CarouselContent>
          {tours.map((tour) => (
            <CarouselItem key={tour.id} className="basis-1/4 w-[17.6875rem]">
              <div className="p-1">
                <CardTour data={tour} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-[#F2531C] text-[#F2531C]" />
        <CarouselNext className="border-[#F2531C] text-[#F2531C]" />
      </Carousel>
      <div className="block md:hidden">
        <TabCarousel TourCard tour={tours} />
      </div>
    </div>
  );
};

export default Trip;
