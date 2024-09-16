import React from "react";
import HeroCarousel from "./HeroCarousel";
import Container from "@/components/global/Container";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="backdrop-blur-md relative overflow-hidden">
      <Image
        className="absolute object-cover aspect-video top-0 left-0"
        src={
          "https://www.ecommerce03.lumensofttech.com/storage/general/slider-bg.jpg"
        }
        alt="hero banner bg"
        height={1440}
        width={2560}
      />
      <Container className="grid grid-cols-12 gap-4 md:gap-6 py-12">
        <HeroCarousel />
        <div className="rounded-md col-span-12 md:col-span-4 overflow-hidden z-20">
          <Image
            className="h-full w-full"
            src={"https://placehold.co/900X500/png"}
            alt="hero-banner"
            height={500}
            width={900}
          />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
