import Image from "next/image";
import React from "react";

const BrandCard = ({ brand }) => {
  const { thumbnail, brandName, brandOffer } = brand;

  return (
    <div>
      <div className="min-h-40 flex flex-col gap-2 duration-300  rounded-md">
        <div className="rounded-md overflow-hidden">
          <Image src={thumbnail} alt={brandName} height={600} width={900} />
        </div>
        <h6 className="font-medium text-lg uppercase text-primary/80">
          {brandName}
        </h6>
        <p className="text-xl">{brandOffer}</p>
      </div>
    </div>
  );
};

export default BrandCard;
