import React from "react";
import LogoIcon from "../Icons/LogoIcon";
import NewsIcon from "../Icons/NewsIcon";
import NavigatorIcon from "../Icons/NavigatorIcon";
import ConsultIcon from "../Icons/ConsultIcon";
import AvatarIcon from "../Icons/AvatarIcon";
import CartIcon from "../Icons/CartIcon";
import TabbarMenuItem from "./TabbarMenuItem";
import Link from "next/link";

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
    { label: "Đăng nhập", icon: <AvatarIcon />, path: "/signin" },
    {
      label: "Giỏ hàng",
      icon: <CartIcon />,
      path: "/",
      className: "tabbar__menu__text--active bg-primary_2",
      count: "0",
    },
  ];

  return (
    <div className="tabbar__menu">
      {menu.map((item) => (
        <Link key={item.label} href={item.path}>
          <TabbarMenuItem
            className={`text-black ${item.className || ""}`}
            count={item.count}
            label={item.label}
            icon={item.icon}
          />
        </Link>
      ))}
    </div>
  );
};

export default TabbarMenu;
