import BreadcrumbContainer from "@/components/breadcrumb";
import Image from "next/image";
import Tours from "./_components/tours";
import Trip from "./_components/trip";
import TypeOfTour from "./_components/type-of-tour";

interface TourPageProps {
  searchParams: { [key: string]: string | undefined };
}

const TourPage = async ({ searchParams }: TourPageProps) => {
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
        <div className="relative z-10 flex md:flex-row flex-col justify-between items-center px-[1rem] md:px-[5rem] pt-[8.7rem]">
          <div className="">
            <div className="about-title">
              <Image
                src={"/tours/images/title.png"}
                alt="title-about"
                width={840}
                height={355}
                className="w-[16.35rem] h-[5.5rem] md:w-[48rem] md:h-[15.875rem]"
              />
            </div>
          </div>
          <div className="map-container relative md:block hidden">
            <Image
              src={"/tours/svg/map.svg"}
              alt="map"
              width={436}
              height={436}
            />
          </div>
        </div>
      </div>

      <BreadcrumbContainer first="Our Tour" />
      <Trip />
      <div className="bg-[#F0F0F0] w-full px-[1rem] py-[2rem] md:py-[4rem] md:px-[5rem] md:flex gap-x-[2.675rem]">
        <TypeOfTour />
        <Tours searchParams={await searchParams} />
      </div>
    </>
  );
};

export default TourPage;
