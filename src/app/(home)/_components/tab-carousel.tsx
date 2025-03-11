import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTriggerCustom,
} from "@/components/ui/tabs";
import { Dot } from "lucide-react";
import Image from "next/image";

const TabCarousel = () => {
  return (
    <div>
      <Tabs defaultValue="account" className="bg-none">
        <TabsList className="bg-transparent flex gap-x-[2.25rem] ml-auto pr-[5rem] mb-[2rem]">
          <TabsTriggerCustom
            className="focus-visible:ring-0 focus-visible:outline-0"
            value="tour"
          >
            Tour Guild
          </TabsTriggerCustom>
          <TabsTriggerCustom value="rider">Rider</TabsTriggerCustom>
        </TabsList>
        <TabsContent value="tour" className="overflow-hidden ">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-screen-lg ml-auto relative"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="basis-[29%] w-[17.6875rem] h-[28.5rem]"
                >
                  <div className="p-1">
                    <Card className="p-0 rounded-[1.5rem]">
                      <CardContent className="p-0">
                        <Image
                          src={"/images/tour.png"}
                          alt="tour"
                          width={300}
                          height={400}
                          className="object-cover w-full rounded-[1.5rem]"
                        />
                        <div className="py-[0.69rem] text-center">
                          <p className="text-[1rem] text-[#E64827] font-bold">
                            Mr. Thanh Nguyen
                          </p>
                          <p className="flex justify-center items-center text-[0.875rem] text-[#262626]">
                            Tour Leader <Dot />3 years EXP
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext className="absolute bottom-0 right-[2.87rem]" />
          </Carousel>
        </TabsContent>
        <TabsContent value="rider" className="overflow-hidden">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-screen-lg ml-auto"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="basis-[29%] w-[17.6875rem] h-[28.5rem]"
                >
                  <div className="p-1">
                    <Card className="p-0 rounded-[1.5rem]">
                      <CardContent className="p-0">
                        <Image
                          src={"/images/tour-1.png"}
                          alt="tour"
                          width={300}
                          height={400}
                          className="object-cover w-full rounded-[1.5rem]"
                        />
                        <div className="py-[0.69rem] text-center">
                          <p className="text-[1rem] text-[#E64827] font-bold">
                            Mr. Thanh Nguyen
                          </p>
                          <p className="flex justify-center items-center text-[0.875rem] text-[#262626]">
                            Tour Leader <Dot />3 years EXP
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabCarousel;
