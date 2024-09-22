"use client";
import React from "react";
import Link from "next/link";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ProfileDropdown = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <TooltipProvider disableHoverableContent>
          <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
              <svg
                className="dark:text-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M17.97 20C17.81 17.108 16.925 15 12 15C7.07503 15 6.19003 17.108 6.03003 20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </TooltipTrigger>
            <TooltipContent side="bottom">User Profile</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] px-3">
        <ul className="space-y-2">
          <li>
            <Link
              className="px-3 py-1.5 dark:text-white dark:hover:text-primary font-medium hover:text-primary hover:bg-secondary rounded flex"
              href={"#"}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              className="px-3 py-1.5 dark:text-white dark:hover:text-primary font-medium hover:text-primary hover:bg-secondary rounded flex"
              href={"#"}
            >
              Settings
            </Link>
          </li>
          <li>
            <Link
              className="px-3 py-1.5 dark:text-white dark:hover:text-primary font-medium hover:text-primary hover:bg-secondary rounded flex"
              href={"/signup"}
            >
              Signup
            </Link>
          </li>
          <li>
            <Link
              className="px-3 py-1.5 dark:text-white dark:hover:text-primary font-medium hover:text-primary hover:bg-secondary rounded flex"
              href={"/login"}
            >
              Login
            </Link>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default ProfileDropdown;
