import Container from "@/components/global/Container";
import React from "react";
import CategoryCarousel from "./CategoryCarousel";

const BrowseByCategory = () => {
  return (
    <Container>
      <h6 className="text-2xl font-semibold my-4 md:my-6">
        Browse by Category
      </h6>
      <CategoryCarousel />
    </Container>
  );
};

export default BrowseByCategory;
