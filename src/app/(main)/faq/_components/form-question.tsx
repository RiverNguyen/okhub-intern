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
  message: z.string(),
});

export default function FormQuestion() {
  const [animate] = useAutoAnimate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      message: "",
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
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="md:w-[35.3125rem] space-y-[1rem]"
      >
        <h2 className="mb-[2rem] text-[#262626] font-bold text-[1.25rem]">
          Ask a different question
        </h2>
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
                      className="rounded-none border-t-0 border-r-0 border-l-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
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
                      className="rounded-none border-t-0 border-r-0 border-l-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
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

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
                <Input
                  className="rounded-none border-t-0 border-r-0 border-l-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
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

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Message"
                  className="rounded-none border-t-0 border-r-0 border-l-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
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
  );
}
