"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const shuffleArray = (array: number[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const MarqueeVertical = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [shuffledImages, setShuffledImages] = useState<number[]>([]);

  useEffect(() => {
    setIsMounted(true);
    const shuffled = shuffleArray(Array.from({ length: 12 }, (_, i) => i + 1));
    setShuffledImages(shuffled);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="absolute z-30 right-0 top-0 h-full w-[13rem] marquee md:block hidden">
      <Swiper
        direction="vertical"
        slidesPerView={6.5}
        spaceBetween={12}
        loop={true}
        speed={2000}
        centeredSlides={true}
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        mousewheel={{ forceToAxis: true }}
        modules={[Mousewheel, Pagination, Autoplay]}
        className="h-full w-[10.875rem]"
      >
        {shuffledImages.map((num, index) => (
          <SwiperSlide
            key={index}
            className="group relative border-none w-[10.875rem] h-[6.35rem]"
          >
            <Image
              src={`/images/marquee/marquee-${num}.jpg`}
              alt={`image-${num}`}
              fill
              quality={60}
              className="object-cover rounded-[1rem]"
            />
            <div className="absolute inset-0 bg-black/40 rounded-[1rem] transition-opacity duration-300 group-[.swiper-slide-active]:opacity-0" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Image
        src={"/arrow-marquee.svg"}
        alt="arrow"
        width={54}
        height={54}
        className="absolute top-1/2 z-30 -left-[2.5rem] shake"
      />
    </div>
  );
};

export default MarqueeVertical;
