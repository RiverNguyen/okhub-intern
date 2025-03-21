import { londrinaSolid } from "@/configs/font-family";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <>
      <div className="px-[5rem] mt-[3.95rem] md:block hidden">
        <div className="w-full h-[43.6875rem] relative overflow-hidden group rounded-md">
          <div className="w-full h-full relative transition-all duration-700 group-hover:scale-105">
            <Image
              src={"/blog/images/big-blog.png"}
              alt="blog"
              fill
              className="rounded-md object-cover"
            />
          </div>

          <div className="w-[30rem] h-[22rem] bg-[#0C271B] absolute bottom-0 left-0 flex gap-y-[1.1925rem] p-[3.75rem]">
            <div className="flex flex-col justify-center">
              <button className="px-[1.1875rem] py-[0.625rem] bg-[#FAF1EE] rounded-full w-fit hover:scale-105 transition-all duration-700">
                Article
              </button>
              <Link
                className={`${londrinaSolid.className} scroll-green text-[#FCF8F7] text-[2.5rem] font-[900] w-[22rem] overflow-y-scroll`}
                href={"/"}
              >
                Seychelles Hotel Guide; Advice from the Experts
              </Link>
              <p className="text-[#787878] uppercase text-[1rem] font-light">
                5 min READ
              </p>
            </div>
            <button className="px-[1.1875rem] py-[0.625rem] rounded-tr-[0.75rem] rounded-tl-[0.75rem] bg-[#FAF1EE] w-fit absolute rotate-90 top-[1.3rem] -right-[4.1rem] hover:scale-105 transition-all duration-700">
              Article
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[2.625rem] grid md:grid-cols-2 gap-y-[2.125rem] gap-x-[1.4375rem] px-[1rem] md:px-[5rem]">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="w-full h-[18.3125rem] md:w-[44.25rem] md:h-[25.8125rem] relative overflow-hidden group rounded-[1rem]"
          >
            <div className="w-full h-full relative group-hover:scale-105 transition-all duration-700">
              <Image
                src={`/blog/images/blog-${index + 1}.jpg`}
                alt="blog"
                fill
                className="object-cover rounded-[1rem]"
              />
            </div>
            <div
              className="absolute inset-0 rounded-[1rem]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50%, #000 100%)",
              }}
            ></div>
            <button className="px-[1.1875rem] text-[0.75rem] md:text-base md:px-[1.5rem] py-[0.625rem] bg-[#FAF1EE] rounded-full w-fit absolute top-[1.5rem] left-[1.5rem]">
              Article
            </button>
            <div className="absolute left-[1.5rem] bottom-[1.5rem]">
              <Link
                href={"/"}
                className="text-[#F1F1F1] text-[1rem] md:text-[1.25rem] font-bold"
              >
                Seychelles Hotel Guide; Advice from the Experts
              </Link>
              <p className="text-[0.75rem] text-[#F1F1F1]">
                Ngày 24, tháng 5, 2024
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
