import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IndentDecrease } from "lucide-react";
import Link from "next/link";
import ProfileDropdown from "./ProfileDropdown";
import { ModeToggle } from "../ModeToggle";
import Menus from "./Menus";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Navbar = () => {
  return (
    <header className="bg-white dark:bg-black">
      <div className="max-w-[1390px] mx-auto">
        <div className="px-4 py-4 lg:py-8 flex items-center justify-between">
          <div className="flex-shrink-0 text-xl uppercase font-semibold">
            <Link href={"/"}>Tukitaki Bazar</Link>
          </div>

          <nav className="hidden lg:block">
            <ul className="xl:w-48 flex items-center justify-end">
              <li className="ml-2 lg:ml-4 relative inline-block p-2 hover:scale-110 duration-200 h-10 w-10">
                <ProfileDropdown />
              </li>
              <li className="ml-2 lg:ml-4 relative inline-block p-2 hover:scale-110 duration-200 dark:text-white">
                <a className="" href="/wishlist">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 16.09V11.098C21 6.808 21 4.665 19.682 3.332C18.364 2 16.242 2 12 2C7.757 2 5.636 2 4.318 3.332C3 4.665 3 6.81 3 11.098V16.091C3 19.187 3 20.736 3.734 21.412C4.084 21.735 4.526 21.938 4.997 21.992C5.984 22.105 7.137 21.085 9.442 19.046C10.462 18.145 10.971 17.694 11.56 17.576C11.85 17.516 12.15 17.516 12.44 17.576C13.03 17.694 13.539 18.145 14.558 19.046C16.863 21.085 18.016 22.105 19.003 21.991C19.473 21.938 19.916 21.735 20.266 21.412C21 20.736 21 19.187 21 16.09Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M15 6H9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </li>
              <li className="ml-2 lg:ml-4 relative inline-block p-2 hover:scale-110 duration-200 dark:text-white">
                <TooltipProvider disableHoverableContent>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild>
                      <a href="/cart">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.86403 16.455C3.00603 13.023 2.57703 11.308 3.47803 10.154C4.37803 9 6.14803 9 9.68503 9H14.315C17.853 9 19.621 9 20.522 10.154C21.423 11.307 20.994 13.024 20.136 16.455C19.59 18.638 19.318 19.729 18.504 20.365C17.69 21 16.565 21 14.315 21H9.68503C7.43503 21 6.31003 21 5.49603 20.365C4.68203 19.729 4.40903 18.638 3.86403 16.455Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M19.5 9.5L18.79 6.895C18.516 5.89 18.379 5.388 18.098 5.009C17.8178 4.63246 17.4373 4.3424 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5L5.21 6.895C5.484 5.89 5.621 5.388 5.902 5.009C6.18218 4.63246 6.56269 4.3424 7 4.172C7.44 4 7.96 4 9 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M9 4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4C15 4.26522 14.8946 4.51957 14.7071 4.70711C14.5196 4.89464 14.2652 5 14 5H10C9.73478 5 9.48043 4.89464 9.29289 4.70711C9.10536 4.51957 9 4.26522 9 4Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M8 13V17M16 13V17M12 13V17"
                            stroke="#060809"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">Shopping Cart</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
              <li className="ml-2 lg:ml-4 relative inline-block p-2 hover:scale-110 duration-200">
                <ModeToggle />
              </li>
              <li className="ml-2 lg:ml-4 relative inline-block p-2 hover:scale-110 duration-200">
                <Sheet>
                  <SheetTrigger>
                    <IndentDecrease className="size-6" />
                  </SheetTrigger>
                  <SheetContent>
                    <ul className="flex flex-col justify-center my-5">
                      <Menus />
                    </ul>
                  </SheetContent>
                </Sheet>
              </li>
            </ul>
          </nav>

          {/* for mobile devices */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger>
                <IndentDecrease className="size-6" />
              </SheetTrigger>
              <SheetContent>
                <ul className="flex flex-col justify-center my-5">
                  <Menus />
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className="flex justify-center">
          <nav className="lg:hidden">
            <ul className="xl:w-48 flex items-center justify-end">
              <li className="ml-2 lg:ml-4 relative inline-block p-2 hover:scale-110 duration-200 h-10 w-10">
                <ProfileDropdown />
              </li>
              <li className="ml-2 lg:ml-4 relative inline-block p-2 hover:scale-110 duration-200 dark:text-white">
                <a className="" href="/wishlist">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 16.09V11.098C21 6.808 21 4.665 19.682 3.332C18.364 2 16.242 2 12 2C7.757 2 5.636 2 4.318 3.332C3 4.665 3 6.81 3 11.098V16.091C3 19.187 3 20.736 3.734 21.412C4.084 21.735 4.526 21.938 4.997 21.992C5.984 22.105 7.137 21.085 9.442 19.046C10.462 18.145 10.971 17.694 11.56 17.576C11.85 17.516 12.15 17.516 12.44 17.576C13.03 17.694 13.539 18.145 14.558 19.046C16.863 21.085 18.016 22.105 19.003 21.991C19.473 21.938 19.916 21.735 20.266 21.412C21 20.736 21 19.187 21 16.09Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M15 6H9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </li>
              <li className="ml-2 lg:ml-4 relative inline-block p-2 hover:scale-110 duration-200 dark:text-white">
                <a className="" href="/cart">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.86403 16.455C3.00603 13.023 2.57703 11.308 3.47803 10.154C4.37803 9 6.14803 9 9.68503 9H14.315C17.853 9 19.621 9 20.522 10.154C21.423 11.307 20.994 13.024 20.136 16.455C19.59 18.638 19.318 19.729 18.504 20.365C17.69 21 16.565 21 14.315 21H9.68503C7.43503 21 6.31003 21 5.49603 20.365C4.68203 19.729 4.40903 18.638 3.86403 16.455Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M19.5 9.5L18.79 6.895C18.516 5.89 18.379 5.388 18.098 5.009C17.8178 4.63246 17.4373 4.3424 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5L5.21 6.895C5.484 5.89 5.621 5.388 5.902 5.009C6.18218 4.63246 6.56269 4.3424 7 4.172C7.44 4 7.96 4 9 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M9 4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4C15 4.26522 14.8946 4.51957 14.7071 4.70711C14.5196 4.89464 14.2652 5 14 5H10C9.73478 5 9.48043 4.89464 9.29289 4.70711C9.10536 4.51957 9 4.26522 9 4Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8 13V17M16 13V17M12 13V17"
                      stroke="#060809"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
              <li className="ml-2 lg:ml-4 relative inline-block p-2 hover:scale-110 duration-200">
                <ModeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
