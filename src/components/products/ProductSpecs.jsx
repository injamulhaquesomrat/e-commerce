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
import Link from "next/link";
import { Badge } from "../ui/badge";

const ProductSpecs = ({ product }) => {
  const [buyingQuantity, setBuyingQuantity] = useState(1);
  return (
    <div className="flex flex-col md:flex-row items-start lg:items-center gap-8">
      {/* details */}
      <div className="md:basis-2/3">
        {/* product title , brand, rating, stock alert */}
        <div>
          <h2 className="text-xl pb-2">{product?.title} </h2>
          <div className="inline-flex items-center flex-wrap gap-3 w-fit">
            <small className="col-span-1">
              Brand :{" "}
              <Link className="text-primary" href="#">
                {product?.brand}
              </Link>
            </small>
            <StarRating defaultRating={product?.rating} />
            {product?.availabilityStatus.includes("Low") && (
              <Badge
                className={
                  "bg-red-500 hover:bg-red-500 text-white text-[.675rem] uppercase"
                }
              >
                {product?.availabilityStatus}
              </Badge>
            )}
          </div>
        </div>

        <hr className="my-4" />

        {/* Product main specification */}
        <div>
          <h4 className="text-3xl text-primary font-semibold pb-3">
            ${product?.price}
          </h4>
          <p className="">{product?.description}</p>
          <h6 className="text-lg font-medium py-3">Product features</h6>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-5">
            <ul className="list-disc pl-8 md:pl-10 space-y-1">
              <li>Weight : {product?.weight}Kg</li>
              <li>
                Dimensions : {product?.dimensions?.width} X{" "}
                {product?.dimensions?.height} X {product?.dimensions?.depth}
              </li>
              <li>{product?.shippingInformation} (maximum)</li>
              <li>{product?.returnPolicy}</li>
              <li>Minimum Order Quantity : {product?.minimumOrderQuantity}</li>
              <li>Availability Status : {product?.availabilityStatus}</li>
              <li>{product?.warrantyInformation}</li>
            </ul>
          </div>
          <div className="px-4 py-2 border rounded-md inline-flex border-primary/60 bg-primary/10 text-sm mb-4">
            Availability :
            <p className="text-primary font-medium pl-3">
              {product?.stock} products available
            </p>
          </div>
          <p className="pb-2">Qunatity</p>
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
          <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="bg-transparent hover:bg-transparent text-gray-400 hover:text-primary text-xl inline-flex pt-4 gap-3">
                  <IoMdHeartEmpty />
                  <span className="text-sm">Wishlist</span>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Add to wishlist</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <hr className="my-4" />

        {/* sku , categories and tags */}
        <ul className="space-y-2 text-gray-500">
          <li>SKU : {product?.sku}</li>
          <li>
            Categories :{" "}
            <Link className="text-primary" href="#">
              {product?.category}
            </Link>
          </li>
          <li>
            Tags :{" "}
            {product?.tags?.map((tag, idx) => (
              <span className="col-span-1" key={idx}>
                <Link className="text-primary" href={tag}>
                  {tag}
                </Link>
                {idx < product.tags.length - 1 && ", "}
              </span>
            ))}
          </li>
        </ul>
      </div>
      {/* hotline number and vendor invitation */}
      <div className="md:basis-1/3">
        <div className="hidden md:inline-block border">
          <Image
            src={product?.meta?.qrCode}
            height={200}
            width={200}
            alt={product?.meta?.barcode}
          />
        </div>
        <div className="py-8 space-y-2">
          <h4 className="text-lg font-medium">Hotline Order:</h4>
          <p className="pb-6">Mon - Fri: 07AM - 06PM</p>
          <a href="tel:01973745665" className="text-2xl font-bold">
            (+965) 7492-4277
          </a>
        </div>
        <div>
          Become a vendor?{" "}
          <Link className="text-primary font-semibold" href="#">
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecs;
