import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const ShippingForm = () => {
  return (
    <form
      className="
    space-y-3"
    >
      <div>
        <Label>Full Name</Label>
        <Input className="mt-2" type="text" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
        <div className="col-span-1 lg:col-span-3">
          <Label>Email</Label>
          <Input className="mt-2" type="email" />
        </div>
        <div className="col-span-1 lg:col-span-2">
          <Label>Phone</Label>
          <Input className="mt-2" type="number" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="col-span-1">
          <Label>State</Label>
          <Input className="mt-2" type="text" />
        </div>
        <div className="col-span-1">
          <Label>City</Label>
          <Input className="mt-2" type="text" />
        </div>
      </div>
      <div>
        <Label>Address</Label>
        <Input className="mt-2" type="text" />
      </div>
    </form>
  );
};

export default ShippingForm;
