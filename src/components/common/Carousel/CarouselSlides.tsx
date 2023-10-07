import React, { ReactNode } from "react";
import { CarouselSlidesProps } from "./types";

const CarouselSlides = ({ slides, isMainSlides }: CarouselSlidesProps) => {
  const renderSlides = () => {
    if (isMainSlides) {
      return slides.map((slide) => (
        <div className="carousel__slide" key={slide.id}>
          <div className="carousel__image">{slide?.image as ReactNode}</div>
        </div>
      ));
    }

    return slides.map((slide) => (
      <div className="carousel__slide">
        {slide?.icon || <></>}
        <div className="carousel__text">
          <h3>{slide?.title || ""}</h3>
          <p>{slide?.description || ""}</p>
        </div>
      </div>
    ));
  };

  return <div className="carousel__slides">{renderSlides()}</div>;
};

export default CarouselSlides;
