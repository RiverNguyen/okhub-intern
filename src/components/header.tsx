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

const Header = () => {
  const linkMenu = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Tour",
      href: "/tour",
    },
    {
      name: "Activity",
      href: "/activity",
    },
    {
      name: "Destination",
      href: "/destination",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "FAQ",
      href: "/faq",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div className="flex justify-between items-center relative z-50">
      <Image src={"/logo.svg"} width={154} height={51} alt="logo" />
      <div className="relative">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="bg-[#E64827] h-auto w-auto rounded-full p-[0.5rem] font-extrabold text-[1.25rem] hover:bg-[#E64827] hover:cursor-pointer">
              <MenuIcon />
              MENU
            </Button>
          </SheetTrigger>
          <SheetContent
            side="top"
            className="bg-[#0F492B] border-none rounded-bl-4xl rounded-br-4xl pb-[3.81rem] pl-[5rem] bg-[url(/sheet-bg.png)] bg-no-repeat bg-cover"
          >
            <SheetHeader>
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
              className="absolute top-0 bottom-0 right-0 h-full w-[52rem] rounded-br-4xl"
            />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
