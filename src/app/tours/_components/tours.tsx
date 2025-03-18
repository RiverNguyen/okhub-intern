import CardTour from "@/components/card-tour";

const Tours = () => {
  return (
    <div className="grid grid-cols-3 gap-[1.25rem]">
      {Array.from({ length: 9 }).map((_, index) => (
        <CardTour key={index} />
      ))}
    </div>
  );
};

export default Tours;
