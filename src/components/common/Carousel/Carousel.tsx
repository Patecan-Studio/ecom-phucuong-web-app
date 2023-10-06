"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./style.scss";
import CarouselMainSlides from "./CarouselMainSlides";
import CarouselButtons from "./CarouselButtons/CarouselButtons";

const Carousel = () => {
  const [carouselRef, carouselMethods] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay()]
  );

  const handlePrevClick = () => carouselMethods?.scrollPrev();
  const handleNextClick = () => carouselMethods?.scrollNext();

  return (
    <div className="carousel" ref={carouselRef}>
      <CarouselMainSlides />
      <CarouselButtons
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
      />
    </div>
  );
};

export default Carousel;
