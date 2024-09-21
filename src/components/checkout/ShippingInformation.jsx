import React from "react";
import ShippingForm from "./ShippingForm";
import PaymentMethod from "./PaymentMethod";
import AdditionalNotes from "./AdditionalNotes";
import Link from "next/link";
import { Button } from "../ui/button";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Separator } from "../ui/separator";

const ShippingInformation = () => {
  return (
    <div className="basis-1/2 lg:basis-3/5 py-8 space-y-6">
      <div className="flex-shrink-0 text-xl uppercase font-semibold hidden md:block">
        <Link href={"/"}>Tukitaki Bazar</Link>
        <Separator className="my-8" />
      </div>
      <ShippingForm />
      <PaymentMethod />
      <AdditionalNotes />
      <div className="flex flex-wrap justify-between ">
        <Link href={"/cart"}>
          <Button className="flex gap-2 bg-transparent hover:bg-secondary text-black dark:text-white duration-300  md:text-base">
            <FaArrowLeftLong />
            Back to cart
          </Button>
        </Link>
        <Link href={"/"}>
          <Button className="flex gap-2   md:text-base">Checkout</Button>
        </Link>
      </div>
    </div>
  );
};

export default ShippingInformation;
