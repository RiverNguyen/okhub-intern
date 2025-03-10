import localFont from "next/font/local";

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
