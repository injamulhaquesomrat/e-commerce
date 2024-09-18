import Image from "next/image";
import React from "react";

const ArticlesBanner = () => {
  return (
    <div className="w-full h-full">
      <Image
        className="w-full object-cover h-full rounded-md"
        src="https://placehold.co/500x500/png"
        alt="Articles banner"
        height={500}
        width={500}
      />
    </div>
  );
};

export default ArticlesBanner;
