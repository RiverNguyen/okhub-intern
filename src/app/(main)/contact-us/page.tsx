import BreadcrumbContainer from "@/components/breadcrumb";
import { londrinaSolid } from "@/configs/font-family";
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
      <div className="mt-[4.375rem] px-[5rem] flex justify-between items-center gap-x-[6.3125rem]">
        <div className="">
          <h2 className="text-[1.125rem] font-bold text-[#262626]/40 uppercase">
            Hong Hao Travel
          </h2>
          <h1
            className={`${londrinaSolid.className} font-[900] text-[3.5rem] text-[#262626] uppercase`}
          >
            Contact Us
          </h1>
          <p className="w-[38.8125rem] mt-[3.5rem] text-[1rem] font-semibold text-[#6A6A6A]">
            Experience the raw beauty of Hà Giang with our immersive travel
            adventures. From rugged mountain landscapes to vibrant ethnic
            cultures, Hà Giang offers a truly unique and authentic experience.
          </p>
          <div className="space-y-[1rem] mt-[1.5rem] text-[#6A6A6A] text-[1rem]">
            <p className="flex gap-x-[0.5rem] items-center">
              <Image src={"/phone.svg"} alt="phone" width={16} height={16} />
              +84 941556338
            </p>
            <p className="flex gap-x-[0.5rem] items-center">
              <Image src={"/mail.svg"} alt="phone" width={16} height={16} />
              honghaotravel@gmail.com
            </p>
            <p className="flex gap-x-[0.5rem] items-center">
              <Image
                src={"/room-color.svg"}
                alt="phone"
                width={16}
                height={16}
                className="size-[1rem] -ml-0.5"
              />
              No. 10 Pham Hong Thai, Minh Khai Ward, City. Ha Giang.
            </p>
            <p className="flex gap-x-[0.5rem] items-center">
              <Image src={"/word.svg"} alt="phone" width={16} height={16} />
              honghaotravel.com.vn
            </p>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38004.67417443209!2d104.96822525614046!3d22.807217669508525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36cc79b180b4239d%3A0xb7a373a73bc23544!2zVHAuIEjDoCBHaWFuZywgSMOgIEdpYW5nLCBWaeG7h3QgTmFt!5e1!3m2!1svi!2s!4v1742454890935!5m2!1svi!2s"
          width="600"
          height="600"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-none w-full rounded-[2rem]"
        ></iframe>
      </div>
    </>
  );
};

export default ContactUsPage;
