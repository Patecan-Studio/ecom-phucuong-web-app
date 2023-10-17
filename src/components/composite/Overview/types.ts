export interface OverviewProps {
  data: Product;
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
  sku: string;
  price: number;
  discountPercentage: number;
  discountPrice: number;
  quantity: number;
  image: {
    imageName: string;
    imageUrl: string;
  }
}

interface ProductBrand {
  _id: string;
  brand_name: string;
  image_list: ProductImage[];
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
