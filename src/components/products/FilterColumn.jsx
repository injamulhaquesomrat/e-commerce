"use client";
import { fakeProductCategory } from "@/lib/fake-data";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  FiMonitor,
  FiShoppingBag,
  FiFridge,
  FiBook,
  FiHeart,
  FiActivity,
  FiPlay,
  FiTruck,
  FiChair,
  FiMusic,
} from "react-icons/fi";
import { CollapsibaleCategoryButton } from "./CollapsibleCategoryButton";

const FilterColumn = () => {
  const [openId, setOpenId] = useState(null);
  return (
    <div className="col-span-3">
      <div className="bg-secondary p-4 rounded-md">
        <h2 className="text-xl uppercase font-semibold tracking-wide">
          Product Categories
        </h2>
        <ul>
          {fakeProductCategory.map(
            ({ id, category, icon: Icon, subcategory }) => (
              <li key={id}>
                {subcategory.length !== 0 ? (
                  <>
                    <CollapsibaleCategoryButton
                      key={id}
                      category={category}
                      subcategory={subcategory}
                      openId={openId}
                      setOpenId={setOpenId}
                      id={id}
                    />
                  </>
                ) : (
                  <Button>{category}</Button>
                )}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default FilterColumn;
