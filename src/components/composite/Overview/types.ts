export interface OverviewProps {
  data: Product;
}

export interface OverviewMainImagesProps extends OverviewProps {
  onOpenModal: () => void;
}
export interface OverviewModalProps extends OverviewProps {
  onClose: () => void;
}

export interface OverviewSubImagesProps {
  data: Product;
  isActiveItem: (index: number) => string;
  onClick: (index: number) => void;
}

interface Product {
  resultCode: string;
  resultMessage: string;
  _id: string;
  product_name: string;
  product_description: string;
  product_type: string;
  product_brand: ProductBrand;
  product_categories: ProductCategories;
  product_materials: string[];
  product_colors: string[];
  product_banner_image: string;
  product_images: string[];
  product_slug: string;
  product_variants: ProductVariant[];
  product_code: string;
  product_price: number;
  product_discountPercentage: number;
  product_discountPrice: number;
  product_quantity: number;
  image: {
    imageName: string;
    imageUrl: string;
  };
}

interface ProductBrand {
  _id: string;
  brand_name: string;
  brand_logoUrl: string;
}

interface ProductImage {
  imageName: string;
  imageUrl: string;
}

interface ProductCategories extends ProductBrand {}

interface ProductVariant {
  variant_sku: string;
  variant_color: ProductColor;
  variant_material: string;
  variant_price: number;
}

interface ProductColor {
  value: string;
  label: string;
}

export interface OverviewInfoProps {
  name: string;
  price: number;
  discountPrice: number;
  discountPercentage: number;
  productCode: string;
  brand: string;
}

export interface OverviewPolicyProps {
  className: string;
}
