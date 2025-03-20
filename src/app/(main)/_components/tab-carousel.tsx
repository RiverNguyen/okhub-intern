"use client";

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
import CardTour from "@/components/card-tour";
import { Tour } from "@/lib/type";

const TabCarousel = ({
  TourCard,
  tour,
}: {
  TourCard?: boolean;
  tour?: Tour[];
}) => {
  return (
    <>
      <div className="md:block hidden">
        <Tabs defaultValue="tour" className="bg-none">
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
                      <Card className="p-0 rounded-[1.5rem] relative group overflow-hidden">
                        <CardContent className="p-0">
                          <Image
                            src={"/images/home/tour.png"}
                            alt="tour"
                            width={300}
                            height={400}
                            className="object-cover w-full rounded-[1.5rem] group-hover:-translate-y-1/5 transition-transform duration-700"
                          />
                          <div className="py-[0.69rem] text-center group-hover:-translate-y-[5rem] transition-transform duration-700">
                            <p className="text-[1rem] text-[#E64827] font-bold">
                              Mr. Thanh Nguyen
                            </p>
                            <p className="flex justify-center items-center text-[0.875rem] text-[#262626]">
                              Tour Leader <Dot />3 years EXP
                            </p>
                          </div>
                          <p className="text-[0.75rem] text-[#828282] text-center absolute w-full px-[1rem] transition-transform duration-700 group-hover:-translate-y-[5.3rem] ">
                            “As a tour guide, my greatest joy is witnessing the
                            wonder and awe on travelers&apos; faces as they
                            discover the hidden gems and cultural treasures of
                            our destination.”
                          </p>
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
                            src={"/images/home/tour-1.png"}
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
      <div className="hidden-x-scroll flex flex-row gap-x-[0.5rem]  overflow-x-auto md:overflow-x-visible md:hidden mt-[2rem] md:mt-[3rem]">
        {TourCard
          ? tour?.map((tour) => (
              <div className="p-1" key={tour.id}>
                <CardTour data={tour} />
              </div>
            ))
          : Array.from({ length: 5 }).map((_, index) => (
              <div className="p-1" key={index}>
                <Card className="p-0 rounded-[1.5rem] relative group overflow-hidden w-[16rem]">
                  <CardContent className="p-0">
                    <Image
                      src={"/images/home/tour.png"}
                      alt="tour"
                      width={300}
                      height={400}
                      className="object-cover w-full rounded-[1.5rem] group-hover:-translate-y-1/5 transition-transform duration-700"
                    />
                    <div className="py-[0.69rem] text-center group-hover:-translate-y-[5rem] transition-transform duration-700">
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
            ))}
      </div>
    </>
  );
};

export default TabCarousel;
