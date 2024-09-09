"use client";
import React, { useEffect, useState } from "react";
import ProductSearch from "./ProductSearch";
import AllProducts from "./AllProducts";

const AllProductsContainer = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(event.target.productSearch.value);
    event.target.reset();
  };

  useEffect(() => {
    const allProducts = async () => {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${search}`
      );
      const data = await res.json();
      setProducts(data?.products);
    };
    allProducts();
  }, [search]);

  return (
    <div>
      <ProductSearch handleSubmit={handleSubmit} />
      <AllProducts allProducts={products} />
    </div>
  );
};

export default AllProductsContainer;
