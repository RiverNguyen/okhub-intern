import localFont from "next/font/local";
import { Londrina_Solid } from "next/font/google";

export const londrinaSolid = Londrina_Solid({
  subsets: ["latin"],
  weight: ["400", "900"],
});

export const tripsans = localFont({
  src: [
    {
      path: "./trip-sans.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./trip-sans-medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./trip-sans-bold.otf",
      weight: "600",
      style: "bold",
    },
    {
      path: "./trip-sans-ultra.otf",
      weight: "700",
      style: "ultra",
    },
  ],
});

export const havana = localFont({
  src: [
    {
      path: "./havana-sunset-script.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});
