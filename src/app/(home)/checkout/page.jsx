import OrderingProductsContainer from "@/components/checkout/OrderingProducts/OrderingProductsContainer";
import ShippingInformation from "@/components/checkout/ShippingInformation";
import Container from "@/components/global/Container";
import { Separator } from "@/components/ui/separator";
import React from "react";

const CheckoutPage = () => {
  return (
    <div className="overflow-auto">
      <Container
        className={"flex flex-col-reverse md:flex-row gap-x-6 xl:h-screen"}
      >
        <ShippingInformation />
        <Separator className="hidden xl:block" orientation="vertical" />
        <OrderingProductsContainer />
      </Container>
    </div>
  );
};

export default CheckoutPage;
