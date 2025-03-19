import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HomeIcon } from "lucide-react";

const BreadcrumbContainer = ({
  first,
  second,
}: {
  first?: string;
  second?: string;
}) => {
  return (
    <Breadcrumb>
      <BreadcrumbList className="pl-[1rem] md:pl-[5rem] py-[1.25rem] border-b border-[#C5C5C5] overflow-hidden">
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
        <BreadcrumbLink
          className="text-[#262626]"
          href={`/${first?.toLowerCase()}`}
        >
          {first}
        </BreadcrumbLink>
        {second && (
          <>
            <BreadcrumbSeparator className="text-[#E64827]" />
            <BreadcrumbItem className="min-w-0">
              <BreadcrumbPage>
                <span className="block overflow-hidden text-ellipsis whitespace-nowrap max-w-[240px] md:max-w-none">
                  {second}
                </span>
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbContainer;
