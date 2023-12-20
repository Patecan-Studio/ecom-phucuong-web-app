import React, { ReactNode } from "react";
import { CarouselSlide } from "./types";
import Link from "next/link";

const CarouselSlideMain = ({ slide }: CarouselSlide) => {
  return (
    <Link href={slide?.link || ""} className="carousel__slide">
      <div className="carousel__image">{slide?.image as ReactNode}</div>
    </Link>
  );
};

export default CarouselSlideMain;
