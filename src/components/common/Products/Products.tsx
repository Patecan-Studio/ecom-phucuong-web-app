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
            `https://ecom-phucuong-inventory-develop.up.railway.app/api/v1/products?category=653b4c7085e86f091c56cb06&page=1&page_size=8&q=`
        );
        const data = await response.json();
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
