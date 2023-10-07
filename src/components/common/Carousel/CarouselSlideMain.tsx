import React, { ReactNode } from 'react'
import { CarouselSlide } from './types'

const CarouselSlideMain = ({slide}: CarouselSlide) => {
  return (
    <div className="carousel__slide">
          <div className="carousel__image">{slide?.image as ReactNode}</div>
        </div>
  )
}

export default CarouselSlideMain