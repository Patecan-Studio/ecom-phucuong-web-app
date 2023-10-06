import React from "react";
import CarouselContent from "./CarouselContent";
import { EmblaOptionsType } from "embla-carousel-react";

const Carousel = () => {
  const carouselMainOption = {
    loop: true,
    align: "center",
    slidesToScroll: 1,
  } as EmblaOptionsType;

  const carouselSubOption = {
    loop: true,
    align: "center",
    slidesToScroll: 3,
  } as EmblaOptionsType;

  return (
    <div className="carousel-container">
      <CarouselContent className="carousel--main" option={carouselMainOption} />
      <CarouselContent className="carousel--sub" option={carouselSubOption} />
    </div>
  );
};

export default Carousel;
