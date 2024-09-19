"use client";

import React, { useRef } from "react";
import Image from "next/image";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const ProductCardCarousel = ({ productImages }) => {
  const mainCarouselRef = useRef(null);
  const thumbnailCarouselRef = useRef(null);

  return (
    <div className="flex flex-col md:flex-row-reverse gap-3">
      {/* Main carousel  */}
      <Splide
        ref={mainCarouselRef}
        aria-label="My Favorite Images"
        options={{
          width: "100%",
          gap: "1rem",
          arrows: false,
          pagination: false,
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
                height={900}
                width={900}
                priority
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {/* Thumbnail Carousel */}
      <Splide
        // className="flex flex-col"
        ref={thumbnailCarouselRef}
        options={{
          fixedWidth: 100,
          fixedHeight: 100,
          isNavigation: true, // Enable this as navigation
          gap: "1rem",
          focus: "center",
          pagination: false,
          focus: "center",
          cover: true,
          rewind: true,
          arrows: false,
          mediaQuery: "min",
          breakpoints: {
            768: {
              height: "fit-content",
              fixedWidth: 60,
              fixedHeight: 60,
              direction: "ttb",
            },
          },
        }}
        sync={mainCarouselRef}
        className="mt-4"
      >
        {productImages?.map((productImage, index) => (
          <SplideSlide key={index}>
            <Image
              className="w-full h-full object-cover"
              src={productImage}
              alt={`Thumbnail image ${index + 1}`}
              height={100}
              width={100}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ProductCardCarousel;
