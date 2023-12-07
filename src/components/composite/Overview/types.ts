export interface SaleBannerProps {
  data: string;
}

export interface OverviewProps {
  data: Product;
}

export interface OverviewImageProps {
  overviewData: Product;
}

export interface OverviewMainImagesProps extends OverviewProps {
  onOpenModal: () => void;
}
export interface OverviewModalProps extends OverviewProps {
  onClose: () => void;
  onClickPrev: () => void;
  onClickNext: () => void;
}

export interface OverviewSubImagesProps {
  data: Product;
  isActiveItem: (index: number) => string;
  onClick: (index: number) => void;
}

interface Product {
  createdAt: string;
  updatedAt: string;
  resultCode: string;
  resultMessage: string;
  _id: string;

  product_name: string;
  product_description: string;
  product_brand: ProductBrand;
  product_type: string;
  product_categories: ProductCategories[];
  product_materials: string[];
  product_colors: string[];
  product_banner_image: string;
  product_images: string[];
  product_slug: string;
  product_variants: ProductVariant[];
  product_code: string;
  price: number;
  product_discountPercentage: number;
  product_discountPrice: number;
  product_quantity: number;
  product_isActive: boolean;
  product_height: string;
  product_length: string;
  product_width: string;
  product_weight: {
    value: string;
    unit: string[];
  };
  product_size_unit: string[];
  product_material: string[];
  product_status: string;

  image: {
    imageName: string;
    imageUrl: string;
  };
  product_warranty: string;
}

interface ProductBrand {
  _id: string;
  brand_name: string;
  brand_logoUrl: string;
}

interface ProductImage {
  imageName: string;
  imageUrl: string;
  _id: string;
}

interface ProductCategories {
  _id: string;
  category_name: string;
  category_logoUrl: string;
}

interface ProductVariant {
  _id: string;
  sku: string;
  color: string;
  material: string;
  measurement: string;
  price: number;
  quantity: number;
  discount_price: number;
  discount_percentage: number;
  metadata: {
    color: ProductColor;
    material: string;
    measurement: {
      width: number;
      height: number;
      length: number;
      weight: number;
      sizeUnit: string;
      weightUnit: string;
    };
  },
  image_list: ProductImage[];
}

export interface ProductColor {
  value: string;
  label: string;
}

export interface OverviewInfoProps {
  name: string;
  price: number;
  discountPrice: number;
  discountPercentage: number;
  productCode: string;
  brandImage?: string;
  brandName?: string;
  quantity: number;
  categories: ProductCategories[];
  warranty: string;
}

export interface OverviewQuantityProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  isDisabled: boolean;
}

export interface OverviewAboutProps {
  materials: string[];
  colors: ProductColor[];
  measurements: string[];
  onResetVariant: () => void;
  onMaterialSelect: (material: string) => void;
  onColorSelect: (color: string) => void;
  onMeasurementSelect: (measurement: string) => void;
  selectedMaterial: string;
  selectedColor: string;
  selectedMeasurement: string;
  dictionary: {
    [key: string]: string[];
  };
}
