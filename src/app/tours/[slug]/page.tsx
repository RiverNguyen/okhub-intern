import { Separator } from "@/components/ui/separator";
import { londrinaSolid } from "@/configs/font-family";
import { Dot } from "lucide-react";
import Image from "next/image";
import BreadcrumbAbout from "./_components/breadcrumb";
import TourDetail from "./_components/tour-detail";
import FormBooking from "./_components/form-booking";

const TourDetailPage = () => {
  return (
    <>
      <div className="bg-[url(/tours/images/banner.png)] bg-no-repeat bg-center md:bg-cover h-[25rem] md:h-[43.75rem] relative">
        <div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(18, 39, 24, 0.00) 50%, #122718 100%)",
          }}
        />
        <div className="z-10 flex md:flex-row flex-col justify-center gap-x-[46rem] items-center px-[1rem] md:px-[5rem] pt-[8.7rem]">
          <div className="">
            <div className="about-title absolute bottom-[2rem] left-[5rem]">
              <div className="flex items-center">
                <div className="">
                  <div className="flex items-center text-white gap-x-[0.5rem]">
                    <p className="flex items-center text-[1rem] font-extrabold gap-[0.375rem]">
                      <Image
                        src={"/clock-white.svg"}
                        alt="clock"
                        width={24}
                        height={24}
                        className="size-[1.5rem]"
                      />
                      Intermediate
                    </p>
                    <Dot />
                    <p className="flex items-center text-[1rem]">
                      3 Days / 4 Night
                    </p>
                  </div>
                  <h1
                    className={`${londrinaSolid.className} text-[2rem] font-[900] text-white mt-[0.75rem]`}
                  >
                    Ha Giang Loop tour: Itinerary in 3 Days 4 Nights
                  </h1>
                  <div className="grid grid-cols-2 mt-[1.5625rem] gap-x-[3rem] ">
                    <div className="flex flex-col gap-y-[1rem]">
                      <div className="flex flex-col gap-y-[0.5rem]">
                        <div className="flex items-center gap-x-[0.25rem] ">
                          <Image
                            src={"/star.svg"}
                            alt="star"
                            height={24}
                            width={24}
                          />
                          <p className="uppercase text-[#C5C5C5] text-[1rem]">
                            Special
                          </p>
                        </div>
                        <Separator className="bg-gradient-to-r from-[#D9D9D9] to-transparent" />
                        <ul className="list-disc list-inside text-white text-[0.75rem] font-bold">
                          <li>Expert Local Guides good English</li>
                          <li>Book now, pay later</li>
                          <li>Flexible cancellation policy</li>
                          <li>Tours accommodate a maximum of 10 guests</li>
                          <li>
                            Creating job opportunities for the Vietnamese
                            community
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col gap-y-[0.5rem]">
                        <div className="flex items-center gap-x-[0.25rem] ">
                          <Image
                            src={"/location.svg"}
                            alt="location"
                            height={24}
                            width={24}
                          />
                          <p className="uppercase text-[#C5C5C5] text-[1rem]">
                            Destination
                          </p>
                        </div>
                        <Separator className="bg-gradient-to-r from-[#D9D9D9] to-transparent" />
                        <p className="text-white text-[0.75rem] font-bold">
                          Hanoi - Ba Be - Meo Vac - Dong Van - Ha Giang
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-y-[1rem]">
                      <div className="flex flex-col gap-y-[0.5rem]">
                        <div className="flex items-center gap-x-[0.25rem] ">
                          <Image
                            src={"/room.svg"}
                            alt="star"
                            height={24}
                            width={24}
                          />
                          <p className="uppercase text-[#C5C5C5] text-[1rem]">
                            ACCOMMODATION
                          </p>
                        </div>
                        <Separator className="bg-gradient-to-r from-[#D9D9D9] to-transparent" />
                        <ul className="list-disc list-inside text-white text-[0.75rem] font-bold">
                          <li>Doom Room</li>
                        </ul>
                      </div>
                      <div className="flex flex-col gap-y-[0.5rem]">
                        <div className="flex items-center gap-x-[0.25rem] ">
                          <Image
                            src={"/motorbike.svg"}
                            alt="location"
                            height={24}
                            width={24}
                          />
                          <p className="uppercase text-[#C5C5C5] text-[1rem]">
                            TRANSPORT
                          </p>
                        </div>
                        <Separator className="bg-gradient-to-r from-[#D9D9D9] to-transparent" />
                        <ul className="list-disc list-inside text-white text-[0.75rem] font-bold">
                          <li>Sleeper bus</li>
                          <li>Xe Wave, Vision</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-[8.5rem] h-[7rem] flex justify-center items-center">
                  <Image
                    src={"/tours/images/price.png"}
                    alt="price"
                    fill
                    className="object-cover scale-105"
                  />
                  <p className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 text-white text-[1.25rem] font-bold">
                    From 169$
                  </p>
                  <Image
                    src={"/tours/svg/text-circle.svg"}
                    alt="text"
                    fill
                    className="spinner filter invert mt-[0.725rem] scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="map-container relative md:block hidden">
            <Image
              src={"/tours/svg/map.svg"}
              alt="map"
              width={436}
              height={436}
            />
          </div>
        </div>
      </div>
      <BreadcrumbAbout />
      <TourDetail />
      <FormBooking />
    </>
  );
};

export default TourDetailPage;
