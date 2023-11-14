

export interface ProductVariant {
    sku: string
    color: any
    material: string
    price: number
    discount_price: number
    discount_percentage: number
    quantity: number
    image_list: any[]
    status?: any
}


export interface Product {
    _id: string;
    _uid: string;
    product_banner_image?: string;
    product_brand?: any
    product_weight?: any
    product_name: string;
    product_description?: string;
    product_slug?: string;
    product_categories?: any;
    product_height?: number;
    product_width?: number;
    product_length?: number;
    product_size_unit?: string;
    product_warranty?: string | null;
    product_isActive?: boolean | null;
    product_status?: string | null;
    current_variant: {
        _id: string | null;
        sku: string;
        color?: {
            label: string | null;
            value: string | null;
        } | null;
        material?: string | null;
        price: number;
        discount_price: number;
        discount_percentage?: number | null;
        quantity: number;
        image_list: {
            imageName: string | null;
            imageUrl: string | null;
            _id: string | null;
        }[] | null;
        status: string | null;
    };
    product_variants: {
        color: {
            label: string | null;
            value: string | null;
        } | null;
        sku: string | null;
        material: string | null;
        price: number | null;
        discount_price: number | null;
        discount_percentage: number | null;
        quantity: number | null;
        image_list: {
            imageName: string | null;
            imageUrl: string | null;
            _id: string | null;
        }[] | null;
        status: string | null;
        _id: string | null;
    }[] | null;
    createdAt: string | null;
    updatedAt: string | null;
}

export interface CartItem{
    product: Product;
    qty: number;
}
