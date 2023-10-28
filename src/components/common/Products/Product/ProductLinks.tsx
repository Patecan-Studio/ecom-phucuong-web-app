import React from "react";
import PlusSignIcon from "../../Icons/PlusSignIcon";

const ProductLinks = () => {
  return (
    <div className="product__links">
      <a className="product__cart" href="#">
        Xem chi tiết
        <PlusSignIcon />
      </a>
    </div>
  );
};

export default ProductLinks;
