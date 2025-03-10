import type { Metadata } from "next";
import "./globals.css";
import { tripsans } from "../../public/fonts/font-family";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
