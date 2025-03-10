import type { Metadata } from "next";
import "./globals.css";
import { tripsans } from "../../public/fonts/font-family";

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
    <html lang="en" className={tripsans.className}>
      <body>{children}</body>
    </html>
  );
}
