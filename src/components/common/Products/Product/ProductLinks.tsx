import React from "react";
import PlusSignIcon from "../../Icons/PlusSignIcon";
import Link from "next/link";

const ProductLinks = ({ productSlug }: any) => {
  return (
    <div className="product__links">
      <Link className="product__cart" href={`/products/${productSlug}`}>
        Chi tiết
        <PlusSignIcon />
      </Link>
      <a className="product__cart" href="#">
        Giỏ hàng
        <PlusSignIcon />
      </a>
    </div>
  );
};

export default ProductLinks;
