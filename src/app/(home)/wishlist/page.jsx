import Container from "@/components/global/Container";
import FloatingDockContainer from "@/components/global/floating-dock/FloatingDockContainer";
import Footer from "@/components/global/footer/Footer";
import Navbar from "@/components/global/navbar/Navbar";
import WishlistContainer from "@/components/wishlist/WishlistContainer";
import React from "react";

const WishlistPage = () => {
  return (
    <>
      <Navbar />
      <FloatingDockContainer />
      <Container>
        <h6 className="text-3xl text-center py-10 font-bold">Wishlist</h6>
        <WishlistContainer />
      </Container>
      <Footer />
    </>
  );
};

export default WishlistPage;
