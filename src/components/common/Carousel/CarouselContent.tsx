"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./style.scss";
import CarouselSlides from "./CarouselSlides";
import CarouselButtons from "./CarouselButtons/CarouselButtons";
import { CarouselContentProps } from "./types";

const CarouselContent = ({
  className,
  option,
  slides,
}: CarouselContentProps) => {
  const [carouselRef, carouselMethods] = useEmblaCarousel(option, [Autoplay()]);

  const handlePrevClick = () => carouselMethods?.scrollPrev();
  const handleNextClick = () => carouselMethods?.scrollNext();

  return (
    <div className={`carousel ${className}`} ref={carouselRef}>
      <CarouselSlides
        slides={slides}
        isMainSlides={className.includes("main")}
      />
      <CarouselButtons
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
      />
    </div>
  );
};

export default CarouselContent;
