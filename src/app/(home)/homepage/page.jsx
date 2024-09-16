import Footer from "@/components/global/footer/Footer";
import Navbar from "@/components/global/navbar/Navbar";
import BrowseByCategory from "@/components/homepage/browse-by-category/BrowseByCategory";
import Hero from "@/components/homepage/hero/Hero";
import BestSellingProducts from "@/components/homepage/products/BestSellingProducts";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <BestSellingProducts />
      <BrowseByCategory />
      <Footer />
    </div>
  );
};

export default HomePage;
