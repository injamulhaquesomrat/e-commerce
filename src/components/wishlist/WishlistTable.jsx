import { fakeWishlistData } from "@/lib/fake-data";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { FaCartPlus } from "react-icons/fa6";

const WishlistTable = () => {
  return (
    <div>
      <div className="w-full overflow-x-auto">
        <table className="table-auto w-full min-w-[600px]">
          <thead>
            <tr className="border">
              <th className="text-left px-4 py-3">Product</th>
              <th className="text-left">Unit Price</th>
              <th>Stock status</th>
              <th className="text-left"></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {fakeWishlistData.map((data) => (
              <tr className="border" key={data.id}>
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
                  {data.stock_status}
                </td>
                <td className="font-semibold">
                  <Button className="gap-2">
                    <FaCartPlus />
                    Add to cart{" "}
                  </Button>
                </td>
                <td>
                  <Trash2 />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WishlistTable;
