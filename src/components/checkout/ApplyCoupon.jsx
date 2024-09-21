"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { CiGift } from "react-icons/ci";

const ApplyCoupon = () => {
  const [showCoupon, setShowCoupon] = useState(false);
  return (
    <div className="pb-10">
      <button
        onClick={() => setShowCoupon(!showCoupon)}
        className="text-primary"
      >
        You have a coupon code?
      </button>
      <div
        className={cn(
          "flex w-full items-center space-x-4 mt-3",
          !showCoupon && "hidden"
        )}
      >
        <Input type="text" placeholder="Enter coupon code..." />
        <Button className="text-base gap-2" type="submit">
          <CiGift size={20} />
          Apply
        </Button>
      </div>
    </div>
  );
};

export default ApplyCoupon;
