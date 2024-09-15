"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import React, { useState } from "react";

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
              {/* <th></th> */}
              <th className="text-left p-2">Product</th>
              <th className="text-left">Price</th>
              <th>Quantity</th>
              <th className="text-left">Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {fakeCartData.map((data, index) => (
              <tr className="border" key={index}>
                <td className="flex items-center gap-3  p-2">
                  <div>
                    <Avatar className="rounded">
                      <AvatarImage src={data?.avatar} />
                      <AvatarFallback>{data?.avatarFallback}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <h6>{data?.title}</h6>
                    <p>Vendor: {data?.vendor}</p>
                  </div>
                </td>
                <td>${data?.price}</td>
                <td className="text-center">
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
                <td>${data?.total}</td>
                <td>
                  <Trash2 />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 space-x-4">
        <Button>Continue shopping</Button>
        <Button>Back to home</Button>
      </div>
    </div>
  );
};

export default CartContainerTable;
