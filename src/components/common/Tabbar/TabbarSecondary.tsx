"use client";
import React from "react";
import TabbarDropdown from "./TabbarDropdown";

const TabbarSecondary = () => {
  const menu = [
    {
      label: "Sản phẩm",
      path: "/",
      dropdownMenu: [
        {
          label: "Di văng",
          list: [
            { name: "Ghế sofa 2 và 3 chỗ ngồi", path: "/" },
            { name: "Ghế sofa mô đun", path: "/" },
            { name: "Giường sofa", path: "/" },
          ],
        },
        {
          label: "Ghế ngồi",
          list: [
            { name: "Chiếc ghế bành", path: "/" },
            { name: "Chiếc tựa", path: "/" },
            { name: "Tình yêu ghế", path: "/" },
            { name: "Băng ghế", path: "/" },
            { name: "Giường ban ngày", path: "/" },
            { name: "Ghế điều dưỡng", path: "/" },
          ],
        },
        {
          label: "Bàn & tủ",
          list: [
            { name: "Bàn cafe", path: "/" },
            { name: "Bàn trà", path: "/" },
            { name: "Bàn ăn", path: "/" },
            { name: "Bàn bên", path: "/" },
            { name: "Tủ và kệ sách", path: "/" },
            { name: "Tủ và quầy bar", path: "/" },
            { name: "Bảng điều khiển", path: "/" },
          ],
        },
      ],
    },
    { label: "Sản phẩm mới", path: "/" },
    { label: "Giảm giá đặc biệt", path: "/" },
  ];

  return (
    <div className="tabbar--secondary-container">
      <div className="tabbar--secondary">
        {menu.map((item) => (
          <>
            <div className="tabbar--secondary__item" key={item.label}>
              <a className="tabbar--secondary__link" href={item.path}>
                {item.label}
              </a>
            </div>
            {item.dropdownMenu && (
              <TabbarDropdown dropdownMenu={item.dropdownMenu} />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default TabbarSecondary;
