import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HomeIcon } from "lucide-react";

const BreadcrumbAbout = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList className="pl-[1rem] md:pl-[5rem] py-[1.25rem] border-b border-[#C5C5C5]">
        <BreadcrumbItem>
          <BreadcrumbLink
            className="flex items-center gap-x-[0.25rem]"
            href="/"
          >
            <HomeIcon className="size-[1rem]" />
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-[#E64827]" />
        <BreadcrumbLink href="/tours">Tour</BreadcrumbLink>
        <BreadcrumbSeparator className="text-[#E64827]" />
        <BreadcrumbItem>
          <BreadcrumbPage>
            Ha Giang Loop tour: Itinerary in 3 Days 4 Nights
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbAbout;
