import { tripsans } from "@/configs/font-family";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hong Hao Travel",
  description:
    "Hong Hao Travel is a travel company in Ha Giang, we specialize in organizing unforgettable tours to explore Ha Giang loop but still focus on the pristine nature of nature.",
  icons: [
    {
      url: "/favicon.svg",
      href: "/favicon.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={tripsans.className}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
