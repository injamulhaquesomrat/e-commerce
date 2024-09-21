import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { CiBank } from "react-icons/ci";
import { GiCash } from "react-icons/gi";
import { MdOutlineBookOnline } from "react-icons/md";

const dummyPaymentData = [
  {
    id: "1",
    value: "cod",
    name: "COD",
    content: "Cash on delivery",
    icon: GiCash,
  },
  {
    id: "2",
    value: "bank",
    name: "Bank",
    content: "Bank Details",
    icon: CiBank,
  },
  {
    id: "3",
    value: "mfs",
    name: "MFS",
    content: "Mobile Financial Services",
    icon: MdOutlineBookOnline,
  },
];

const PaymentMethod = () => {
  return (
    <div className="border p-4 rounded-md">
      <h2 className="text-2xl pb-4">Payment Method</h2>
      <Tabs defaultValue={dummyPaymentData[0].value}>
        <TabsList className="gap-4 h-fit">
          {dummyPaymentData.map((item) => (
            <TabsTrigger
              className="border rounded flex flex-col justify-center"
              key={item.id}
              value={item.value}
            >
              {item.name}
              {<item.icon size={24} />}
            </TabsTrigger>
          ))}
        </TabsList>
        {dummyPaymentData.map((item) => (
          <TabsContent key={item.id} value={item.value}>
            {item.content}
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
            debitis voluptatibus deserunt quibusdam nulla. Laboriosam totam quae
            impedit modi rem.
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default PaymentMethod;
