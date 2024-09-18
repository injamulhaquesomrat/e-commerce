"use client";
import { fakeArticlesData } from "@/lib/fake-data";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import React from "react";
import ArticleCard from "./ArticleCard";

const ArticlesCarousel = () => {
  return (
    <div className="border rounded-md">
      <Splide
        hasTrack={false}
        aria-label="My Favorite Images"
        options={{
          width: "100%",
          padding: ".25rem",
          perMove: 1,
          classes: {
            arrows:
              "splide__arrows your-class-arrows absolute -top-10 -right-2 w-28",
            arrow: "splide__arrow your-class-arrow !rounded-none",
          },
          type: "slide",
          mediaQuery: "min",
          arrows: false,
          breakpoints: {
            300: { perPage: 1 },
            560: { pagination: false },
            992: { perPage: 2 },
          },
        }}
      >
        <SplideTrack>
          {fakeArticlesData.slice(0, 3).map((article) => (
            <SplideSlide className="pb-10 sm:pb-0" key={article?.id}>
              <ArticleCard article={article} />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
};

export default ArticlesCarousel;
