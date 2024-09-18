"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";

const CartContainerTable = ({ fakeCartData }) => {
  const [buyingQuantities, setBuyingQuantities] = useState(
    fakeCartData.map(() => 1) // Default quantity is 1 for all products
  );

  const handleQuantityChange = (index, change) => {
    setBuyingQuantities((prevQuantities) =>
      prevQuantities.map((quantity, i) =>
        i === index ? Math.max(0, quantity + change) : quantity
      )
    );
  };

  return (
    <div>
      <div className="w-full overflow-x-auto">
        <table className="table-auto w-full min-w-[600px]">
          <thead>
            <tr className="border">
              <th className="text-left px-4 py-3">Product</th>
              <th className="text-left">Price</th>
              <th>Quantity</th>
              <th className="text-left">Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {fakeCartData.map((data, index) => (
              <tr className="border" key={index}>
                <td className="flex items-center gap-3 py-3 px-4">
                  <div>
                    <Avatar className="rounded">
                      <AvatarImage src={data?.avatar} />
                      <AvatarFallback>{data?.avatarFallback}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <h6 className="font-medium">{data?.title}</h6>
                    <p className="text-sm">Vendor: {data?.vendor}</p>
                  </div>
                </td>
                <td className="font-semibold">${data?.price}</td>
                <td className="text-center font-semibold">
                  <div className="inline-flex border">
                    <button
                      disabled={buyingQuantities[index] === 0}
                      className="px-3 py-1 rounded"
                      onClick={() => handleQuantityChange(index, -1)}
                    >
                      -
                    </button>
                    <p className="px-3 py-1">{buyingQuantities[index]}</p>
                    <button
                      className="px-3 py-1 rounded"
                      onClick={() => handleQuantityChange(index, 1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="font-semibold">${data?.total}</td>
                <td>
                  <Trash2 />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pt-10 flex flex-wrap gap-4 justify-center sm:justify-start ">
        <Link href={"/products"}>
          <Button className="flex gap-2 bg-secondary text-black hover:text-white  duration-300  md:text-base">
            <FaArrowLeftLong />
            Continue shopping
          </Button>
        </Link>
        <Link href={"/"}>
          <Button className="flex gap-2 bg-secondary text-black hover:text-white duration-300  md:text-base">
            <IoHomeOutline /> Back to home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CartContainerTable;
