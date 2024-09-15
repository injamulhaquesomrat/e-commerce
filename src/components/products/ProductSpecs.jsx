"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import StarRating from "../global/StarRating";

const ProductSpecs = ({ product }) => {
  const [buyingQuantity, setBuyingQuantity] = useState(1);
  return (
    <div>
      <h2 className="text-2xl font-medium">{product?.title}</h2>
      <div className="flex items-center gap-3">
        <small>Brand : {product?.brand}</small>
        <div>
          <StarRating defaultRating={product?.rating} />
        </div>
      </div>
      <hr />
      <h4 className="text-3xl text-primary font-bold">${product?.price}</h4>
      <p>{product?.description}</p>
      <h6 className="text-lg font-medium">Specifications</h6>
      <div className="flex flex-col lg:flex-row justify-between items-center">
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
        <div>
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
        <div className="flex border">
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
        <Button>Add to favourites</Button>
      </div>
    </div>
  );
};

export default ProductSpecs;
