import React, { useEffect } from "react";

const TabbarSearchInput = ({ value, onChange, onClick, onClose }: any) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".tabbar__search")) {
        onClose();
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [onClose]);

  return (
    <input
      className="tabbar__search__input"
      type="search"
      placeholder="Tìm kiếm sản phẩm..."
      value={value}
      onChange={onChange}
      onClick={onClick}
    />
  );
};

export default TabbarSearchInput;
