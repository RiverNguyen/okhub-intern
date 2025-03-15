import localFont from "next/font/local";
import { Londrina_Solid, Poppins } from "next/font/google";

export const londrinaSolid = Londrina_Solid({
  subsets: ["latin"],
  weight: ["400", "900"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const tripsans = localFont({
  src: [
    {
      path: "../fonts/trip-sans.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/trip-sans-medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../fonts/trip-sans-bold.otf",
      weight: "600",
      style: "bold",
    },
    {
      path: "../fonts/trip-sans-ultra.otf",
      weight: "700",
      style: "black",
    },
  ],
});

export const havana = localFont({
  src: [
    {
      path: "../fonts/havana-sunset-script.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const angel = localFont({
  src: [
    {
      path: "../fonts/angel-boos.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});
