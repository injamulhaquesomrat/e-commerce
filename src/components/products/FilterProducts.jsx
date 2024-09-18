import React from "react";
import SectionTitle from "../global/SectionTitle";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { MdOutlineFormatLineSpacing } from "react-icons/md";
import { MdFilterAlt } from "react-icons/md";
import { cn } from "@/lib/utils";
// import ProductSearch from "./ProductSearch";

const FilterProducts = ({ handleSubmit, handleView, view }) => {
  return (
    <div className="flex items-center justify-between pb-6">
      <div>
        <SectionTitle className={"mb-0 hidden"}>Shop</SectionTitle>
      </div>
      <div className="flex flex-wrap items-center gap-3 md:gap-6 flex-1 sm:justify-end">
        {/* <ProductSearch handleSubmit={handleSubmit} /> */}
        <div>
          <Sheet>
            <SheetTrigger
              // className="md:hidden"
              asChild
            >
              <Button className="gap-2" variant="outline">
                <MdFilterAlt />
                Filter
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    value="@peduarte"
                    className="col-span-3"
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        <div className="inline-flex items-center gap-4">
          <p className="hidden">Sort by</p>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Newest" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="default">default</SelectItem>
                <SelectItem value="oldest">oldest</SelectItem>
                <SelectItem selected value="Newest">
                  Newest
                </SelectItem>
                <SelectItem value="lot-to-hight">
                  Price : low to high
                </SelectItem>
                <SelectItem value="high-to-low">Price : high to low</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="inline-flex items-center gap-4">
          <p className="hidden">View</p>
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
