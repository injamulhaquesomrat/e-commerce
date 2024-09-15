import Container from "@/components/global/Container";
import Footer from "@/components/global/footer/Footer";
import Navbar from "@/components/global/navbar/Navbar";
import CartContainer from "@/components/homepage/cart/CartContainer";
import React from "react";

const CartPage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <h6 className="text-3xl text-center py-4">Shopping Cart</h6>
        <CartContainer />
      </Container>
      <Footer />
    </>
  );
};

export default CartPage;
