"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import {
  Calendar as CalendarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { poppins } from "@/configs/font-family";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  phone: z.string().min(1, {
    message: "Phone is required",
  }),
  email: z.string().email({
    message: "Invalid email",
  }),
  message: z.string(),
  typeOfTour: z.enum(["Best Budget", "Premium", "Standard"]),
  days: z.enum(["2 Days 3 Nights", "3 Days 4 Nights", "4 Days 5 Nights"]),
  pickup: z.enum(["Ha Noi", "Sa Pa", "Ninh Binh"]),
  departureDate: z.coerce.date(),
  addressPick: z.string().min(1, {
    message: "Address is required",
  }),
  dropOff: z.enum(["Ha Noi", "Ninh Binh", "Cat Ba", "Ha Long"]),
  endDate: z.coerce.date(),
  addressDropOff: z.string().min(1, {
    message: "Address is required",
  }),
  pax1: z.number().optional(),
  pax2: z.number().optional(),
});

export default function MyForm() {
  const [animate] = useAutoAnimate();
  const [selfDriving, setSelfDriving] = useState(0);
  const [localDriving, setLocalDriving] = useState(0);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      typeOfTour: "Best Budget",
      days: "2 Days 3 Nights",
      pickup: "Ha Noi",
      addressPick: "",
      dropOff: "Ha Noi",
      addressDropOff: "",
      departureDate: new Date(),
      endDate: new Date(),
      pax1: 0,
      pax2: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          ref={animate}
          id="bookForm"
        >
          <div className="flex flex-col pb-[1rem] mt-[0.5rem]">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel></FormLabel>
                  <FormControl>
                    <Input
                      className="focus-visible:border-[#E64827] focus-visible:ring-[#E64827] focus-visible:ring-[0.0825rem]"
                      placeholder="Peter Nguyen Tuan Anh"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <div ref={animate}>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-x-[0.75rem]">
              <div>
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel></FormLabel>
                      <FormControl>
                        <Input
                          className="focus-visible:border-[#E64827] focus-visible:ring-[#E64827] focus-visible:ring-[0.0825rem]"
                          placeholder="Phone (Whatsapp) *"
                          type=""
                          {...field}
                        />
                      </FormControl>
                      <div ref={animate}>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel></FormLabel>
                      <FormControl>
                        <Input
                          className="focus-visible:border-[#E64827] focus-visible:ring-[#E64827] focus-visible:ring-[0.0825rem]"
                          placeholder="Email *"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <div ref={animate}>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel></FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Message *"
                      className="focus-visible:border-[#E64827] focus-visible:ring-[#E64827] focus-visible:ring-[0.0825rem]"
                      {...field}
                    />
                  </FormControl>
                  <div ref={animate}>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-x-[0.5rem] mb-[1rem]">
            <div>
              <FormField
                control={form.control}
                name="typeOfTour"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type of tour:</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Best Budget" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Best Budget">Best Budget</SelectItem>
                        <SelectItem value="Premium">Premium</SelectItem>
                        <SelectItem value="Standard">Standard</SelectItem>
                      </SelectContent>
                    </Select>
                    <div ref={animate}>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="days"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Choose days</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Choose days" />
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
                    <div ref={animate}>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-[0.75rem] mb-[1rem]">
            <div className="col-span-3">
              <FormField
                control={form.control}
                name="pickup"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pick up</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Pick Up" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="w-[15rem]">
                        <div className="p-[1rem]">
                          <SelectItem className="p-[1rem]" value="Ha Noi">
                            Ha Noi
                          </SelectItem>
                          <Separator />
                          <SelectItem className="p-[1rem]" value="Sa Pa">
                            Sa Pa
                          </SelectItem>
                          <Separator />
                          <SelectItem className="p-[1rem]" value="Ninh Binh">
                            Ninh Binh
                          </SelectItem>
                        </div>
                      </SelectContent>
                    </Select>
                    <div ref={animate}>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-3">
              <FormField
                control={form.control}
                name="departureDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Departure date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "d/MM/yyyy")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 text-[#E64827]" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <div ref={animate}>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-6">
              <FormField
                control={form.control}
                name="addressPick"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input
                        className="focus-visible:border-[#E64827] focus-visible:ring-[#E64827] focus-visible:ring-[0.0825rem]"
                        placeholder=""
                        type=""
                        {...field}
                      />
                    </FormControl>
                    <div ref={animate}>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-[0.75rem] mb-[1rem]">
            <div className="col-span-3">
              <FormField
                control={form.control}
                name="dropOff"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Drop Off</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Drop Off" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="w-[15rem]">
                        <div className="p-[1rem]">
                          <SelectItem className="p-[1rem]" value="Ha Noi">
                            Ha Noi
                          </SelectItem>
                          <Separator />
                          <SelectItem className="p-[1rem]" value="Sa Pa">
                            Sa Pa
                          </SelectItem>
                          <Separator />
                          <SelectItem className="p-[1rem]" value="Ninh Binh">
                            Ninh Binh
                          </SelectItem>
                        </div>
                      </SelectContent>
                    </Select>
                    <div ref={animate}>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-3">
              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>End date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "d/MM/yyyy")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 text-[#E64827]" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <div ref={animate}>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-6">
              <FormField
                control={form.control}
                name="addressDropOff"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input
                        className="focus-visible:border-[#E64827] focus-visible:ring-[#E64827] focus-visible:ring-[0.0825rem]"
                        placeholder=""
                        type=""
                        {...field}
                      />
                    </FormControl>
                    <div ref={animate}>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </form>
        <div className="flex flex-col gap-[0.75rem] mt-[1rem]">
          <div className="flex justify-between items-center">
            <p className="text-[0.875rem] text-[#3F3F3F]">
              4 days of self-driving
            </p>
            <div className="flex items-center justify-center gap-[0.5rem] relative">
              <p className="mr-[2rem] text-[#6A6A6A] font-bold">$169</p>
              <Separator
                orientation="vertical"
                style={{
                  width: "1px",
                  height: "1.5rem",
                }}
              />
              <FormField
                control={form.control}
                name="pax1"
                render={({ field }) => (
                  <FormItem className="gap-0 w-[6rem] relative">
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        className="text-right pr-[1.3rem] text-[#DA4B19] text-[0.875rem] font-bold border-none shadow-none bg-[#F1F1F1]"
                        readOnly
                        value={selfDriving}
                      />
                    </FormControl>
                    <div className="absolute right-0 left-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-[0.75rem]">
                      <p className="text-[0.875rem] text-[#3F3F3F]">Pax</p>
                      <div className="flex flex-col gap-y-[0.75rem]">
                        <button
                          className="hover:bg-transparent hover:cursor-pointer"
                          onClick={() => setSelfDriving((prev) => prev + 1)}
                        >
                          <ChevronUpIcon className="size-[1.2rem] hover:text-[#DA4B19] duration-300 transform font-bold" />
                        </button>
                        <button
                          className="hover:bg-transparent hover:cursor-pointer -mt-[1.3rem]"
                          onClick={() => {
                            if (selfDriving > 0) {
                              setSelfDriving((prev) => prev - 1);
                            }
                          }}
                        >
                          <ChevronDownIcon className="size-[1.2rem] hover:text-[#DA4B19] duration-300 transform font-bold" />
                        </button>
                      </div>
                    </div>

                    <div ref={animate}>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Separator />
          <div className="flex justify-between items-center">
            <p className="text-[0.875rem] text-[#3F3F3F]">
              4 days of self-driving
            </p>
            <div className="flex items-center justify-center gap-[0.5rem] relative">
              <p className="mr-[2rem] text-[#6A6A6A] font-bold">$169</p>
              <Separator
                orientation="vertical"
                style={{
                  width: "1px",
                  height: "1.5rem",
                }}
              />
              <FormField
                control={form.control}
                name="pax2"
                render={({ field }) => (
                  <FormItem className="gap-0 w-[6rem] relative">
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        className="text-right pr-[1.3rem] text-[#DA4B19] text-[0.875rem] font-bold border-none shadow-none bg-[#F1F1F1]"
                        readOnly
                        value={localDriving}
                      />
                    </FormControl>
                    <div className="absolute right-0 left-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-[0.75rem]">
                      <p className="text-[0.875rem] text-[#3F3F3F]">Pax</p>
                      <div className="flex flex-col gap-y-[0.75rem]">
                        <button
                          className="hover:bg-transparent hover:cursor-pointer"
                          onClick={() => setLocalDriving((prev) => prev + 1)}
                        >
                          <ChevronUpIcon className="size-[1.2rem] hover:text-[#DA4B19] duration-300 transform font-bold" />
                        </button>
                        <button
                          className="hover:bg-transparent hover:cursor-pointer -mt-[1.3rem]"
                          onClick={() => {
                            if (localDriving > 0) {
                              setLocalDriving((prev) => prev - 1);
                            }
                          }}
                        >
                          <ChevronDownIcon className="size-[1.2rem] hover:text-[#DA4B19] duration-300 transform font-bold" />
                        </button>
                      </div>
                    </div>

                    <div ref={animate}>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Separator />
          <div className="flex justify-between">
            <p
              className={`text-[#551D0A] text-[1rem] ${poppins.className} font-bold uppercase`}
            >
              Total
            </p>
            <p className="w-[10.5625rem] py-[0.25rem] px-[0.5rem] bg-[#F1F1F1] rounded-[0.25rem] text-center text-[#262626] text-[1.25rem] font-bold">
              $567
            </p>
          </div>
        </div>
      </Form>
    </>
  );
}
