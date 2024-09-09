import { cn } from "@/lib/utils";
import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={cn("mx-auto max-w-[1390px] px-4", className)}>
      {children}
    </div>
  );
};

export default Container;
