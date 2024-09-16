import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const CartTotalPrice = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between gap-8">
      <div className="md:basis-5/12 lg:basis-4/12">
        <h6 className="text-2xl mb-4">Using A Promo?</h6>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="text" placeholder="Enter coupon code" />
          <Button type="submit">Apply</Button>
        </div>
      </div>
      <div className="md:basis-6/12 lg:basis-4/12">
        <h6 className="mb-4 text-2xl font-medium">Cart Totals</h6>
        <div className="flex justify-between items-center">
          <b>Subtotal:</b>
          <p>$1340.60</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between items-center">
          <b>Tax:</b>
          <p>$134.06</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between items-center">
          <b>Total:</b>
          <p>$1474.66</p>
        </div>
        <div>
          <Button className="w-full mt-10">Proceed to checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default CartTotalPrice;
