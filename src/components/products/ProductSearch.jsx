import { Button } from "@/components/ui/button";
import React from "react";

const ProductSearch = ({ handleSubmit, handleInput }) => {
  return (
    <div className="pb-6">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center gap-4">
          <input
            className="p-2 border rounded w-full max-w-[512px]"
            type="text"
            placeholder="Search Product"
            name="productSearch"
          />
          <Button className="min-w-24" type="submit">
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProductSearch;
