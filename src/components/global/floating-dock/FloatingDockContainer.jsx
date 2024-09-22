"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { FaArrowLeftLong, FaRegHeart } from "react-icons/fa6";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { SlHome } from "react-icons/sl";
import { LuUser } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CategoriesMenus from "../CategoriesMenus";
// const dummyDockData = [
//   {
//     id: "1",
//     href: "/homepage",
//     active: pathname.includes("/homepage"),
//     title: "Home",
//     icon: <SlHome />,
//   },
//   {
//     id: "2",
//     href: "/products",
//     active: pathname.includes("/products"),
//     title: "Categories",
//     icon: <MdOutlineFormatListBulleted />,
//   },
//   {
//     id: "3",
//     href: "/cart",
//     active: pathname.includes("/cart"),
//     title: "Cart",
//     icon: <IoCartOutline />,
//   },
//   {
//     id: "4",
//     href: "/wishlist",
//     active: pathname.includes("/wishlist"),
//     title: "Wishlist",
//     icon: <FaRegHeart />,
//   },
//   {
//     id: "5",
//     href: "/account",
//     active: pathname.includes("/account"),
//     title: "Account",
//     icon: <LuUser />,
//   },
// ];

const FloatingDockContainer = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  return (
    <div className="bg-secondary px-4 py-2 z-50 bottom-0 fixed inset-x-0 overflow-hidden lg:hidden">
      <ul className="flex justify-between items-center">
        {/* {dummyDockData.map((item) => ( */}
        <li className="">
          <a
            href="#"
            className={cn(
              "flex flex-col md:flex-row items-center justify-center gap-1 p-2"
            )}
          >
            <span className="text-xl">
              <SlHome />
            </span>
            <span className="text-xs">Home</span>
          </a>
        </li>
        <li className="">
          <Sheet
            open={isCategoryOpen}
            onOpenChange={() => setIsCategoryOpen(!isCategoryOpen)}
          >
            <SheetTrigger className="flex flex-col md:flex-row items-center justify-center gap-1 p-2">
              <span className="text-xl">
                <MdOutlineFormatListBulleted />
              </span>
              <span className="text-xs">Categories</span>
            </SheetTrigger>
            <SheetContent className="p-0" side="left">
              <SheetHeader className="px-4 py-6 bg-secondary flex-row space-y-0 justify-between">
                <button
                  onClick={() => setIsCategoryOpen(false)}
                  className="flex justify-center items-center"
                >
                  <FaArrowLeftLong size={20} />
                </button>
                <SheetTitle className="text-left uppercase text-xl">
                  Categories
                </SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col justify-center">
                <CategoriesMenus />
              </ul>
            </SheetContent>
          </Sheet>
        </li>
        <li className="">
          <a
            href="#"
            className={cn(
              "flex flex-col md:flex-row items-center justify-center gap-1 p-2"
            )}
          >
            <span className="text-xl">
              <IoCartOutline />
            </span>
            <span className="text-xs">Cart</span>
          </a>
        </li>
        <li className="">
          <a
            href="#"
            className={cn(
              "flex flex-col md:flex-row items-center justify-center gap-1 p-2"
            )}
          >
            <span className="text-xl">
              {" "}
              <FaRegHeart />{" "}
            </span>
            <span className="text-xs">Wishlist</span>
          </a>
        </li>
        <li className="">
          <a
            href="#"
            className={cn(
              "flex flex-col md:flex-row items-center justify-center gap-1 p-2"
            )}
          >
            <span className="text-xl">
              <LuUser />
            </span>
            <span className="text-xs">Account</span>
          </a>
        </li>
        {/* ))} */}
      </ul>
    </div>
  );
};

export default FloatingDockContainer;
