import Footer from "@/components/footer";
import FixedButton from "@/components/fixed-button";
import Header from "@/components/header";

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
    </>
  );
}
