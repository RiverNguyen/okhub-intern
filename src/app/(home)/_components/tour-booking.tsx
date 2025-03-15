import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";

const TourBooking = () => {
  const tourInfo = [
    "Type of tour",
    "Name",
    "Contact Info",
    "Pick up",
    "Tour duration",
    "Drop off",
    "Self-driving",
    "Easy driver",
    "Message",
  ];

  return (
    <div className="flex flex-col gap-[0.75rem] text-left">
      <div className="grid grid-cols-3 rounded-[0.5rem] bg-[#F8F8F8]">
        <div className="col-span-1">
          {tourInfo.map((info, index) => (
            <div
              key={index}
              className={cn(
                `flex justify-between items-center border-b h-[2.5rem] px-[0.8rem] md:py-[0.5rem] md:px-[1rem] border-[#E5E5E5]`,
                info === "Message" && "border-b-0",
                info === "Pick up" && "h-[3.5rem]"
              )}
            >
              <p className="text-[0.75rem] md:text-[0.875rem] text-[#2E2E2E] font-bold">
                {info}
              </p>
            </div>
          ))}
        </div>
        <div className="col-span-2 *:text-[0.75rem] border-l border-[#E5E5E5]">
          <div className="flex justify-between items-center border-b h-[2.5rem] pl-[0.8rem] md:py-[0.5rem] md:px-[1rem] border-[#E5E5E5]">
            <p>Ha Giang Loop tour: Itinerary in 3 Days 4 Nights</p>
          </div>
          <div className="flex justify-between items-center border-b h-[2.5rem] pl-[0.8rem] md:py-[0.5rem] md:px-[1rem] border-[#E5E5E5]">
            <p>
              Tuan Minh -{" "}
              <span className="text-[#2E2E2E] text-[0.875rem] font-semibold">
                3 pax
              </span>
            </p>
          </div>
          <div className="flex justify-between items-center border-b h-[2.5rem] pl-[0.8rem] md:py-[0.5rem] md:px-[1rem] border-[#E5E5E5]">
            <p>tuanminh2024@gmail.com - 0941556338</p>
          </div>
          <div className="flex justify-between items-center border-b h-[3.5rem] pl-[0.8rem] md:py-[0.5rem] md:px-[1rem] border-[#E5E5E5]">
            <p className="text-[0.5rem]">
              <span className="text-[#2E2E2E] text-[0.6rem] md:text-[0.875rem] font-semibold">
                15/9/2023
              </span>{" "}
              from Hanoi at{" "}
              <span className="text-[#2E2E2E] text-[0.6rem] md:text-[0.875rem] font-semibold">
                20:00
              </span>{" "}
              Hong Hao Hostel No. 10 Pham Hong Thai, Minh Khai Ward, Ha Noi
            </p>
          </div>
          <div className="flex justify-between items-center border-b h-[2.5rem] pl-[0.8rem] md:py-[0.5rem] md:px-[1rem] border-[#E5E5E5]">
            <p>3 Days 4 Nights</p>
          </div>
          <div className="flex justify-between items-center border-b h-[2.5rem] pl-[0.8rem] md:py-[0.5rem] md:px-[1rem] border-[#E5E5E5]">
            <p>
              <span className="text-[#2E2E2E] text-[0.875rem] font-semibold">
                18/9/2023
              </span>{" "}
              - My Dinh Station, Ha Noi
            </p>
          </div>
          <div className="flex justify-between items-center border-b h-[2.5rem] pl-[0.8rem] md:py-[0.5rem] md:px-[1rem] border-[#E5E5E5]">
            <p>
              <span className="text-[#2E2E2E] text-[0.875rem] font-semibold">
                01
              </span>{" "}
              x{" "}
              <span className="text-[#2E2E2E] text-[0.875rem] font-semibold">
                $169
              </span>{" "}
            </p>
          </div>
          <div className="flex justify-between items-center border-b h-[2.5rem] pl-[0.8rem] md:py-[0.5rem] md:px-[1rem] border-[#E5E5E5]">
            <p>
              <span className="text-[#2E2E2E] text-[0.875rem] font-semibold">
                02
              </span>{" "}
              x{" "}
              <span className="text-[#2E2E2E] text-[0.875rem] font-semibold">
                $199
              </span>{" "}
            </p>
          </div>
          <div className="flex justify-between items-center h-[2.5rem] py-[0.5rem] px-[1rem]">
            <p>Can I arrive 30 minutes early before departure?...</p>
          </div>
        </div>
      </div>
      <div className="rounded-[0.5rem] bg-[#23704D] py-[0.75rem] px-[1rem] flex flex-col gap-[0.5rem] text-white text-[0.875rem] font-bold">
        <div className="flex justify-between items-center">
          <p>Provisional:</p>
          <p>$567</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Service Charge 3%:</p>
          <p>$17,01</p>
        </div>
        <Separator className="opacity-20" />
        <div className="flex justify-between items-center text-[1.25rem]">
          <p>Total amount:</p>
          <p>$584,01</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row uppercase justify-between gap-[0.5rem]">
        <button
          form="bookForm"
          type="submit"
          className="w-full flex py-[1rem] px-[2rem] bg-[#E64827] text-white text-[0.875rem] font-bold rounded-[0.5rem] items-center justify-center gap-[0.5rem] group"
        >
          BOOK NOW, Pay later{" "}
          <MoveRight className="group-hover:translate-x-1 transform duration-300" />
        </button>
        <button className="w-full flex py-[1rem] px-[2rem] border border-[#E64827] text-[#E64827] text-[0.875rem] font-bold rounded-[0.5rem] items-center justify-center gap-[0.5rem]">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default TourBooking;
