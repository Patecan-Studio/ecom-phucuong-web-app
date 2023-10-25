"use client";
import React from "react";
import TabbarDropdown from "./TabbarDropdown";
import Link from "next/link";

const TabbarSecondary = () => {
  const menu = [
    {
      label: "Sản phẩm",
      path: "/products",
      dropdownMenu: [
        {
          label: "Phòng khách",
          list: [
            { name: "Ghế sofa 2 và 3 chỗ ngồi", path: "/" },
            { name: "Ghế sofa mô đun", path: "/" },
            { name: "Giường sofa", path: "/" },
          ],
        },
        {
          label: "Phòng ngủ",
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
          label: "Phòng ăn",
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
          <div key={item.label}>
            <div className="tabbar--secondary__item">
              <Link className="tabbar--secondary__link" href={item.path}>
                {item.label}
              </Link>
            </div>
            {item.dropdownMenu && (
              <TabbarDropdown dropdownMenu={item.dropdownMenu} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabbarSecondary;
