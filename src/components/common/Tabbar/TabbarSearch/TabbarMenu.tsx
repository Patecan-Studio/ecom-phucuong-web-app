import React from "react";
import LogoIcon from "../../Icons/LogoIcon";
import NewsIcon from "../../Icons/NewsIcon";
import NavigatorIcon from "../../Icons/NavigatorIcon";
import ConsultIcon from "../../Icons/ConsultIcon";
import AvatarIcon from "../../Icons/AvatarIcon";
import CartIcon from "../../Icons/CartIcon";

const TabbarMenu = () => {
  const menu = [
    { label: "Giới thiệu", icon: <LogoIcon />, path: "/" },
    { label: "Tin tức", icon: <NewsIcon />, path: "/" },
    { label: "Hệ thống phân phối", icon: <NavigatorIcon />, path: "/" },
    { label: "Tra cứu đơn hàng", icon: <ConsultIcon />, path: "/" },
    { label: "Đăng nhập", icon: <AvatarIcon />, path: "/" },
    {
      label: "Giỏ hàng",
      icon: <CartIcon />,
      path: "/",
      className: "cart",
      count: "0",
    },
  ];

  return (
    <div className="tabbar__menu">
      {menu.map((item) => (
        <div
          className={`tabbar__menu__item ${item.className || ""}`}
          key={item.label}
        >
          {item.count ? (
            <>
              <div className="tabbar__menu__icon">{item.icon}</div>
              <div className="tabbar__menu__text">{item.label}</div>
              <p className="tabbar__menu__count">{item.count}</p>
            </>
          ) : (
            <>
              <div className="tabbar__menu__icon">{item.icon}</div>
              <div className="tabbar__menu__text">{item.label}</div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TabbarMenu;
