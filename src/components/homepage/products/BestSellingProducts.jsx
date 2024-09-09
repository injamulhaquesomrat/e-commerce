import React from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Container from "@/components/global/Container";
import { getAllProducts } from "@/actions/getAllProducts";

const BestSellingProducts = async () => {
  const allProducts = await getAllProducts();

  return (
    <Container className="my-10">
      <h2 className="pb-10 text-2xl uppercase text-center">
        Best Selling Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {allProducts.slice(0, 8).map((product) => (
          <div key={product.id} className="col-span-1">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="my-8 text-center">
        <Link href={"/products"}>
          <Button>See All</Button>
        </Link>
      </div>
    </Container>
  );
};

export default BestSellingProducts;
