import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const CartTotalPrice = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between gap-8">
      <div className="md:basis-5/12 lg:basis-4/12">
        <h6 className="text-2xl font-semibold mb-6">Using A Promo Code?</h6>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            className="rounded"
            type="text"
            placeholder="Enter coupon code"
          />
          <Button className="rounded md:text-base" type="submit">
            Apply
          </Button>
        </div>
      </div>

      <div className="md:basis-6/12 lg:basis-4/12">
        <h6 className="mb-4 text-xl font-semibold">Cart Totals</h6>
        <div className="flex justify-between items-center font-medium">
          <p>Subtotal:</p>
          <p>$1340.60</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between items-center font-medium">
          <p>Tax:</p>
          <p>$134.06</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between items-center font-medium">
          <p>Total:</p>
          <p>$1474.66</p>
        </div>
        <div>
          <Link href={"/checkout"}>
            <Button className="w-full mt-10 rounded  md:text-base">
              Proceed to checkout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartTotalPrice;
