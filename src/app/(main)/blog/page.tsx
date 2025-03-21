import BreadcrumbContainer from "@/components/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { londrinaSolid } from "@/configs/font-family";
import Image from "next/image";
import BlogButton from "./_components/button";
import Link from "next/link";

const BlogPage = () => {
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
        <div className="relative z-10 flex md:flex-row flex-col justify-center items-center px-[1rem] md:px-[5rem] pt-[9rem] md:pt-[15rem]">
          <div className="">
            <div className="about-title">
              <Image
                src={"/blog/images/title.png"}
                alt="title-about"
                width={1000}
                height={1000}
                className="w-[16.35rem] h-[5.5rem] md:w-[30rem] md:h-[12.875rem]"
              />
            </div>
          </div>
        </div>
      </div>
      <BreadcrumbContainer first="Blog" />
      <div className="mt-[3.875rem] flex flex-col items-center justify-center">
        <div className="uppercase py-[0.8125rem] px-[2.125rem] bg-[#FCF8F7] rounded-full text-[#030922] text-[0.78906rem]">
          Out Blog
        </div>
      </div>
      <div className="flex gap-x-[1.75rem] items-center justify-center relative mb-[2.8125rem]">
        <Separator className="absolute top-8" />
        <Separator className="data-[orientation=horizontal]:w-[14.25813rem]" />
        <Image src={"/blog/svg/left.svg"} alt="left" width={28} height={28} />
        <h1
          className={`${londrinaSolid.className} text-[#313131] opacity-80 text-[3.5rem]`}
        >
          STORIES ABOUT JOURNEYS OF JOY
        </h1>
        <Image src={"/blog/svg/right.svg"} alt="right" width={28} height={28} />
        <Separator className="data-[orientation=horizontal]:w-[14.25813rem]" />
      </div>
      <Separator />
      <BlogButton />
      <div className="px-[5rem] mt-[3.95rem]">
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
      <div className="mt-[2.625rem] grid grid-cols-2 gap-y-[2.125rem] gap-x-[1.4375rem] px-[5rem]">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="w-[44.25rem] h-[25.8125rem] relative overflow-hidden group rounded-[1rem]"
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
            <button className="px-[1.5rem] py-[0.625rem] bg-[#FAF1EE] rounded-full w-fit absolute top-[1.5rem] left-[1.5rem]">
              Article
            </button>
            <div className="absolute left-[1.5rem] bottom-[1.5rem]">
              <Link
                href={"/"}
                className="text-[#F1F1F1] text-[1.25rem] font-bold"
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

export default BlogPage;
