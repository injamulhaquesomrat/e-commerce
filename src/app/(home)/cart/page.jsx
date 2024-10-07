import Container from "@/components/global/Container";
import FloatingDockContainer from "@/components/global/floating-dock/FloatingDockContainer";
import Footer from "@/components/global/footer/Footer";
import Header from "@/components/global/navbar/Header";
import Navbar from "@/components/global/navbar/Navbar";
import CartContainer from "@/components/homepage/cart/CartContainer";
import React from "react";

const CartPage = () => {
  return (
    <>
      <Navbar />
      <FloatingDockContainer />
      <Container>
        <h6 className="text-3xl text-center py-10 font-bold">Shopping Cart</h6>
        <CartContainer />
      </Container>
      <Footer />
    </>
  );
};

export default CartPage;
