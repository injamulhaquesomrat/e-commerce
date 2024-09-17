import Footer from "@/components/global/footer/Footer";
import Header from "@/components/global/navbar/Header";
import Navbar from "@/components/global/navbar/Navbar";
import ArticlesContainer from "@/components/homepage/articles/ArticlesContainer";
import BannersContainer from "@/components/homepage/banners/BannersContainer";
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
      <BrowseByCategory />
      <BestSellingProducts />
      <FeatureBrandsContainer />
      <BestSellingProducts />
      <BannersContainer />
      <BestSellingProducts />
      <ArticlesContainer />
      <Footer />
    </div>
  );
};

export default HomePage;
