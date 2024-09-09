import Footer from "@/components/global/footer/Footer";
import Navbar from "@/components/global/navbar/Navbar";
import Hero from "@/components/homepage/hero/Hero";
import BestSellingProducts from "@/components/homepage/products/BestSellingProducts";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <BestSellingProducts />
      <Footer />
    </div>
  );
};

export default HomePage;
