import BreadcrumbContainer from "@/components/breadcrumb";
import Image from "next/image";
import React from "react";

const ContactUsPage = () => {
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
                src={"/contact/images/title.png"}
                alt="title-about"
                width={1000}
                height={1000}
                className="w-[14.35rem] h-[5.5rem] md:w-[46rem] md:h-[15.875rem]"
              />
            </div>
          </div>
        </div>
      </div>
      <BreadcrumbContainer first="Contact Us" />
      <div className="mt-[4.375rem] px-[5rem] flex justify-between">
        <div className="">
          <h2>Hong Hao Travel</h2>
          <h1>Contact Us</h1>
          <p>
            Experience the raw beauty of Hà Giang with our immersive travel
            adventures. From rugged mountain landscapes to vibrant ethnic
            cultures, Hà Giang offers a truly unique and authentic experience.
          </p>
          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
