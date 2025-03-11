import Header from "@/components/header";
import Image from "next/image";
import { Banner } from "./_components/banner";
import { Trip } from "./_components/trip";
import { FormHome } from "./_components/form-home";
import Gallery from "./_components/gallery";
import Client from "./_components/client";

const HomePage = () => {
  return (
    <>
      <div className="px-[5rem] py-[1.5rem] h-[49.25rem] bg-[url(/images/sheet-bg.png)] bg-cover bg-no-repeat relative z-10">
        <Header />
        <div className="bg-[#0F492B]/90 absolute top-0 right-0 bottom-0 left-0 z-20" />
        <span className="text-white rotate-90 absolute left-0 top-1/2 -translate-y-1/2 text-center z-30 text-[0.75rem] font-extrabold">
          Hong Hoa Travel
        </span>

        <div className="relative z-30">
          <div className="flex items-center justify-center flex-col">
            <div className="w-[30.3125rem] h-[32.5625rem] relative z-30 ">
              <Image src={"/images/home-image.png"} alt="home" fill />
            </div>
            <div className="absolute top-[10rem] z-30 uppercase">
              <h3 className="text-white/60 font-semibold text-center text-[1.125rem]">
                Get Ready
              </h3>
              <h1 className="font-[900] text-[6rem] text-center leading-[6rem] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/10">
                Discover <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/10">
                  Ha Giang Loop
                </span>
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <FormHome />
          </div>
        </div>
      </div>
      <Banner />
      <div className="px-[5rem]">
        <Trip />
      </div>
      <Gallery />
      <Client />
    </>
  );
};

export default HomePage;
