"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BlogButton = () => {
  const pathName = usePathname();

  const buttonLink = [
    {
      title: "All",
      link: "/blog",
    },
    {
      title: "News",
      link: "/blog/news",
    },
    {
      title: "Tips",
      link: "/blog/tips",
    },

    {
      title: "Destinations",
      link: "/blog/destinations",
    },
    {
      title: "Travel",
      link: "/blog/travel",
    },
  ];
  return (
    <div className="flex justify-center items-center gap-x-[0.9375rem] mt-[1rem]">
      {buttonLink.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className={cn(
            `px-[2.125rem] py-[0.8125rem] text-[0.78906rem] uppercase rounded-full`,
            pathName === item.link
              ? "bg-[#E64827] text-white"
              : "bg-[#FCF8F7] text-[#030922] hover:bg-[#E64827] hover:text-white transform transition-all duration-300"
          )}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default BlogButton;
