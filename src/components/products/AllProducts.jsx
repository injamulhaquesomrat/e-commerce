import React from "react";
import ProductCard from "../homepage/products/ProductCard";
import Hero from "../homepage/hero/Hero";
import { cn } from "@/lib/utils";

const AllProducts = ({ allProducts, view }) => {
  return (
    <>
      <div
        className={cn(
          "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 flex-col gap-4 col-span-12 lg:col-span-8 xl:col-span-9",
          view === "grid" && "grid",
          view === "list" && "flex xl:grid"
        )}
      >
        {allProducts.map((product) => (
          <div
            key={product.id}
            className={cn(
              "col-span-1",
              view === "grid" && "col-span-1",
              view === "list" && "col-span-2"
            )}
          >
            <ProductCard product={product} view={view} />
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProducts;
