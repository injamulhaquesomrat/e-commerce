"use client";
import { dummyFeaturedBrands } from "@/lib/fake-data";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";
import React from "react";
import BrandCard from "./BrandCard";

const FeaturedCarousel = () => {
  return (
    <>
      <Splide
        hasTrack={false}
        aria-label="My Favorite Images"
        options={{
          width: "100%",
          gap: "1rem",
          padding: ".25rem",
          perMove: 1,
          classes: {
            arrows:
              "splide__arrows your-class-arrows absolute -top-10 -right-2 w-28",
            arrow: "splide__arrow your-class-arrow !rounded-none",
          },
          type: "slide",
          mediaQuery: "min",
          breakpoints: {
            300: { perPage: 2, arrows: false },
            560: { perPage: 3, arrows: false },
            768: { perPage: 4, pagination: false, arrows: true },
          },
        }}
      >
        <SplideTrack>
          {dummyFeaturedBrands.map((brand) => (
            <SplideSlide className="pb-10" key={brand?.id}>
              <BrandCard brand={brand} />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </>
  );
};

export default FeaturedCarousel;
