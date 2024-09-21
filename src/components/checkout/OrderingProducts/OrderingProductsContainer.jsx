import React from "react";
import OrderingProduct from "./OrderingProduct";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
const dummyOrderingProducts = [
  {
    id: "1",
    shop: "Tech World",
    shop_img: "https://placehold.co/100x100", // Shop image placeholder
    product_img: "https://placehold.co/200x200", // Product image placeholder
    product_name: "Wireless Headphones",
    quantity: 2,
    price: 150,
    shipping_method: "Standard Shipping",
    shipping_price: 10,
  },
  {
    id: "2",
    shop: "Gadget Hub",
    shop_img: "https://placehold.co/100x100",
    product_img: "https://placehold.co/200x200",
    product_name: "Smartwatch",
    quantity: 1,
    price: 200,
    shipping_method: "Express Shipping",
    shipping_price: 20,
  },
  {
    id: "3",
    shop: "Home Essentials",
    shop_img: "https://placehold.co/100x100",
    product_img: "https://placehold.co/200x200",
    product_name: "Vacuum Cleaner",
    quantity: 1,
    price: 300,
    shipping_method: "Free Shipping",
    shipping_price: 0,
  },
];

const OrderingProductsContainer = () => {
  return (
    <div className="basis-1/2 lg:basis-2/5 py-8">
      {" "}
      <div className="flex-shrink-0 text-xl uppercase font-semibold md:hidden">
        <Link href={"/"}>Tukitaki Bazar</Link>
        <Separator className="my-6" />
      </div>
      <p className="pb-6"> Product(s) :</p>
      <div className="space-y-8">
        {dummyOrderingProducts.map((item) => (
          <OrderingProduct key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default OrderingProductsContainer;
