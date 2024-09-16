import React from "react";
import HeroCarousel from "./HeroCarousel";
import Container from "@/components/global/Container";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-green-100/30 backdrop-blur-md py-12">
      <Container className="grid grid-cols-12 gap-4 md:gap-6">
        <HeroCarousel />
        <div className="rounded-md col-span-12 md:col-span-4 overflow-hidden">
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
