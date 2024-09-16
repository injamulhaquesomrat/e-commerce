"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import ProductCard from "./ProductCard";

const BestSellingCarousel = ({ products }) => {
  return (
    <>
      <Splide
        hasTrack={false}
        aria-label="My Favorite Images"
        options={{
          width: "100%",
          gap: "1.5rem",
          pagination: false,
          padding: ".5rem",
          type: "loop",
          classes: {
            arrows:
              "splide__arrows your-class-arrows absolute -top-10 -right-2 w-28",
            arrow: "splide__arrow your-class-arrow !rounded-none",
          },
          autoplay: true,
          perMove: 1,
          mediaQuery: "min",
          breakpoints: {
            300: { perPage: 1, pagination: true },
            500: { perPage: 2, pagination: false },
            768: { perPage: 3 },
            1200: { perPage: 4 },
          },
        }}
      >
        <SplideTrack>
          {products.map((product, id) => (
            <SplideSlide key={id}>
              <div className="col-span-1">
                <ProductCard product={product} />
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </>
  );
};

export default BestSellingCarousel;
