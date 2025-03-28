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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTriggerCustom,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasBg, setHasBg] = useState(false);
  const [open, setOpen] = useState(false);

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
    { name: "About Us", href: "/about-us" },
    { name: "Tour" },
    { name: "Activity", href: "/activity" },
    { name: "Destination", href: "/destination" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <header
      className={`fixed z-[60] top-0 left-0 w-full transition-all md:px-[5rem] px-[1.25rem] duration-300 ${
        isSticky ? "translate-y-0" : "-translate-y-full"
      } ${hasBg ? "bg-white shadow-md" : "bg-transparent"} `}
    >
      <div className="flex justify-between items-center relative z-50 transition-all duration-300 py-[1rem]">
        <Link href={"/"}>
          <Image
            src={hasBg ? "/black-logo.svg" : "/white-logo.svg"}
            width={154}
            height={51}
            alt="logo"
            className={`w-[7.1875rem] h-[2.5625rem] md:w-[9.625rem] md:h-[3.1875rem] ${
              hasBg ? "-ml-[0.75rem]" : ""
            }`}
          />
        </Link>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              className={cn(
                `md:bg-[#E64827] border hover:cursor-pointer md:border-none border-white h-auto w-auto rounded-full p-[0.5rem] font-extrabold text-[1.25rem] hover:bg-[#E64827]`,
                hasBg ? "bg-[#E64827]" : "bg-transparent"
              )}
            >
              <MenuIcon />
              MENU
            </Button>
          </SheetTrigger>
          <SheetContent
            side="top"
            className="bg-[#0F492B] border-none rounded-bl-4xl rounded-br-4xl pb-[3.81rem] pl-[1.25rem] md:pl-[5rem] bg-[url(/sheet-bg.png)] bg-no-repeat bg-cover data-[state=closed]:duration-700 data-[state=open]:duration-700 max-h-[80vh] overflow-y-auto hidden-y-scroll absolute"
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
            <div className="mt-[4.44rem] w-[23rem] ">
              {linkMenu.map((item, index) => (
                <Fragment key={item.href || index}>
                  <div className="flex flex-col gap-y-[0.5rem]">
                    <div>
                      {item.name === "Tour" ? (
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1">
                            <AccordionTriggerCustom className="text-white text-[2rem] gap-0 font-bold p-0 flex items-center group transition-all duration-500">
                              <span className="inline-block w-0 overflow-hidden group-hover:w-10 transition-all duration-500">
                                <Image
                                  src="/arrow-marquee.svg"
                                  alt="arrow"
                                  width={40}
                                  height={40}
                                  className="transform -translate-x-10 group-hover:-translate-x-1 transition-all duration-500"
                                />
                              </span>
                              <span className="mr-[1rem] p-0">Tour</span>
                            </AccordionTriggerCustom>

                            <AccordionContent className="opacity-80 text-white font-bold text-[1.25rem]">
                              {[
                                {
                                  href: "/best-budget",
                                  label: "Best Budget",
                                },
                                { href: "/standard", label: "Standard" },
                                { href: "/premium", label: "Premium" },
                                { href: "/tours", label: "All tours" },
                              ].map((tour) => (
                                <div
                                  onClick={() => setOpen(false)}
                                  key={tour.href}
                                  className="py-[0.5rem] pr-[1rem] w-fit border-b border-solid border-neutral-300"
                                >
                                  <Link href={tour.href}>{tour.label}</Link>
                                </div>
                              ))}
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      ) : (
                        <Link
                          onClick={() => setOpen(false)}
                          className="text-white text-[2rem] font-bold flex items-center group transition-all duration-500"
                          href={item.href || ""}
                        >
                          <span className="inline-block w-0 overflow-hidden group-hover:w-10 transition-all duration-500">
                            <Image
                              src={"/arrow-marquee.svg"}
                              alt="arrow"
                              width={40}
                              height={40}
                              className="transform -translate-x-10 group-hover:-translate-x-1 transition-all duration-500"
                            />
                          </span>
                          <span>{item.name}</span>
                        </Link>
                      )}
                      <Separator className="mt-[0.5rem] opacity-20 w-[40.125rem]" />
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
            <Image
              src={"/images/home/sheet-bg.png"}
              alt="sheet"
              width={819}
              height={612}
              className="absolute top-0 bottom-0 right-0 h-full w-[52rem] rounded-br-2xl hidden md:block"
            />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
