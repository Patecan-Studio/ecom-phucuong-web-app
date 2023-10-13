"use client";

import React from "react";
import NextImage from "next/image";
import { ImageLoader } from "./types";

const CustomImage = (props: any) => {
  const imageLoader = ({ src, width, quality }: ImageLoader) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return <NextImage loader={imageLoader} {...props} />;
};

export default CustomImage;
