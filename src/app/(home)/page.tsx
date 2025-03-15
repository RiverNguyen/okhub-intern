import FixedButton from "@/components/fixed-button";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Banner } from "./_components/banner";
import Client from "./_components/client";
import { FormHome } from "./_components/form-home";
import Gallery from "./_components/gallery";
import { Trip } from "./_components/trip";
import Weather from "./_components/weather";
import HomeImage from "./_components/home-image";
import HomeText from "./_components/home-text";
import HomeCarousel from "./_components/home-carousel";

const HomePage = () => {
  return (
    <>
      <FixedButton />
      <Header />
      <div className=" h-[49.25rem] bg-[url(/images/sheet-bg.png)] bg-cover bg-no-repeat relative z-10 overflow-hidden">
        <div className="bg-[#0F492B]/90 absolute top-0 right-0 bottom-0 left-0 z-20" />
        <div className="px-[5rem] py-[1.5rem]">
          <span className="text-white rotate-90 absolute left-0 top-1/2 -translate-y-1/2 text-center z-30 text-[0.75rem] font-extrabold">
            Hong Hoa Travel
          </span>
          <div className="relative z-30 md:block hidden">
            <div className="flex items-center justify-center flex-col">
              <div className="w-[30.3125rem] h-[32.5625rem] relative z-30 ">
                <HomeImage />
              </div>
              <HomeText />
            </div>
          </div>
        </div>
        <div className="hidden justify-center items-center relative z-40 md:flex">
          <FormHome />
        </div>
        <div className="relative z-30">
          <HomeCarousel />
        </div>
      </div>
      <Banner />
      <div className="px-[1rem] md:px-[5rem]">
        <Trip />
      </div>
      <Gallery />
      <Client />
      {/* <Weather />
      <Footer /> */}
    </>
  );
};

export default HomePage;
