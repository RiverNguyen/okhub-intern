"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  days: z.enum(["2 Days 3 Nights", "3 Days 4 Nights", "4 Days 5 Nights"]),
  type: z.enum(["Best Budget", "Premium", "Standard"]),
  selfDriving: z.number(),
  localDriving: z.number(),
});

export const FormHome = () => {
  const [selfDriving, setSelfDriving] = useState(0);
  const [localDriving, setLocalDriving] = useState(0);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      days: "2 Days 3 Nights",
      type: "Best Budget",
      selfDriving: 0,
      localDriving: 0,
    },
  });

  const onSubmit = (value: z.infer<typeof formSchema>) => {
    console.log(value);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-fit items-center justify-center px-[2rem] py-[0.75rem] bg-white rounded-[0.75rem] gap-x-[1.5rem]"
      >
        <FormField
          control={form.control}
          name="days"
          render={({ field }) => (
            <FormItem className="gap-[0.25rem]">
              <FormLabel className="font-normal text-[0.75rem] text-[#727272] uppercase">
                Days
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border-none shadow-none p-0">
                    <SelectValue placeholder="Days" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="2 Days 3 Nights">
                    2 Days 3 Nights
                  </SelectItem>
                  <SelectItem value="3 Days 4 Nights">
                    3 Days 4 Nights
                  </SelectItem>
                  <SelectItem value="4 Days 5 Nights">
                    4 Days 5 Nights
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator orientation="vertical" className="!h-[2.125rem]" />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="gap-[0.25rem]">
              <FormLabel className="font-normal text-[0.75rem] text-[#727272] uppercase">
                Type Of Tour
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border-none shadow-none p-0 w-[6rem]">
                    <SelectValue placeholder="Days" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Best Budget">Best Budget</SelectItem>
                  <SelectItem value="Premium">Premium</SelectItem>
                  <SelectItem value="Standard">Standard</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator orientation="vertical" className="!h-[2.125rem]" />

        <FormField
          control={form.control}
          name="selfDriving"
          render={({ field }) => (
            <FormItem className="gap-[0.25rem] relative">
              <FormLabel className="font-normal text-[0.75rem] text-[#727272] uppercase">
                Self Driving
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  className="border-none shadow-none p-0 w-[8rem] focus-visible:ring-0 focus:ring-0 disabled:text-black hover:cursor-default"
                  placeholder="Self Driving"
                  {...field}
                  readOnly
                  value={selfDriving}
                />
              </FormControl>
              <div className="flex flex-col absolute right-0 mt-[0.8rem]">
                <Button
                  className="hover:bg-transparent hover:cursor-pointer"
                  variant={"ghost"}
                  onClick={() => setSelfDriving((prev) => prev + 1)}
                  size={"icon"}
                >
                  <ChevronUpIcon />
                </Button>
                <Button
                  className="hover:bg-transparent hover:cursor-pointer -mt-[1.2rem]"
                  variant={"ghost"}
                  onClick={() => {
                    if (selfDriving > 0) {
                      setSelfDriving((prev) => prev - 1);
                    }
                  }}
                  size={"icon"}
                >
                  <ChevronDownIcon />
                </Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator orientation="vertical" className="!h-[2.125rem]" />

        <FormField
          control={form.control}
          name="localDriving"
          render={({ field }) => (
            <FormItem className="gap-[0.25rem] relative">
              <FormLabel className="font-normal text-[0.75rem] text-[#727272] uppercase">
                Local Driving
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  className="border-none shadow-none p-0 w-[8rem] focus-visible:ring-0 focus:ring-0 disabled:text-black hover:cursor-default"
                  placeholder="Self Driving"
                  {...field}
                  readOnly
                  value={localDriving}
                />
              </FormControl>
              <div className="flex flex-col absolute right-0 mt-[0.8rem]">
                <Button
                  className="hover:bg-transparent hover:cursor-pointer"
                  variant={"ghost"}
                  onClick={() => setLocalDriving((prev) => prev + 1)}
                  size={"icon"}
                >
                  <ChevronUpIcon />
                </Button>
                <Button
                  className="hover:bg-transparent hover:cursor-pointer -mt-[1.2rem]"
                  variant={"ghost"}
                  onClick={() => {
                    if (localDriving > 0) {
                      setLocalDriving((prev) => prev - 1);
                    }
                  }}
                  size={"icon"}
                >
                  <ChevronDownIcon />
                </Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="h-full ml-[0.3rem] text-[1.75rem] font-[900] block rounded-[0.5rem] bg-[#E64827] hover:bg-[#E64827] hover:cursor-pointer"
        >
          $299 <br />
          <p className="text-[0.875rem] font-bold uppercase">Book now</p>
        </Button>
      </form>
    </Form>
  );
};
