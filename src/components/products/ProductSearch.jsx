import { Button } from "@/components/ui/button";
import React from "react";

const ProductSearch = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center rounded-md overflow-hidden">
          <input
            className="p-2 w-full max-w-[512px] focus-visible:outline-0 border"
            type="text"
            placeholder="Search Product"
            name="productSearch"
          />
          <Button className="min-w-24 rounded-none" type="submit">
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProductSearch;
