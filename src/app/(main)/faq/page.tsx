import BreadcrumbContainer from "@/components/breadcrumb";
import { londrinaSolid } from "@/configs/font-family";
import Image from "next/image";
import Card from "./_components/card";
import AccordionContainer from "@/components/accordion";
import FormQuestion from "./_components/form-question";
import Team from "@/components/team";
import Trip from "../tours/_components/trip";

const FaqPage = () => {
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
        <div className="relative z-10 flex md:flex-row flex-col justify-center items-center px-[1rem] md:px-[5rem] pt-[9rem] md:pt-[12rem]">
          <div className="">
            <div className="about-title">
              <Image
                src={"/faq/images/title.png"}
                alt="title-about"
                width={1000}
                height={1000}
                className="w-[14.35rem] h-[5.5rem] md:w-[42rem] md:h-[15.875rem]"
              />
            </div>
          </div>
        </div>
      </div>

      <BreadcrumbContainer first="FAQs" />
      <div className="relative h-full w-full">
        <Image
          src={"/mountain-1.svg"}
          alt="mountain"
          fill
          className="object-contain opacity-30 z-10"
        />
        <div className="px-[1rem] md:px-[5rem] z-20 relative">
          <div className="mt-[2rem] md:mt-[2.9375rem] ">
            <h2 className="text-[0.875rem] md:text-[1.125rem] font-extrabold text-[#262626]/40">
              FAQs
            </h2>
            <h1
              className={`${londrinaSolid.className} text-[2rem] md:text-[3.5rem] font-[900] text-[#262626]`}
            >
              QUESTIONS ? LOOK HERE
            </h1>
            <p className="mt-[1.125rem] md:mt-[2rem] text-[#6A6A6A] font-bold md:w-[38.8125rem]">
              Experience the raw beauty of Hà Giang with our immersive travel
              adventures. From rugged mountain landscapes to vibrant ethnic
              cultures, Hà Giang offers a truly unique and authentic experience.
            </p>
          </div>
          <div className="flex hidden-x-scroll flex-row overflow-x-auto gap-x-[1.125rem]">
            {[
              "What is included or excluded?",
              "What is the best time to visit?",
              "What is the weather like in Ha Giang?",
              "What is the best way to get to",
            ].map((item, index) => (
              <Card key={index} title={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="px-[1rem] md:px-[5rem] mt-[4.5rem]">
        <h2 className="text-[#262626] font-bold text-[1.5rem] md:text-[2.5rem] mb:[1.5rem] md:mb-[2.8125rem]">
          Frequently asked Questions
        </h2>
        <div className="flex justify-between gap-y-[3.625rem] md:flex-row flex-col">
          <AccordionContainer />
          <FormQuestion />
        </div>
      </div>

      <div className="px-[1rem] md:px-[5rem] mt-[5rem]">
        <Team aboutPage />
      </div>
      <Trip />
    </>
  );
};

export default FaqPage;
