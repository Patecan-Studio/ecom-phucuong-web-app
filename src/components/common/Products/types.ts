import EmblaViewportRefType from "embla-carousel-react";

export interface ProductsTitleProps {
  title: string;
}

export interface ProductsContentProps {
  products: Product[];
  productsTitle: string;
  totalPage: number;
}

export interface ProductsSubContentProps {
  products: Product[];
  productsRef: <ViewportElement extends HTMLElement>(
    instance: ViewportElement | null
  ) => void;
}

export interface Product {
  id: number;
  product_name: string;
  price: number;
  product_images: string[];
  discount_percentage: number;
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
  discountPercentage: number;
  discountPrice: number;
  isNew: boolean;
  brandImage: string;
  productSlug: string;
}

export interface ProductInfoProps {
  name: string;
  discountPrice: number;
  price: number;
}

export interface ProductImageProps {
  image: string;
  isNew: boolean;
  discountPercentage: number;
  productSlug: string;
}

export interface ProductStatusProps {
  discountPercentage: number;
  isNew: boolean;
}

export interface ProductFurtherInfoProps {
  brandImage: string;
}

export interface ProductLogoProps {
  brandImage: string;
}

export interface ProductsButtonsProps {
  onPrevClick: () => void;
  onNextClick: () => void;
}

export interface ProductsButtonProps {
  onClick: () => void;
}

export interface ProductsProps {
  categoryName: string;
}
