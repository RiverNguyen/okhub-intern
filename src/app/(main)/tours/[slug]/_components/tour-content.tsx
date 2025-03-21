"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import TourAlert from "./tour-alert";

const TourContent = () => {
  return (
    <div className="tour-content">
      <Swiper
        direction="vertical"
        slidesPerView={1.5}
        spaceBetween={24}
        mousewheel={{ forceToAxis: true }}
        modules={[Mousewheel, Pagination]}
        className="h-full w-full"
      >
        <SwiperSlide className="slide-item p-[1.875rem] relative flex flex-col gap-[1.125rem] bg-[#F5F5F5] rounded-[1.5rem] overflow-y-hidden">
          <div className="absolute bottom-0 left-0 w-full h-[4rem] bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          <div className="flex justify-between items-center">
            <p className="text-[1.25rem] font-extrabold">
              Night 1 : Hanoi – Ha Giang City
            </p>
            <button className="rounded-[1.5rem] bg-[#B7B7B7]/30 text-[#B7B7B7] px-[1.5rem] py-[0.25rem]">
              300km
            </button>
          </div>
          <p className="my-[1.125rem] text-[1rem] text-[#454545]">
            <span className="text-black font-bold">7:30pm to 8:00pm:</span> The
            bus picks up from your hotel/hostel in Hanoi the sleeping bus will
            leave Hanoi. You will arrive to{" "}
            <span className="text-black font-bold">Ha Giang around 4:00am</span>
            , check in stay at Hong Hao hostel for few hours before start.
          </p>
          <Image
            src={"/tours/images/tour-content.png"}
            alt="tour"
            width={500}
            height={500}
            className="w-full rounded-[1.5rem]"
          />
          <TourAlert className="absolute right-[1rem] bottom-[1rem]" />
        </SwiperSlide>
        <SwiperSlide className="slide-item p-[1.875rem] relative flex flex-col gap-[1.125rem] bg-[#F5F5F5] rounded-[1.5rem] mb-[1.5rem] overflow-y-hidden">
          <div className="flex justify-between items-center">
            <p className="text-[1.25rem] font-extrabold">
              DAY 1 : Ha Giang City – Quan Ba – Yen Minh – Dong Van town
            </p>
            <button className="rounded-[1.5rem] bg-[#B7B7B7]/30 text-[#B7B7B7] px-[1.5rem] py-[0.25rem]">
              150km
            </button>
          </div>
          <div className="text-[#454545] text-[0.875rem] font-normal leading-[1.2] tracking-[0.00875rem] mt-[1.12rem] xlg:leading-normal xlg:tracking-[0.00219rem xlg:text-[1.5rem] xmd:text-[0.875rem] xmd:mt-[1.12rem] xlg:mt-[1.5rem]">
            <p>
              – 8:00 am : Have breakfast at Hong Hao hostel…
              <br />
              – 8:30 am : Meet up with the guide and start to go on the loop…
              <br />
              • Bac Sun pass…
              <br />
              • Quan Ba Heaven gate…
              <br />
              • Quan Ba Twin mountains…
              <br />
              • Can Ty pass…
              <br />
              – Have Lunch in Yen Minh town…
              <br />
              • Tham Ma pass…
              <br />
              • The Hmong King’s Palace…
              <br />
              – Check in Hotel in Dong Van town…
              <br />
              – 7h-7h30 pm: Have Dinner in Dong Van town, free walking around
              the Dong Van ancient
              <br />
              town…
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item p-[1.875rem] relative flex flex-col gap-[1.125rem] bg-[#F5F5F5] rounded-[1.5rem] mb-[1.5rem] overflow-y-hidden">
          <div className="flex justify-between items-center">
            <p className="text-[1.25rem] font-extrabold">
              DAY 2 : Dong Van Town – Ma pi Leng pass – Meo Vac – Du Gia village
            </p>
            <button className="rounded-[1.5rem] bg-[#B7B7B7]/30 text-[#B7B7B7] px-[1.5rem] py-[0.25rem]">
              300km
            </button>
          </div>
          <div className="text-[#454545] text-[0.875rem] font-normal leading-[1.2] tracking-[0.00875rem] mt-[1.12rem] xlg:leading-normal xlg:tracking-[0.00219rem xlg:text-[1.5rem] xmd:text-[0.875rem] xmd:mt-[1.12rem] xlg:mt-[1.5rem]">
            <p>
              – 8:00 am: have breakfast in town (have a chance to visit Dong Van
              <br />
              Sunday market if it falls on the weekend)
              <br />• Ma Pi Leng Pass (one of Four great mountain passes- Top 4
              highest passes in Vietnam)
            </p>
            <p>• Take a boat trip on Nho Que river.</p>
            <p>– Have Lunch in Meo Vac or Mau Due village.</p>
            <p>
              – After lunch get on the bike again a head to Du Gia village
              <br />
              • Sa Li Pass
              <br />
              • Lung Ho Viewpoint
              <br />
              • Du Gia waterfall
              <br />
              – Check in homestay of the Tay ethnic in Du Gia village
              <br />– 7h00 – 7h30 pm: Have Dinner in the homestay
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item p-[1.875rem] relative flex flex-col gap-[1.125rem] bg-[#F5F5F5] rounded-[1.5rem] mb-[1.5rem] overflow-y-hidden">
          <div className="flex justify-between items-center">
            <p className="text-[1.25rem] font-extrabold">
              DAY 3: Du Gia village – Lung Tam village - Ha Giang city
            </p>
            <button className="rounded-[1.5rem] bg-[#B7B7B7]/30 text-[#B7B7B7] px-[1.5rem] py-[0.25rem]">
              80km
            </button>
          </div>
          <div className="text-[#454545] text-[0.875rem] font-normal leading-[1.2] tracking-[0.00875rem] mt-[1.12rem] xlg:leading-normal xlg:tracking-[0.00219rem xlg:text-[1.5rem] xmd:text-[0.875rem] xmd:mt-[1.12rem] xlg:mt-[1.5rem]">
            <p>
              – 8:00 am: Have breakfast in the homestay with mountains views
              <br />
              • Swim at Du Gia Waterfall
              <br />
              • Đường Thượng viewpoint
              <br />
              – Have lunch in Tam Son town or Thai An
              <br />– 3:30 pm: Finish the tour at Hong Hao Hostel
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item p-[1.875rem] relative flex flex-col gap-[1.125rem] bg-[#F5F5F5] rounded-[1.5rem] mb-[1.5rem] overflow-y-hidden">
          <div className="flex justify-between items-center">
            <p className="text-[1.25rem] font-extrabold">
              Night 4: Take the bus to Hanoi from Hong Hao Hostel at 5:30 pm
            </p>
            <button className="rounded-[1.5rem] bg-[#B7B7B7]/30 text-[#B7B7B7] px-[1.5rem] py-[0.25rem]">
              300km
            </button>
          </div>
          <div className="text-[#454545] text-[0.875rem] font-normal leading-[1.2] tracking-[0.00875rem] mt-[1.12rem] xlg:leading-normal xlg:tracking-[0.00219rem xlg:text-[1.5rem] xmd:text-[0.875rem] xmd:mt-[1.12rem] xlg:mt-[1.5rem]">
            <p>
              The bus will pick you up at 5:30pm to go back to Hanoi and finish
              <br />
              the tour.
              <br />
              We also have different type of buses at 4:00 PM (Limousine bus),
              7:30 PM (Sleeper&nbsp;Bus), 9:00 PM (VIP Cabin Bus).
            </p>
            <p>
              If you want to change the bus, please tell tour guide or
              <br />
              receptionist at Hong Hao Hostel to get support.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TourContent;
