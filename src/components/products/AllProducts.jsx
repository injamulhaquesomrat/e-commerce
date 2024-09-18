import React from "react";
import ProductCard from "../homepage/products/ProductCard";
import Hero from "../homepage/hero/Hero";
import { cn } from "@/lib/utils";

const AllProducts = ({ allProducts, view }) => {
  return (
    <>
      <div
        className={cn(
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 flex-col gap-4 col-span-9",
          view === "grid" && "grid",
          view === "list" && "flex"
        )}
      >
        {allProducts.map((product) => (
          <div key={product.id} className="col-span-1">
            <ProductCard product={product} view={view} />
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProducts;
