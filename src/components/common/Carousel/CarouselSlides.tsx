import React from "react";
import { CarouselSlidesProps } from "./types";
import CarouselSlideMain from "./CarouselSlideMain";
import CarouselSlideSub from "./CarouselSlideSub";

const CarouselSlides = ({ slides, isMainSlides }: CarouselSlidesProps) => {
  return (
    <div className="carousel__slides">
      {slides.map((slide) => {
        if (isMainSlides) {
          return <CarouselSlideMain slide={slide} key={slide.id} />;
        }

        return <CarouselSlideSub slide={slide} key={slide.id} />;
      })}
    </div>
  );
};

export default CarouselSlides;
