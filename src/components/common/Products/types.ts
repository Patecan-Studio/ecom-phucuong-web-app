import EmblaViewportRefType from "embla-carousel-react";

export interface ProductsTitleProps {
  title: string;
}

export interface ProductsContentProps {
  products: Product[];
}

export interface ProductsSubContentProps {
  products: Product[];
  className: string;
  productsRef: <ViewportElement extends HTMLElement>(instance: ViewportElement | null) => void;
}

interface Product {
  id: number;
  product_name: string;
  product_price: number;
  product_images: string[];
  discount_ratio: number;
  discount_price: number;
  is_new: boolean;
  brand: Brand;
}

interface Brand {
  id: number;
  brand_name: string;
  brand_image: string;
}

export interface ProductProps {
  name: string;
  image: string;
  price: number;
  discountRatio: number;
  discountPrice: number;
  isNew: boolean;
  brandImage: string;
}

export interface ProductInfoProps {
  name: string;
  discountPrice: number;
  price: number;
}

export interface ProductImageProps {
  image: string;
  isNew: boolean;
  discountRatio: number;
}

export interface ProductStatusProps {
  discountRatio: number;
}

export interface ProductFurtherInfoProps {
  brandImage: string;
}

export interface ProductLogoProps {
  brandImage: string;
}
