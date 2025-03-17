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
      <BreadcrumbList className="pl-[5rem] py-[1.25rem] border-b border-[#C5C5C5]">
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
        <BreadcrumbItem>
          <BreadcrumbPage>About Us</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbAbout;
