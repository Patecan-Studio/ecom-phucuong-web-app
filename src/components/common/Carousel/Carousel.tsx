import React from "react";
import CarouselContent from "./CarouselContent";
import { EmblaOptionsType } from "embla-carousel-react";
import MoneyHandIcon from "../Icons/MoneyHandIcon";
import CheckIcon from "../Icons/CheckIcon";
import TwentyFourHourIcon from "../Icons/TwentyFourHourIcon";
import PackageIcon from "../Icons/PackageIcon";
import NextImage from "next/image";

const Carousel = ({ data }: any) => {
  const carouselMainOption = {
    loop: true,
    align: "center",
    slidesToScroll: 1,
  } as EmblaOptionsType;

  const carouselSubOption = {
    loop: true,
    align: "center",
    slidesToScroll: 4,
    breakpoints: {
      "(max-width: 1439px)": {
        slidesToScroll: 3,
      },

      "(max-width: 1199px)": {
        slidesToScroll: 2,
      },

      "(max-width: 767px)": {
        slidesToScroll: 1,
      },
    },
  } as EmblaOptionsType;

  const mainSLides = data.map((item: any, index: number) => {
    return {
      id: item.image_url,
      image: (
        <NextImage
          src={item.image_url}
          alt={`main-slide-${index}`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      ),
    };
  });

  const subSlides = [
    {
      id: "1",
      title: "Mua hàng tiết kiệm",
      description: "Tiết kiệm lên đến 10 - 30% khi mua hàng",
      icon: <MoneyHandIcon />,
    },
    {
      id: "2",
      title: "Cam kết chính hãng",
      description: "Sản phẩm chính hãng và được bảo hành",
      icon: <CheckIcon />,
    },
    {
      id: "3",
      title: "Giao hàng 24h",
      description: "Giao hàng nhanh chóng chỉ trong 24h",
      icon: <TwentyFourHourIcon />,
    },
    {
      id: "4",
      title: "Đổi trả dễ dàng",
      description: "Đổi trả trong 2 ngày đầu tiên sau khi mua",
      icon: <PackageIcon />,
    },
  ];

  return (
    <div className="carousel-container">
      <CarouselContent
        className="carousel--main"
        option={carouselMainOption}
        slides={mainSLides}
      />
      <CarouselContent
        className="carousel--sub"
        option={carouselSubOption}
        slides={subSlides}
      />
    </div>
  );
};

export default Carousel;
