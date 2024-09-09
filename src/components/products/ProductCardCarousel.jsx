"use client";

import React from "react";
import Image from "next/image";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const ProductCardCarousel = ({ productImages }) => {
  return (
    <>
      <Splide
        aria-label="My Favorite Images"
        options={{
          width: "100%",
          gap: "1rem",
          arrows: false,
          autoplay: true,
          speed: 1500,
          type: "fade",
          rewind: true,
        }}
      >
        {productImages?.map((productImage, index) => (
          <SplideSlide key={index}>
            <div>
              <Image
                className="w-full h-auto object-cover aspect-square"
                src={productImage}
                alt={productImage}
                height={594}
                width={594}
                priority
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default ProductCardCarousel;
