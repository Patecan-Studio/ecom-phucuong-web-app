"use client";
import React, {useRef} from 'react';
import ProductsTitle from "@/components/common/Products/ProductsTitle";
import ProductsButtons from "@/components/common/Products/ProductsButtons/ProductsButtons";
import CategoryCard from "@/components/common/CategorySlider/CategoryCard";


const CategorySlider: React.FC = () => {
    const categories = [
        {
            label: "Giường",
            imageUrl: "https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/static/category-images/giuong.jpeg",
            path: "/",
        },
        {
            label: "Sofa",
            imageUrl: "https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/static/category-images/sofa.png",
            path: "/",
        },
        {
            label: "Phụ kiện cho bé",
            imageUrl: "https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/static/category-images/phu_kien_cho_be.jpeg",
            path: "/",
        },
        {
            label: "Nệm",
            imageUrl: "https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/static/category-images/nem.jpeg",
            path: "/",
        },
        {
            label: "Nội thất phòng khách",
            imageUrl: "https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/static/category-images/noi_that_phong_khach.png",
            path: "/",
        },
        {
            label: "Ghế bành",
            imageUrl: "https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/static/category-images/ghe_banh.png",
            path: "/",
        },
        {
            label: "Tranh treo tường",
            imageUrl: "https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/static/category-images/tranh_khung_anh.jpeg",
            path: "/",
        },
        {
            label: "Tủ quần áo",
            imageUrl: "https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/static/category-images/tu_quan_ao.jpeg",
            path: "/",
        },

        ]




    const sliderRef = useRef<HTMLDivElement | null>(null);

    const scrollLeft = () => {
        const slider = sliderRef.current;
        if (slider) {
            slider.scrollBy({
                left: -200, // Adjust the value to control how much it scrolls
                behavior: 'smooth', // Add smooth scrolling behavior
            });
        }
    };

    const scrollRight = () => {
        const slider = sliderRef.current;
        if (slider) {
            slider.scrollBy({
                left: 200, // Adjust the value to control how much it scrolls
                behavior: 'smooth', // Add smooth scrolling behavior
            });
        }
    };



    return (
        <div className={"mx-4"}>
            <div className="products__content--top">
                <ProductsTitle title={"Khám phá sản phẩm"} />
                <ProductsButtons
                    onPrevClick={scrollLeft}
                    onNextClick={scrollRight}
                />
            </div>
            <div className="max-w-screen bg-gray-200 rounded-2xl">
                <div ref={sliderRef} className="flex space-x-8 overflow-x-hidden">
                    {categories.map((item) => (
                        <CategoryCard
                            key={item.label}
                            imageUrl={item.imageUrl}
                            altText={item.label}
                            productName={item.label}
                        />
                    ))}
                </div>
            </div>

        </div>

     );
};

export default CategorySlider;
