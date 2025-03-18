import CardTour from "@/components/card-tour";
import { PaginationWithLinks } from "@/components/ui/pagination-with-links";
import { fetchTours } from "@/lib/api";

interface TourProps {
  searchParams: { [key: string]: string | undefined };
}

const Tours = async ({searchParams}: TourProps) => {
  const page = parseInt(searchParams.page || "1", 10);
  const perPage = parseInt(searchParams.perPage || "6", 10);

  const { tours, totalTours } = await fetchTours(page, perPage);
  

  return (
    <div className="flex flex-col gap-y-[2rem]">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.25rem]">
      {tours.map((tour) => (
        <CardTour full key={tour.id} data={tour} />
      ))}
    </div>
      <PaginationWithLinks page={page} pageSize={perPage} totalCount={totalTours} />
    </div>
  );
};

export default Tours;
