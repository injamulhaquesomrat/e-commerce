import Footer from "@/components/global/footer/Footer";
import Header from "@/components/global/navbar/Header";
import Navbar from "@/components/global/navbar/Navbar";
import BrowseByCategory from "@/components/homepage/browse-by-category/BrowseByCategory";
import FeatureBrandsContainer from "@/components/homepage/featured-brands/FeatureBrandsContainer";
import Hero from "@/components/homepage/hero/Hero";
import BestSellingProducts from "@/components/homepage/products/BestSellingProducts";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <BestSellingProducts />
      <BrowseByCategory />
      <BestSellingProducts />
      <FeatureBrandsContainer />
      <BestSellingProducts />
      <Footer />
    </div>
  );
};

export default HomePage;
