import { catergoriesItems } from "@/lib/fake-data";
import Link from "next/link";
import React from "react";

const CategoriesMenus = () => {
  return (
    <>
      {catergoriesItems.map((item) => (
        <Link key={item.id} href={item.link}>
          <li className={`p-4 border-b uppercase`}>{item.name}</li>
        </Link>
      ))}
    </>
  );
};

export default CategoriesMenus;
