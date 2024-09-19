import React, { useEffect, useState } from "react";
import SectionTitle from "../global/SectionTitle";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { MdOutlineFormatLineSpacing } from "react-icons/md";
import { MdFilterAlt } from "react-icons/md";
import { cn } from "@/lib/utils";
import FilterColumn from "./FilterColumn";
// import ProductSearch from "./ProductSearch";

const FilterProducts = ({ handleSubmit, handleView, view }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Close the sheet when the screen width is >= 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSheetOpen(false);
      }
    };

    // Add event listener for resizing
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="flex items-center justify-between pb-6">
      <div>
        <SectionTitle className={"mb-0 hidden"}>Shop</SectionTitle>
      </div>
      <div className="flex flex-wrap items-center gap-3 md:gap-6 flex-1 sm:justify-end">
        {/* <ProductSearch handleSubmit={handleSubmit} /> */}
        <div>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger className="md:hidden" asChild>
              <Button className="gap-2" variant="outline">
                <MdFilterAlt />
                Filter
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="mt-6 overflow-auto max-h-[calc(100vh-5rem)]">
                <FilterColumn />
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="inline-flex items-center gap-4">
          <p className="hiddenmd:block">Sort by</p>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Newest" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
                <SelectItem selected value="newest">
                  Newest
                </SelectItem>
                <SelectItem value="low-to-hight">
                  Price : low to high
                </SelectItem>
                <SelectItem value="high-to-low">Price : high to low</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="inline-flex items-center gap-4">
          <p className="hidden md:block">View</p>
          <div className="inline-flex items-center gap-2">
            <button className="p-2" onClick={() => handleView("grid")}>
              <BsFillGrid3X3GapFill
                className={cn("text-xl", view === "grid" && "text-primary")}
              />
            </button>
            <button className="p-2" onClick={() => handleView("list")}>
              <MdOutlineFormatLineSpacing
                className={cn("text-2xl", view === "list" && "text-primary")}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
