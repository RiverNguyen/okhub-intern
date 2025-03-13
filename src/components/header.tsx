"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasBg, setHasBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }

      setHasBg(currentScrollY > 100);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const linkMenu = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Tour", href: "/tour" },
    { name: "Activity", href: "/activity" },
    { name: "Destination", href: "/destination" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed z-[60] top-0 left-0 w-full transition-all md:px-[5rem] px-[1.25rem] duration-300  ${
        isSticky ? "translate-y-0" : "-translate-y-full"
      } ${hasBg ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="flex justify-between items-center relative z-50 transition-all duration-300 py-[1rem]">
        <Image
          src={hasBg ? "/black-logo.svg" : "/white-logo.svg"}
          width={154}
          height={51}
          alt="logo"
          className="w-[7.1875rem] h-[2.5625rem] md:w-[9.625rem] md:h-[3.1875rem]"
        />
        <div className="relative">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="bg-transparent md:bg-[#E64827] border md:border-none border-white h-auto w-auto rounded-full p-[0.5rem] font-extrabold text-[1.25rem] hover:bg-[#E64827]">
                <MenuIcon />
                MENU
              </Button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="bg-[#0F492B] border-none rounded-bl-4xl rounded-br-4xl pb-[3.81rem] pl-[1.25rem] md:pl-[5rem] bg-[url(/sheet-bg.png)] bg-no-repeat bg-cover data-[state=closed]:duration-700 data-[state=open]:duration-700"
            >
              <SheetHeader className="p-0">
                <SheetTitle>
                  <Image
                    src={"/logo.svg"}
                    className="pt-[2rem]"
                    width={154}
                    height={51}
                    alt="logo"
                  />
                </SheetTitle>
              </SheetHeader>
              <div className="mt-[4.44rem] w-[23rem]">
                {linkMenu.map((item) => (
                  <div key={item.href} className="flex flex-col gap-y-[0.5rem]">
                    <div>
                      <Link
                        className="text-white text-[2rem] font-bold"
                        href={item.href}
                      >
                        {item.name}
                      </Link>
                      <Separator className="mt-[0.5rem] opacity-20 w-[40.125rem]" />
                    </div>
                  </div>
                ))}
              </div>
              <Image
                src={"/images/sheet-bg.png"}
                alt="sheet"
                width={819}
                height={612}
                className="absolute top-0 bottom-0 right-0 h-full w-[52rem] rounded-br-4xl hidden md:block"
              />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
