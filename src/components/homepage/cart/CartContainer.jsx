import React from "react";
import CartContainerTable from "./CartContainerTable";
import CartTotalPrice from "./CartTotalPrice";
import { fakeCartData } from "@/lib/fake-data";
import ProductSuggestions from "./ProductSuggestions";

const CartContainer = () => {
  return (
    <div className="space-y-10">
      <CartContainerTable fakeCartData={fakeCartData} />
      <hr className="hidden md:block" />
      <CartTotalPrice />
      <ProductSuggestions />
    </div>
  );
};

export default CartContainer;
