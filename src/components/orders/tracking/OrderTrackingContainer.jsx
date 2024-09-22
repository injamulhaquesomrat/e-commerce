import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const OrderTrackingContainer = () => {
  return (
    <div className="w-full max-w-md mx-auto py-20">
      <p>Track your order</p>
      <form action="#" className="space-y-3 pt-3">
        <Input type="text" placeholder="Order ID" />
        <Input type="email" placeholder="Email Address" />
        <Button className="w-full">Find</Button>
      </form>
    </div>
  );
};

export default OrderTrackingContainer;
