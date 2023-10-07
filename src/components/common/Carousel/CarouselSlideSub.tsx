import React from "react";
import { CarouselSlide } from "./types";

const CarouselSlideSub = ({ slide }: CarouselSlide) => {
  return (
    <div className="carousel__slide" key={slide.id}>
      <div className="carousel__image">{slide?.icon || <></>}</div>
      <div className="carousel__text">
        <h3>{slide?.title || ""}</h3>
        <p>{slide?.description || ""}</p>
      </div>
    </div>
  );
};

export default CarouselSlideSub;
