"use client";
import { navItems } from "@/lib/fake-data";
import Link from "next/link";
import React from "react";

const Menus = () => {
  return (
    <>
      {navItems.map((item) => (
        <Link key={item.id} href={item.link}>
          <li
            className={`px-5 py-3 uppercase hover:bg-primary/80 hover:text-white duration-300`}
          >
            {item.name}
          </li>
        </Link>
      ))}
    </>
  );
};

export default Menus;
