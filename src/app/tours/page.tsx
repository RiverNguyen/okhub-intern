import Image from "next/image";
import BreadcrumbAbout from "./_components/breadcrumb";
import Trip from "./_components/trip";
import TypeOfTour from "./_components/type-of-tour";
import Tours from "./_components/tours";

const TourPage = () => {
  return (
    <>
      <div className="bg-[url(/tours/images/banner.png)] bg-no-repeat bg-center md:bg-cover h-[54rem] md:h-[43.75rem] relative">
        <div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(18, 39, 24, 0.00) 50%, #122718 100%)",
          }}
        />
        <div className="relative z-10 flex md:flex-row flex-col justify-between items-center px-[5rem] pt-[8.7rem]">
          <div className="">
            <div className="about-title">
              <Image
                src={"/tours/images/title.png"}
                alt="title-about"
                width={840}
                height={355}
                className="w-[16.35rem] h-[6.5rem] md:w-[48rem] md:h-[15.875rem]"
              />
            </div>
          </div>
          <div className="map-container relative  md:block hidden">
            <Image
              src={"/tours/svg/map.svg"}
              alt="map"
              width={436}
              height={436}
            />
          </div>
        </div>
      </div>
      <BreadcrumbAbout />
      <Trip />
      <div className="bg-[#F0F0F0]  w-full py-[4rem] px-[5rem] flex gap-x-[2.675rem]">
        <TypeOfTour />
        <Tours />
      </div>
    </>
  );
};

export default TourPage;
