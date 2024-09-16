import Container from "@/components/global/Container";
import SectionTitle from "@/components/global/SectionTitle";
import React from "react";
import FeaturedCarousel from "./FeaturedCarousel";

const FeatureBrandsContainer = () => {
  return (
    <Container>
      <SectionTitle>Featured Brands</SectionTitle>
      <FeaturedCarousel />
    </Container>
  );
};

export default FeatureBrandsContainer;
