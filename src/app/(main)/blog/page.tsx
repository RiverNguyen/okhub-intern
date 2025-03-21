import BreadcrumbContainer from "@/components/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { londrinaSolid } from "@/configs/font-family";
import Image from "next/image";
import Blog from "./_components/blog";
import BlogButton from "./_components/button";
import Plan from "./_components/plan";

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
                className="w-[14.35rem] h-[6.5rem] md:w-[30rem] md:h-[12.875rem]"
              />
            </div>
          </div>
        </div>
      </div>
      <BreadcrumbContainer first="Blog" />
      <div className="mt-[3.875rem] flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-x-[1rem] overflow-x-hidden whitespace-nowrap w-full">
          <Separator className="block md:hidden" />
          <Image
            src={"/blog/svg/left.svg"}
            alt="left"
            width={28}
            height={28}
            className="block md:hidden"
          />
          <div className="uppercase py-[0.8125rem] px-[2.125rem] bg-[#FCF8F7] rounded-full text-[#030922] text-[0.78906rem]">
            Out Blog
          </div>
          <Image
            src={"/blog/svg/right.svg"}
            alt="left"
            width={28}
            height={28}
            className="block md:hidden"
          />
          <Separator className="block md:hidden" />
        </div>
      </div>
      <div className="flex gap-x-[1.75rem] items-center justify-center relative mb-[2.8125rem]">
        <Separator className="absolute top-8 md:block hidden" />
        <Separator className="data-[orientation=horizontal]:w-[14.25813rem] hidden md:block" />
        <Image
          src={"/blog/svg/left.svg"}
          alt="left"
          width={28}
          height={28}
          className="hidden md:block"
        />
        <h1
          className={`${londrinaSolid.className} text-[#313131] opacity-80 text-[1.5rem] mt-[0.75rem] md:mt-0 md:text-[3.5rem]`}
        >
          STORIES ABOUT JOURNEYS OF JOY
        </h1>
        <Image
          src={"/blog/svg/right.svg"}
          alt="right"
          width={28}
          height={28}
          className="hidden md:block"
        />
        <Separator className="data-[orientation=horizontal]:w-[14.25813rem] hidden md:block" />
      </div>
      <Separator className="md:block hidden" />
      <div className="pl-[1rem] md:pl-0">
        <BlogButton />
      </div>
      <Blog />
      <Plan />
    </>
  );
};

export default BlogPage;
