import React from "react";

const TabbarSearchInput = ({ value, onChange }: any) => {
  return (
    <input
      className="tabbar__search__input"
      type="search"
      placeholder="Tìm kiếm sản phẩm..."
      value={value}
      onChange={onChange}
    />
  );
};

export default TabbarSearchInput;
