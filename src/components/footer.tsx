import { Earth, Mail, MapPinHouse, PhoneCall } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Separator } from "@/components/ui/separator";
import Mountain from "@/app/(main)/_components/mountain";

const Footer = () => {
  return (
    <div className="bg-[url(/mountain-1.svg)] h-[20rem] md:h-[36rem] w-full bg-no-repeat bg-contain bg-center relative">
      <div className="bg-white/60 md:bg-white/85 absolute top-0 right-0 bottom-0 left-0 z-20" />
      <div className="pl-[1rem] md:pl-[5rem] pt-[4rem]">
        <div className="relative z-30">
          <Image
            src={"/images/home/logo.png"}
            alt="logo"
            width={200}
            height={200}
            className="-ml-[1rem]"
          />
          <div className="flex justify-between overflow-hidden">
            <div className="relative z-30">
              <div className="flex md:flex-row flex-col-reverse gap-y-[3rem] gap-x-[7.5rem] mt-[2.81rem]">
                <div className="flex flex-col gap-[1rem]">
                  <p className="text-[1rem] font-extrabold text-[#2E2E2E] uppercase">
                    Contact Us
                  </p>
                  <div className="*:flex flex flex-col gap-[1rem] *:items-center *:text-[1rem] text-[#6A6A6A]">
                    <p>
                      <PhoneCall className="mr-[0.5rem] text-[#E64827]" />
                      +84 941556338
                    </p>
                    <p>
                      <Mail className="mr-[0.5rem] text-[#E64827]" />
                      honghaotravel@gmail.com
                    </p>
                    <p>
                      <MapPinHouse className="mr-[0.5rem] text-[#E64827]" />
                      No. 10 Pham Hong Thai, Minh Khai Ward,{" "}
                      <br className="md:hidden block" /> City. Ha Giang.
                    </p>
                    <p>
                      <Earth className="mr-[0.5rem] text-[#E64827]" />
                      honghaotravel.com.vn
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-[1rem]">
                  <p className="text-[1rem] font-extrabold text-[#2E2E2E]">
                    ALL TOUR
                  </p>
                  <div className="flex flex-col gap-[1rem] *:flex *:items-center text-[1rem] text-[#6A6A6A] font-extrabold">
                    <p>
                      <Image
                        src={"/human.svg"}
                        alt="human"
                        width={20}
                        height={20}
                        className="mr-[0.5rem]"
                      />
                      Best Budget
                    </p>
                    <p>
                      <Image
                        src={"/human.svg"}
                        alt="human"
                        width={20}
                        height={20}
                        className="mr-[0.5rem]"
                      />
                      Standard Tour
                    </p>
                    <p>
                      <Image
                        src={"/human.svg"}
                        alt="human"
                        width={20}
                        height={20}
                        className="mr-[0.5rem]"
                      />
                      Premium Tour
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[2.81rem]">
                <p className="text-[1rem] font-extrabold text-[#2E2E2E] uppercase">
                  Follow Us
                </p>
                <div className="flex gap-[1rem] mt-[1rem]">
                  <Image
                    src={"/social-1.svg"}
                    alt="social"
                    width={100}
                    height={100}
                    className="size-[1.5rem]"
                  />
                  <Image
                    src={"/facebook.svg"}
                    alt="social"
                    width={100}
                    height={100}
                    className="size-[1.5rem]"
                  />
                  <Image
                    src={"/instagram.svg"}
                    alt="social"
                    width={100}
                    height={100}
                    className="size-[1.5rem]"
                  />
                  <Image
                    src={"/tiktok.svg"}
                    alt="social"
                    width={100}
                    height={100}
                    className="size-[1.5rem]"
                  />
                </div>
              </div>
            </div>
            <div className="z-10 md:overflow-visible">
              <Mountain className="top-20 right-20 md:top-0 md:right-0 md:h-full md:w-full h-[16rem] w-[16rem]" />
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-[5rem] mt-[4.31rem]">
        <Separator className="text-[#C5C5C5]" />
        <p className="text-[0.875rem] text-[#A9A9A9] font-bold text-center mt-[0.94rem] pb-[2.31rem]">
          © DESIGNED BY OKHUB AGENCY
        </p>
      </div>
    </div>
  );
};

export default Footer;
