import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Image from "next/image";

const TourAlert = ({ className }: { className?: string }) => {
  return (
    <div className={`${className}`}>
      <Dialog>
        <DialogTrigger className="uppercase text-[0.875rem] font-bold text-[#E64827]">
          Xem thêm
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <div className="flex justify-between items-center">
                <p className="text-[1.25rem] font-extrabold">
                  Night 1 : Hanoi – Ha Giang City
                </p>
                <button className="rounded-[1.5rem] bg-[#B7B7B7]/30 text-[#B7B7B7] px-[1.5rem] py-[0.25rem]">
                  300km
                </button>
              </div>
            </DialogTitle>
            <DialogDescription>
              The bus pick up from your hotel/hostel in Hanoi between 7:30pm and
              8:00pm, you will arrive to Ha Giang City around 4:00am. Then, you
              are able to check-in at Hong Hao hostel and sleep few hours before
              starting the tour.
            </DialogDescription>
            <Image
              src={"/tours/images/tour-content.png"}
              alt="tour"
              width={500}
              height={500}
              className="w-full rounded-[1.5rem]"
            />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TourAlert;
