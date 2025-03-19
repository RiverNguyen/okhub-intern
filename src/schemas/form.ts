import * as z from "zod";

export const formSchema = z.object({
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
