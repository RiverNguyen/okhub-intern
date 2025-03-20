"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { londrinaSolid } from "@/configs/font-family";
import { useState } from "react";
import LocationSelector from "@/components/ui/location-input";

const formSchema = z.object({
  fullName: z.string().min(1, {
    message: "Full name is required",
  }),
  phone: z.string().min(1, {
    message: "Phone is required",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  country: z.tuple([z.string().min(1, {
    message: "Country is required",
  }), z.string().optional()]),
  contactSubject: z.string().min(1, {
    message: "Contact subject is required",
  }),
  message: z.string(),
});

const FormContact = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [countryName, setCountryName] = useState<string>("");
  const [animate] = useAutoAnimate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      message: "",
      contactSubject: "",
      country: ["", ""],  
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
    <div className="relative z-30 px-[1rem] md:px-0 flex flex-col justify-center items-center text-center w-full h-full">
      <div className="mb-[5.3125rem]">
        <h3 className="text-[1.125rem] text-white/40 font-bold uppercase">
          Contact
        </h3>
        <h2
          className={`${londrinaSolid.className} text-[3.5rem] text-white font-[900] uppercase`}
        >
          Get in touch
        </h2>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="md:w-[35.3125rem] space-y-[1rem] text-[#BBD3C8]/50"
        >
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-none placeholder:text-[#BBD3C8]/50 border-t-0 border-r-0 border-l-0 shadow-none border-[#BBD3C8] focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="Full name *"
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
            </div>

            <div className="col-span-6">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-none placeholder:text-[#BBD3C8]/50 border-t-0 border-r-0 border-l-0 shadow-none border-[#BBD3C8] focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="Phone *"
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
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-none placeholder:text-[#BBD3C8]/50 border-t-0 border-r-0 border-l-0 shadow-none border-[#BBD3C8] focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="Your email *"
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

            <div className="col-span-6">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormControl>
                      <LocationSelector
                        
                        onCountryChange={(country) => {
                          setCountryName(country?.name || "");
                          form.setValue(field.name, [
                            country?.name || "",
                            "",
                          ]);
                        }}
                        
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
                name="contactSubject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-none placeholder:text-[#BBD3C8]/50 border-t-0 border-r-0 border-l-0 shadow-none border-[#BBD3C8] focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="Contact subject*"
                        {...field}
                      />
                    </FormControl>

                    <div ref={animate}>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel></FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    className="rounded-none placeholder:text-[#BBD3C8]/50 border-t-0 border-r-0 border-l-0 shadow-none border-[#BBD3C8] focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
                    {...field}
                  />
                </FormControl>

                <div ref={animate}>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <button className="w-full bg-[#E64827] text-white text-[0.875rem] font-bold uppercase py-[0.625rem] rounded-[0.5rem]">
            Send a message
          </button>
        </form>
      </Form>
    </div>
  );
};

export default FormContact;
