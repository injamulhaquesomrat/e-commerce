"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import StarRating from "../global/StarRating";
import { IoMdHeartEmpty } from "react-icons/io";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const ProductSpecs = ({ product }) => {
  const [buyingQuantity, setBuyingQuantity] = useState(1);
  return (
    <div>
      <h2 className="text-2xl font-medium pb-2">{product?.title}</h2>
      <div className="inline-flex items-center flex-wrap gap-3 w-fit">
        <small className="col-span-1">Brand : {product?.brand}</small>
        <StarRating defaultRating={product?.rating} />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="bg-transparent hover:bg-transparent text-gray-400 hover:text-primary text-xl">
              <IoMdHeartEmpty />
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Add to favourite</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <hr className="my-4" />
      <h4 className="text-3xl text-primary font-bold pb-3">
        ${product?.price}
      </h4>
      <p>{product?.description}</p>
      <h6 className="text-lg font-medium py-3">Product features</h6>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-5">
        <ul>
          <li>Category : {product?.category}</li>
          <li>Weight : {product?.weight}gm</li>
          <li>Stock left : {product?.stock}</li>
          <li>
            Dimensions : {product?.dimensions?.width} X{" "}
            {product?.dimensions?.height} X {product?.dimensions?.depth}
          </li>
          <li>Warranty : {product?.warrantyInformation}</li>
          <li>Shipping : {product?.shippingInformation}</li>
          <li>Return Policy : {product?.returnPolicy}</li>
          <li>Minimum Order Quantity : {product?.minimumOrderQuantity}</li>
          <li>Availability Status : {product?.availabilityStatus}</li>
          <li>SKU : {product?.sku}</li>
          <li>
            Tags :{" "}
            {product?.tags?.map((tag, idx) => (
              <span className="col-span-1" key={idx}>
                {tag}
                {idx < product.tags.length - 1 && ", "}
              </span>
            ))}
          </li>
        </ul>
        <div className="hidden md:block">
          <Image
            src={product?.meta?.qrCode}
            height={200}
            width={200}
            alt={product?.meta?.barcode}
          />
        </div>
      </div>
      <p>Qunatity</p>

      <div className="inline-flex gap-3 items-center">
        <div className="inline-flex border">
          <button
            disabled={buyingQuantity === 0}
            className="px-3 py-1 rounded"
            onClick={() => setBuyingQuantity((prev) => prev - 1)}
          >
            -
          </button>
          <p className="px-3 py-1">{buyingQuantity}</p>
          <button
            className="px-3 py-1 rounded"
            onClick={() => setBuyingQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <Button>Add to cart</Button>
        <Button>Buy Now</Button>
      </div>
    </div>
  );
};

export default ProductSpecs;
