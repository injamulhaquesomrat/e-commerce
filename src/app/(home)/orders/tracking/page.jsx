import Container from "@/components/global/Container";
import Footer from "@/components/global/footer/Footer";
import Navbar from "@/components/global/navbar/Navbar";
import OrderTrackingContainer from "@/components/orders/tracking/OrderTrackingContainer";
import React from "react";

const OrderTrackingPage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <h6 className="text-3xl text-center py-10 font-bold">Order tracking</h6>
        <OrderTrackingContainer />
      </Container>
      <Footer />
    </>
  );
};

export default OrderTrackingPage;
