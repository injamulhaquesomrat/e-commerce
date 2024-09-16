import React from "react";
import { ClipLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <ClipLoader loading={true} speedMultiplier={1} color="#16a34a" />
    </div>
  );
};

export default loading;
