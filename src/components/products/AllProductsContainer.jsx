"use client";
import React, { useEffect, useState } from "react";
import ProductSearch from "./ProductSearch";
import AllProducts from "./AllProducts";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

const AllProductsContainer = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(event.target.productSearch.value);
    event.target.reset();
  };

  return (
    <div className="mt-6">
      <ProductSearch handleSubmit={handleSubmit} />
      <AllProducts allProducts={products} />
      <div className="mt-10">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default AllProductsContainer;
