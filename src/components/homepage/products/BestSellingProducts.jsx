import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Container from "@/components/global/Container";
import { getAllProducts } from "@/actions/getAllProducts";
import BestSellingCarousel from "./BestSellingCarousel";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const BestSellingProducts = async () => {
  const allProducts = await getAllProducts();
  return (
    <Container className="my-10">
      <h6 className="text-2xl font-semibold mb-6"> Best Selling Products</h6>
      <BestSellingCarousel products={allProducts} />
      <div className="my-8 text-center">
        <Link href={"/products"}>
          <Button className="min-w-32 gap-3 group">
            See All
            <FaArrowRightLong className="group-hover:translate-x-2 duration-300" />
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default BestSellingProducts;
