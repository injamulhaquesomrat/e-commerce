"use client";
import Container from "@/components/global/Container";
import Footer from "@/components/global/footer/Footer";
import Navbar from "@/components/global/navbar/Navbar";
import ProductCardCarousel from "@/components/products/ProductCardCarousel";
import ProductSpecs from "@/components/products/ProductSpecs";
import ReviewsCarousel from "@/components/products/ReviewsCarousel";
import React, { useEffect, useState } from "react";

const ProductDetailsPage = ({ params }) => {
  const [product, setProduct] = useState();

  useEffect(() => {
    const singleProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${params.id}`);
      const data = await res.json();
      setProduct(data);
    };
    singleProduct();
  }, [params.id]);

  return (
    <div>
      <Navbar />
      <Container>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="basis-1/3 p-4 ">
            <ProductCardCarousel productImages={product?.images} />
          </div>
          <div className="basis-2/3">
            <ProductSpecs product={product} />
          </div>
        </div>
      </Container>
      <ReviewsCarousel product={product} />
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
