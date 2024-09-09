import React from "react";
import ProductCard from "../homepage/products/ProductCard";

const AllProducts = ({ allProducts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {allProducts.map((product) => (
        <div key={product.id} className="col-span-1">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
