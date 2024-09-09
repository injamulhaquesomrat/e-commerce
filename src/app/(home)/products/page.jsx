import Container from "@/components/global/Container";
import Footer from "@/components/global/footer/Footer";
import Navbar from "@/components/global/navbar/Navbar";
import AllProductsContainer from "@/components/products/AllProductsContainer";
import React from "react";

const ProductsContainerPage = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <AllProductsContainer />
      </Container>
      <Footer />
    </div>
  );
};

export default ProductsContainerPage;
