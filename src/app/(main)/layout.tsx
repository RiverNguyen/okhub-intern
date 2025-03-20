import Footer from "@/components/footer";
import FixedButton from "@/components/fixed-button";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FixedButton />
      <Toaster />
    </>
  );
}
