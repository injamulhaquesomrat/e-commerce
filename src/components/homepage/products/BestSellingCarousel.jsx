"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import React from "react";
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
          padding: ".25rem",
          type: "loop",
          classes: {
            arrows:
              "splide__arrows your-class-arrows absolute -top-10 -right-2 w-28",
            arrow: "splide__arrow your-class-arrow ",
            page: "splide__pagination__page bg-gray-300 w-3 h-3 rounded-full mx-1",
          },
          autoplay: true,
          perMove: 1,
          mediaQuery: "min",
          breakpoints: {
            300: { perPage: 1, pagination: true, arrows: false },
            500: { perPage: 2, pagination: false },
            768: { perPage: 3 },
            1200: { perPage: 4 },
          },
        }}
      >
        <SplideTrack>
          {products.slice(0, 8).map((product, id) => (
            <SplideSlide className="pb-10" key={id}>
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
