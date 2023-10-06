"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import "./style.scss";

const Carousel = () => {
  const [carouselRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="carousel__container">
        <div className="carousel__slide">Slide 1</div>
        <div className="carousel__slide">Slide 2</div>
        <div className="carousel__slide">Slide 3</div>
      </div>
    </div>
  );
};

export default Carousel;
