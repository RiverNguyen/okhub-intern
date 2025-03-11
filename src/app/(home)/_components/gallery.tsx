import Image from "next/image";
import React from "react";
import { londrinaSolid } from "@/configs/font-family";
import Marquee from "react-fast-marquee";

const Gallery = () => {
  const images = Array.from(
    { length: 5 },
    (_, index) => `/images/gallery-${index + 1}.png`
  );

  const imagesReverse = images.slice().reverse();

  return (
    <div className="relative mt-[3.81rem]">
      <Image
        src={"/gallery.svg"}
        className="absolute left-[4rem] z-50"
        alt="gallery"
        width={76}
        height={513}
      />
      <div className="absolute top-[10rem] left-0 h-[22.125rem] w-[17.5rem] flex z-40">
        <div className="w-full bg-white"></div>
        <div className="h-full w-[6.5rem] bg-[linear-gradient(270deg,rgba(255,255,255,0.00)_36.51%,#FFF_92.5%)]"></div>
      </div>
      <div className="pl-[13.12rem] flex gap-x-[3.94rem] items-center justify-between mb-[4.38rem]">
        <h2 className={`${londrinaSolid.className} text-[3.5rem] font-[900]`}>
          THE GLADDEST MOMENT
        </h2>
        <div className="">
          <svg
            width="100"
            height="100"
            viewBox="0 0 200 200"
            className="w-[6.5625rem] h-[6.5625rem]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
            </defs>

            <image href="/map.svg" x="59.5" y="59.5" width="81" height="81" />

            <text
              fill="black"
              className="text-[0.875rem] text-center font-bold tracking-[7.4]"
            >
              <textPath
                href="#circlePath"
                startOffset="0%"
                className="animate-none hover:animate-spin-text"
              >
                Hong hao travel Hong hao travel
              </textPath>
            </text>
          </svg>
        </div>
        <div className="bg-gradient-to-r from-green-500/3 via-green-500/20 to-green-500/25 pr-[5rem] py-[1.44rem] pl-[2rem]">
          <p className="text-[0.875rem] text-right text-[#262626]">
            Don&apos;t hesitate to pick up your backpack and go. When you reach
            your destination and <br /> see all the beautiful things in sight,
            you will know that your efforts were worth it
          </p>
        </div>
      </div>
      <div className="relative w-full overflow-hidden">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={true}
          className="ml-[13.12rem]"
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="relative w-[35.5rem] h-[21.125rem] mx-[0.375rem] group"
            >
              <Image
                src={src}
                alt={`gallery-${index + 1}`}
                layout="fill"
                className="object-center object-cover rounded-[1rem] hover:cursor-pointer group"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[6.5625rem] hidden group-hover:block">
                <Image
                  src={"/text-circle.svg"}
                  alt="text"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  brightness-100 invert animate-spin"
                  width={100}
                  height={100}
                />

                <Image
                  src={"/map-2.svg"}
                  alt="map 2"
                  height={39}
                  width={39}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          ))}
        </Marquee>

        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={true}
          className="mt-[0.75rem]"
        >
          {imagesReverse.map((src, index) => (
            <div
              key={index}
              className="relative w-[35.5rem] h-[21.125rem] mx-[0.375rem] group"
            >
              <Image
                src={src}
                alt={`gallery-${index + 1}`}
                layout="fill"
                className="object-center object-cover rounded-[1rem] hover:cursor-pointer group"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[6.5625rem] hidden group-hover:block">
                <Image
                  src={"/text-circle.svg"}
                  alt="text"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                brightness-100 invert animate-spin"
                  width={100}
                  height={100}
                />

                <Image
                  src={"/map-2.svg"}
                  alt="map 2"
                  height={39}
                  width={39}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Gallery;
