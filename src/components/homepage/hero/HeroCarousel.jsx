"use client";

import React from "react";
import Image from "next/image";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const HeroCarousel = () => {
  return (
    <div className="rounded-md overflow-hidden col-span-12 md:col-span-8">
      <Splide
        aria-label="My Favorite Images"
        options={{
          width: "100%",
          gap: "1rem",
          classes: {
            arrows:
              "splide__arrows your-class-arrows absolute bottom-8 right-2 w-28",
            arrow: "splide__arrow your-class-arrow !rounded-none",
          },
          arrows: true,
          pagination: false,
          autoplay: true,
          speed: 1500,
          type: "fade",
          rewind: true,
        }}
      >
        <SplideSlide>
          <div>
            <Image
              className="w-full h-auto object-cover aspect-video lg:aspect-[1600/800]"
              src="/images/hero/hero-one.png"
              alt="Image 1"
              height={1440}
              width={2560}
              priority
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <Image
              className="w-full h-auto object-cover aspect-video lg:aspect-[1600/800]"
              src="/images/hero/hero-two.png"
              alt="Image 2"
              height={1440}
              width={2560}
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <Image
              className="w-full h-auto object-cover aspect-video lg:aspect-[1600/800]"
              src="/images/hero/hero-three.png"
              alt="Image 3"
              height={1440}
              width={2560}
            />
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default HeroCarousel;
