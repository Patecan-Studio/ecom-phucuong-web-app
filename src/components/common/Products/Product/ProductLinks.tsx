import React from "react";
import PlusSignIcon from "../../Icons/PlusSignIcon";

const ProductLinks = () => {
  return (
    <div className="product__links">
      <a className="product__cart" href="#">
        Xem chi tiết
        <PlusSignIcon />
      </a>
      <a className="product__cart" href="#">
        Thêm vào giỏ hàng
        <PlusSignIcon />
      </a>
    </div>
  );
};

export default ProductLinks;
