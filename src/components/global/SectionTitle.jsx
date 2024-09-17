import { cn } from "@/lib/utils";
import React from "react";

const SectionTitle = ({ children, className }) => {
  return (
    <h6 className={cn("text-2xl font-semibold mb-6", className)}>{children}</h6>
  );
};

export default SectionTitle;
