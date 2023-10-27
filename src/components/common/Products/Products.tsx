import React from "react";
import "./style.scss";
import ProductsContent from "./ProductsContent";

const getProducts = async (
    category: string,
    page: number,
    pageSize: number,
    q: string,
) => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/products?category=${category?category: "all"}&page=${page}&page_size=${pageSize}&q=${q}`
        );
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log(error);
    }
};

const Products = async ({category, productsTitle, page, pageSize, q}: any) => {
    const currentPage = page ? page : 1;
    const data = await getProducts(category, currentPage, pageSize, q);
    const totalPage = data.total_page;
    return (
        <div className="products font-bold">
            <ProductsContent
                productsTitle={productsTitle ? productsTitle : "Sản Phẩm"}
                products={data.items}
                totalPage={totalPage}
            />
        </div>
    );
};

export default Products;
