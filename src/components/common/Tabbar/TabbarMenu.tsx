import React from "react";
import LogoIcon from "../Icons/LogoIcon";
import NewsIcon from "../Icons/NewsIcon";
import NavigatorIcon from "../Icons/NavigatorIcon";
import ConsultIcon from "../Icons/ConsultIcon";
import AvatarIcon from "../Icons/AvatarIcon";
import CartIcon from "../Icons/CartIcon";
import TabbarMenuItem from "./TabbarMenuItem";

const TabbarMenu = () => {
  const menu = [
    {
      label: "Giới thiệu",
      icon: <LogoIcon />,
      path: "/",
      className: "not-on-small-device",
    },
    {
      label: "Tin tức",
      icon: <NewsIcon />,
      path: "/",
      className: "not-on-small-device",
    },
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
        <TabbarMenuItem
          key={item.label}
          className={item.className || ""}
          count={item.count}
          label={item.label}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default TabbarMenu;
