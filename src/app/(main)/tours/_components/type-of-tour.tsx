"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const TypeOfTour = () => {
  const labels = ["All Tour", "Premium", "Best Budget", "Standard"];
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleCheckChange = (index: number, checked: boolean) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: checked,
    }));
  };

  return (
    <div className="py-[1.9375rem] px-[1.875rem] flex-col gap-y-[1.25rem] bg-white h-fit w-[17rem] rounded-[1.5rem] hidden md:flex">
      <p className="uppercase font-bold text-[1rem]">Type of tour</p>
      <Separator />
      <div className="flex flex-col gap-y-[0.75rem]">
        {labels.map((label, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Checkbox
              className="data-[state=checked]:bg-[#E64828] data-[state=checked]:focus-visible:ring-0 data-[state=checked]:focus-visible:outline-0"
              id={`checkbox-${index}`}
              checked={checkedItems[index] || false}
              onCheckedChange={(value) =>
                handleCheckChange(index, Boolean(value))
              }
            />
            <Label
              htmlFor={`checkbox-${index}`}
              className={`text-[0.875rem] uppercase font-medium ${
                checkedItems[index] ? "text-black" : "text-[#C5C5C5]"
              }`}
            >
              {label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypeOfTour;
