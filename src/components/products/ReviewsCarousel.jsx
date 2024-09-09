import React from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import ProductReviewCard from "./ProductReviewCard";

const ReviewsCarousel = ({ product }) => {
  return (
    <div>
      <Splide
        aria-label="My Favorite Images"
        options={{
          type: "loop",
          arrows: false,
          drag: "free",
          focus: "center",
          perPage: 4,
          pagination: false,
          gap: 24,
          breakpoints: {
            640: {
              perPage: 2,
            },
            768: {
              perPage: 4,
            },
            1024: {
              perPage: 5,
            },
            1280: {
              perPage: 6,
            },
          },
          autoScroll: {
            speed: 0.5,
          },
        }}
        extensions={{ AutoScroll }}
      >
        {product?.reviews?.map((review, index) => (
          <SplideSlide key={index}>
            <ProductReviewCard review={review} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ReviewsCarousel;
