// import { Separator } from "@/components/ui/separator";
// import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import React from "react";

const OrderingProduct = ({ product }) => {
  const {
    shop_img,
    shop,
    product_img,
    product_name,
    quantity,
    price,
    shipping_method,
    shipping_price,
  } = product;

  let tax = price * 0.1;
  let totalPrice = price + tax + shipping_price;
  return (
    <div>
      {/* {product.product_name} */}
      <div className="bg-primary-foreground flex items-center gap-2 p-2 text-sm">
        <Image
          className="rounded"
          src={`${shop_img}/png`}
          alt={shop}
          height={40}
          width={40}
        />
        {shop}
      </div>
      <div className="py-8 px-4">
        <div className="flex gap-4 text-sm">
          <div className="relative inline-flex">
            <Image
              className="rounded-md p-1 border"
              src={`${product_img}/png`}
              alt={product_name}
              height={70}
              width={70}
            />
            <span className="bg-secondary h-6 w-6 flex items-center justify-center rounded-full text-sm absolute -top-2 -right-2">
              {quantity}
            </span>
          </div>
          <p>{product_name}</p>
          <p className="ml-auto">${price}</p>
        </div>
        <div className="pt-6">
          <p className="font-semibold pb-4">Shipping method :</p>
          <div className="px-4 py-2 rounded-md border flex items-center">
            {/* <Checkbox id="terms" /> */}
            {shipping_method}{" "}
            <p className="font-semibold">
              {shipping_price < 1 && "- Free Shipping"}
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="p-4">
        <ul className="space-y-2">
          <li className="flex justify-between items-center">
            Subtotal:{" "}
            <p>
              $<span className="font-bold">{price}</span>
            </p>
          </li>
          <li className="flex justify-between items-center">
            Tax:{" "}
            <p>
              $<span className="font-bold">{tax}</span>
            </p>
          </li>
          <li className="flex justify-between items-center">
            Shipping fee:{" "}
            <p>
              $<span className="font-bold">{shipping_price}</span>
            </p>
          </li>
          <li className="flex justify-between items-center">
            Total:{" "}
            <p>
              $<span className="text-2xl font-bold">{totalPrice}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrderingProduct;
