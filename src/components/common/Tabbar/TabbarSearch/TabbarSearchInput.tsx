import React, { useEffect } from "react";

const TabbarSearchInput = ({ value, onChange, onClick, onClose }: any) => {

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        (e.target as HTMLElement).closest(".overview__image--modal-prev") ||
        (e.target as HTMLElement).closest(".overview__image--modal-next")
      ) {
        return;
      }

      if (!(e.target as HTMLElement).closest(".overview__image--modal")) {
        onClose();
      }
    }

    document.addEventListener("click", handleClickOutside);
  }, [])

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
