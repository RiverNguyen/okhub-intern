"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { londrinaSolid } from "@/configs/font-family";
import { MoveRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TabCarousel from "./tab-carousel";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

const Client = () => {
  return (
    <>
      <div className="bg-[url(/images/bg-client.png)] w-full bg-no-repeat bg-cover relative mt-[0.8rem] pt-[8.31rem]">
        <div
          className="absolute top-0 bottom-0 right-0 left-0"
          style={{
            background:
              "linear-gradient(180deg, #122718 7.6%, rgba(18, 39, 24, 0.71) 43.62%, #122718 79.64%) ",
          }}
        />
        <div className="relative z-30">
          <h2
            className={`${londrinaSolid.className} text-[3.5rem] text-white font-bold text-center`}
          >
            Client Say
          </h2>
          <div className="flex justify-center items-center">
            <div className="relative z-50 flex items-center justify-center size-[31.375rem] mt-[5rem]">
              <Image
                src="/map-dashed.svg"
                alt="map-dashed"
                width={502}
                height={502}
                className="absolute"
              />

              <Carousel
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                  Fade(),
                ]}
                className="absolute left-[3.5rem]"
              >
                <CarouselContent>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <Image
                        src={`/images/client-${index + 1}.png`}
                        alt="client"
                        width={468}
                        height={468}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <Image
                src="/pin.svg"
                width={23.4}
                height={23.4}
                alt="pin"
                className="absolute bottom-[5.5rem] left-[8.5rem]"
              />
              <Image
                src="/pin.svg"
                width={23.4}
                height={23.4}
                alt="pin"
                className="absolute top-[54%] right-[10.5rem]"
              />
              <Image
                src="/pin.svg"
                width={23.4}
                height={23.4}
                alt="pin"
                className="absolute top-[27%] left-[13.5rem]"
              />
              <Image
                src="/pin.svg"
                width={23.4}
                height={23.4}
                alt="pin"
                className="absolute top-1/2 left-[6.5rem]"
              />
              <Image
                src="/pin.svg"
                width={23.4}
                height={23.4}
                alt="pin"
                className="absolute top-[7rem] right-[5.5rem]"
              />
              <Image
                src="/VietNam.svg"
                width={23.4}
                height={23.4}
                alt="pin"
                className="absolute top-[5rem] right-[9rem] z-50"
              />
            </div>
          </div>

          <div className="w-[23.81rem] h-[14.94rem] flex flex-col gap-y-[1rem] rounded-[1.5rem] bg-white/10 backdrop-blur-lg absolute top-[10rem] left-[16.3rem] px-[1rem] py-[1.5rem] group-hover:hidden">
            <div className="flex justify-between">
              <div className="flex gap-x-[1.25rem] items-center">
                <div className="w-[3rem] h-[3rem] rounded-full relative">
                  <Image
                    src={"/images/ava-client.png"}
                    alt="avatar-client"
                    fill
                    className="rounded-full object-cover object-right-bottom"
                  />
                </div>
                <div className="">
                  <p className="text-[1.25rem] font-bold text-[#F1F1F1]">
                    Athony Ng
                  </p>
                  <p className="text-[0.875rem] text-[#F1F1F1]">2024-03-20</p>
                </div>
              </div>
              <Image
                src={"/social-1.svg"}
                alt="social"
                width={36}
                height={36}
              />
            </div>
            <div className="flex gap-x-[0.25rem]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  fill="#E64827"
                  className="text-[#E64827] size-[1rem]"
                />
              ))}
            </div>
            <ScrollArea className="h-[5.31rem] text-[#F1F1F1] text-[0.875rem] w-[20.625rem]">
              Had 3 amazing days (and nights) out in the mountains for the Loop.
              Best experience ever in Vietnam 🇻🇳, but more than anything our
              tour guide Le Sy was the key to make it special. He is smart,
              funny, organized and he has very good English, friendly from the
              beginning to the end and always ready to help. Very good.
              Recommended for sure, and Sy is a plus!
            </ScrollArea>
            <Image
              src={"/dash-1.svg"}
              alt="dash"
              width={160}
              height={150}
              className="absolute top-1/2 right-0 transform translate-x-full"
            />
          </div>

          <div className="w-[23.81rem] h-[14.94rem] flex flex-col gap-y-[1rem] rounded-[1.5rem] bg-white/10 backdrop-blur-lg absolute top-[15.38rem] right-[9.62rem] px-[1rem] py-[1.5rem] z-50">
            <div className="flex justify-between">
              <div className="flex gap-x-[1.25rem] items-center">
                <div className="w-[3rem] h-[3rem] rounded-full relative">
                  <Image
                    src={"/images/ava-client.png"}
                    alt="avatar-client"
                    fill
                    className="rounded-full object-cover object-right-bottom"
                  />
                </div>
                <div className="">
                  <p className="text-[1.25rem] font-bold text-[#F1F1F1]">
                    Athony Ng
                  </p>
                  <p className="text-[0.875rem] text-[#F1F1F1]">2024-03-20</p>
                </div>
              </div>
              <Image
                src={"/social-1.svg"}
                alt="social"
                width={36}
                height={36}
              />
            </div>
            <div className="flex gap-x-[0.25rem]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  fill="#E64827"
                  className="text-[#E64827] size-[1rem]"
                />
              ))}
            </div>
            <ScrollArea className="h-[5.31rem] text-[#F1F1F1] text-[0.875rem] w-[20.625rem]">
              Had 3 amazing days (and nights) out in the mountains for the Loop.
              Best experience ever in Vietnam 🇻🇳, but more than anything our
              tour guide Le Sy was the key to make it special. He is smart,
              funny, organized and he has very good English, friendly from the
              beginning to the end and always ready to help. Very good.
              Recommended for sure, and Sy is a plus!
            </ScrollArea>
            <Image
              src={"/dash-2.svg"}
              alt="dash"
              width={220}
              height={220}
              className="absolute bottom-1/5 left-0 transform -translate-x-full"
            />
          </div>
        </div>
        <div className="relative z-30 flex flex-col gap-y-[0.75rem] justify-center items-center">
          <p className="text-white font-bold text-[0.875rem]">View us on:</p>
          <div className="flex gap-x-[0.75rem]">
            <Link href="/">
              <Image
                src={"/social-1.svg"}
                alt="social"
                width={36}
                height={36}
              />
            </Link>
            <Link href="/">
              <Image
                src={"/instagram.svg"}
                alt="social"
                width={36}
                height={36}
              />
            </Link>
            <Link href="/">
              <Image
                src={"/facebook.svg"}
                alt="social"
                width={36}
                height={36}
              />
            </Link>
            <Link href="/">
              <Image src={"/tiktok.svg"} alt="social" width={36} height={36} />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[url(/images/bg-client-1.png)] pb-[8rem] w-full bg-no-repeat bg-cover relative pl-[5rem]">
        <div
          className="absolute top-0 bottom-0 right-0 left-0"
          style={{
            background:
              "linear-gradient(180deg, #122718 7.6%, rgba(18, 39, 24, 0.71) 43.62%, #122718 79.64%)",
          }}
        />

        <div className="flex items-center pb-[3rem]">
          <div className="relative z-30 flex flex-col gap-y-[2.12rem]">
            <div className="">
              <h3 className="uppercase text-[1.125rem] text-white/40 font-bold">
                Hong hao Travel
              </h3>
              <h2
                className={`${londrinaSolid.className} text-[3.5rem] font-[900] text-white`}
              >
                Our Team
              </h2>
            </div>
            <p className="text-[0.875rem] w-[24rem] text-[#F1F1F1]/50">
              We pride ourselves on having a team of dedicated and passionate
              individuals who are committed to providing exceptional service and
              unforgettable experiences to our guests. Our team is comprised of
              knowledgeable professionals with diverse backgrounds and expertise
              in various aspects of the tourism industry.
            </p>
            <div className="flex gap-x-[1rem]">
              <button className="px-[1.25rem] py-[0.62rem] flex justify-center items-center text-white bg-[#DA4B19] rounded-[0.5rem] uppercase text-[0.875rem] font-bold hover:cursor-pointer group">
                Join with us{" "}
                <MoveRight className="ml-[0.5rem] group-hover:translate-x-1 transform duration-300 ease-in-out" />
              </button>
              <button className="px-[1.25rem] py-[0.62rem] flex justify-center items-center text-white/40 border border-white/40 rounded-[0.5rem] uppercase text-[0.875rem]hover:cursor-pointer font-bold group">
                Call us{" "}
                <MoveRight className="ml-[0.5rem] group-hover:translate-x-1 transform duration-300 ease-in-out" />
              </button>
            </div>
          </div>

          <div className="relative flex-1 z-30">
            <TabCarousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
