"use client";

import { cn } from "@/lib/utils";
import { PlusIcon, XIcon } from "lucide-react";
import { useState } from "react";

const Card = ({ title }: { title: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="mt-[3rem]">
      <div
        className="p-[2rem] size-[21.75rem] rounded-[1.5rem] bg-[#F8EAE4] relative overflow-hidden"
        onMouseEnter={handleOpen}
      >
        <div
          className={cn(
            `transition-opacity duration-1000`,
            isOpen ? "opacity-0" : "opacity-100"
          )}
        >
          <button
            className={cn(
              `p-[0.75rem] bg-[#E64827] rounded-[0.5rem] absolute right-[2rem] top-[2rem] transition-transform duration-500 hover:cursor-pointer`,
              isOpen ? "translate-x-full" : "translate-x-0"
            )}
            onClick={handleOpen}
          >
            <PlusIcon className="size-6 text-white" />
          </button>
          <p
            className={cn(
              `text-[#262626] text-[2.75rem] font-bold absolute left-[2rem] bottom-[2rem] right-[2rem] transition-transform duration-700`,
              isOpen ? "translate-y-full" : "translate-y-0"
            )}
          >
            {title}
          </p>
        </div>
        <div
          className={cn(
            `absolute p-[2rem] inset-0  transform transition-all duration-500 bg-[#F9F8F7] rounded-[1.5rem]`,
            isOpen ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="flex justify-between items-center text-black font-tripsans font-bold leading-1.2 text-1.125 mb-6">
            <p>What is included ?</p>
            <XIcon
              className="text-[#6A6A6A] size-3 hover:cursor-pointer"
              onClick={handleClose}
            />
          </div>
          <p className="text-[0.875rem] text-[#6A6A6A]  tracking-[0.02rem]">
            Included: Experienced tour guide Bike rentals (semi-automatic or
            manual) Fuel for the bikes Accommodation (private rooms available)
            Meals (breakfast, lunch, and dinner) Entrance fees to attractions
            Protective gear (helmet, knee, and elbow pads)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
