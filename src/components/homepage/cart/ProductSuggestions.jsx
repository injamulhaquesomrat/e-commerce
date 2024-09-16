"use client";
import Container from "@/components/global/Container";
import React, { useEffect, useState } from "react";
import ProductCard from "../products/ProductCard";

const ProductSuggestions = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const allProducts = async () => {
      const res = await fetch(`https://dummyjson.com/products`);
      const data = await res.json();
      setProducts(data?.products);
    };
    allProducts();
  }, []);

  return (
    <div>
      <div className="my-10">
        <h6 className="text-2xl font-semibold mb-6">
          {" "}
          Customers who bought this item also bought
        </h6>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {products.slice(0, 6).map((product, id) => (
            <div key={id} className="col-span-1">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSuggestions;
