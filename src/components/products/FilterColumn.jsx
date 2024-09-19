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
import { Checkbox } from "../ui/checkbox";
import { Slider } from "../ui/slider";
import { cn } from "@/lib/utils";

const fakeBrands = [
  {
    id: 1,
    brand: "FoodPound",
  },
  {
    id: 2,
    brand: "iTea JSC",
  },
  {
    id: 3,
    brand: "Soda Brand",
  },
  {
    id: 4,
    brand: "Freshmart",
  },
  {
    id: 5,
    brand: "Soda brand",
  },
];

const FilterColumn = () => {
  const [openId, setOpenId] = useState(null);
  const [range, setRange] = useState([30000]);
  return (
    <div className="space-y-8">
      <div className="bg-secondary p-4 rounded-md">
        <h2 className="text-xl py-4 md:p-4 uppercase font-semibold tracking-wide">
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
      <div className="bg-secondary p-4 rounded-md">
        <h2 className="text-xl uppercase font-semibold tracking-wide py-4 md:p-4">
          Brands
        </h2>
        <ul className="space-y-4 md:px-4">
          {fakeBrands.map((brand) => (
            <div key={brand.id} className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {brand.brand}
              </label>
            </div>
          ))}
        </ul>
      </div>
      <div className="bg-secondary p-4 rounded-md">
        <div>
          <h2 className="text-xl uppercase font-semibold tracking-wide py-4 md:p-4">
            By price
          </h2>
          <div className="md:p-4 space-y-4">
            <Slider
              value={range}
              onValueChange={(value) => setRange(value)}
              min={0}
              max={100000}
              step={1}
              className={cn("w-full")}
            />
            <p className="font-semibold">0 BDT - {range} BDT</p>
          </div>
        </div>
        <hr className="m-4" />
        <div>
          <h2 className="text-xl uppercase font-semibold tracking-wide py-4 md:p-4">
            By Weight
          </h2>
          <div className="md:p-4 flex gap-4 flex-wrap">
            <Button className=" uppercase bg-white rounded-none hover:bg-gray-200 font-normal text-black">
              1Kg
            </Button>
            <Button className=" uppercase bg-white rounded-none hover:bg-gray-200 font-normal text-black">
              2Kg
            </Button>
            <Button className=" uppercase bg-white rounded-none hover:bg-gray-200 font-normal text-black">
              3Kg
            </Button>
            <Button className=" uppercase bg-white rounded-none hover:bg-gray-200 font-normal text-black">
              4KG
            </Button>
            <Button className=" uppercase bg-white rounded-none hover:bg-gray-200 font-normal text-black">
              5KG
            </Button>
          </div>
        </div>
        <hr className="m-4" />
        <div>
          <h2 className="text-xl uppercase font-semibold tracking-wide py-4 md:p-4">
            By Size
          </h2>
          <div className="md:p-4 flex gap-4 flex-wrap">
            <Button className=" uppercase bg-white rounded-none hover:bg-gray-200 font-normal text-black">
              S
            </Button>
            <Button className=" uppercase bg-white rounded-none hover:bg-gray-200 font-normal text-black">
              M
            </Button>
            <Button className=" uppercase bg-white rounded-none hover:bg-gray-200 font-normal text-black">
              L
            </Button>
            <Button className=" uppercase bg-white rounded-none hover:bg-gray-200 font-normal text-black">
              XL
            </Button>
            <Button className=" uppercase bg-white rounded-none hover:bg-gray-200 font-normal text-black">
              XXL
            </Button>
          </div>
        </div>
        <hr className="m-4" />
        <div>
          <h2 className="text-xl uppercase font-semibold tracking-wide py-4 md:p-4">
            By Boxes
          </h2>
          <div className="md:p-4 flex gap-4 flex-wrap">
            <Button className=" uppercase bg-white rounded-none hover:bg-gray-200 font-normal text-black">
              1 Box
            </Button>
            <Button className=" uppercase bg-white rounded-none hover:bg-gray-200 font-normal text-black">
              2 Boxes
            </Button>
            <Button className=" uppercase bg-white rounded-none hover:bg-gray-200 font-normal text-black">
              3 Boxes
            </Button>
            <Button className=" uppercase bg-white rounded-none hover:bg-gray-200 font-normal text-black">
              4 Boxes
            </Button>
            <Button className=" uppercase bg-white rounded-none hover:bg-gray-200 font-normal text-black">
              5 Boxes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterColumn;
