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
import FilterProducts from "./FilterProducts";
import FilterColumn from "./FilterColumn";

const AllProductsContainer = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [view, setView] = useState("grid");

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

  const handleView = (value) => {
    console.log(value);

    if (value === "grid") {
      setView("grid");
    }
    if (value === "list") {
      setView("list");
    }
  };

  return (
    <div className="mt-6">
      <FilterProducts
        handleSubmit={handleSubmit}
        handleView={handleView}
        view={view}
      />
      <div className="grid grid-cols-12 gap-6">
        <div className="hidden lg:block lg:col-span-4 xl:col-span-3">
          <FilterColumn />
        </div>
        <AllProducts allProducts={products} view={view} setView={setView} />
      </div>
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
