import React from "react";

const TabbarSecondary = () => {
  const menu = [
    { label: "Sản phẩm", path: "/" },
    { label: "Sản phẩm mới", path: "/" },
    { label: "Giảm giá đặc biệt", path: "/" },
  ];

  return (
    <div className="tabbar--secondary-container">
      <div className="tabbar--secondary">
        {menu.map((item) => (
          <a
            className="tabbar--secondary__item"
            href={item.path}
            key={item.label}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TabbarSecondary;
