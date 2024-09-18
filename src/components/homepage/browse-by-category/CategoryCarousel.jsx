"use client";
import { fakeCategoriesData } from "@/lib/fake-data";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const CategoryCarousel = () => {
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
            1200: { perPage: 5 },
            1400: { perPage: 6 },
          },
        }}
      >
        <SplideTrack>
          {fakeCategoriesData.map(({ id, title, icon: Icon }) => (
            <SplideSlide className="pb-10" key={id}>
              <Link href="#">
                <div className="min-h-40 flex flex-col items-center justify-center gap-4 duration-300 p-4 hover:shadow-xl bg-secondary rounded-md group">
                  <div>
                    <Icon className="w-10 h-10 mx-auto" />
                  </div>
                  <p className="text-center font-semibold group-hover:text-primary">
                    {title}
                  </p>
                </div>
              </Link>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </>
  );
};

export default CategoryCarousel;
