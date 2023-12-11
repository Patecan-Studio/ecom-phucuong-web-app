import React from "react";
import PlusSignIcon from "../../Icons/PlusSignIcon";

const ProductLinks = () => {
  return (
    <div className="product__links">
      <a className="product__cart" href="#">
        Chi tiết
        <PlusSignIcon />
      </a>
      <a className="product__cart" href="#">
        Giỏ hàng
        <PlusSignIcon />
      </a>
    </div>
  );
};

export default ProductLinks;
