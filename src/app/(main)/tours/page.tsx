import BreadcrumbContainer from "@/components/breadcrumb";
import Banner from "./_components/banner";
import Tours from "./_components/tours";
import Trip from "./_components/trip";
import TypeOfTour from "./_components/type-of-tour";

interface SearchPageProps {
  searchParams: Promise<{ term?: string }>;
}

const TourPage = async ({ searchParams }: SearchPageProps) => {
  return (
    <>
      <Banner />
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
