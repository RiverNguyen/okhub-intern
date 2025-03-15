import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import MyForm from "./form";
import TourBooking from "./tour-booking";
import { ScrollArea } from "@/components/ui/scroll-area";

const FormPopup = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="size-[3.125rem] bg-[#E64827] text-white text-xs font-extrabold uppercase rounded-full animate-bounce shadow-lg hover:scale-105 transition-transform">
          Book Now
        </button>
      </DialogTrigger>
      <ScrollArea>
        <DialogContent className="grid grid-cols-1 md:grid-cols-2 h-[40rem] md:h-[42.45rem] md:min-w-[70.25rem] p-[1.5rem] overflow-y-auto">
          <div>
            <DialogHeader>
              <DialogTitle className="text-[0.875rem] text-[#2E2E2E] font-bold">
                Customer information:
              </DialogTitle>
            </DialogHeader>
            <MyForm />
          </div>
          <DialogHeader>
            <DialogTitle className="text-[0.875rem] text-[#262626]/40 font-bold">
              Confirmed tour booking
            </DialogTitle>
            <TourBooking />
          </DialogHeader>
        </DialogContent>
      </ScrollArea>
    </Dialog>
  );
};

export default FormPopup;
