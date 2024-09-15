import React from "react";
import CartContainerTable from "./CartContainerTable";
import CartTotalPrice from "./CartTotalPrice";
import { fakeCartData } from "@/lib/fake-data";

const CartContainer = () => {
  return (
    <div>
      <CartContainerTable fakeCartData={fakeCartData} />
      <hr className="my-10" />
      <CartTotalPrice />
    </div>
  );
};

export default CartContainer;
