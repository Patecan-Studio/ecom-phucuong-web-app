import React from "react";
import LogoIcon from "../Icons/LogoIcon";
import NewsIcon from "../Icons/NewsIcon";
import NavigatorIcon from "../Icons/NavigatorIcon";
import ConsultIcon from "../Icons/ConsultIcon";
import AvatarIcon from "../Icons/AvatarIcon";
import CartIcon from "../Icons/CartIcon";
import TabbarMenuItem from "./TabbarMenuItem";
import CartButton from "@/components/cart/CartButton/CartButton";

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
  ];

  return (
      <>
    <div className="tabbar__menu">
      {menu.map((item) => (
        <TabbarMenuItem
          key={item.label}
          className={ `text-white ${item.className || ""}`}
          label={item.label}
          icon={item.icon}
        />
      ))}
    </div>
        <div className="tabbar__menu">
              <CartButton
                  key={"Giỏ hàng"}
                  className={ `text-white "tabbar__menu__text--active bg-black" || ""}`}
                  label={"Giỏ hàng"}
                  count={'0'}
                  icon={<CartIcon />}
              />
        </div>

      </>
  );
};

export default TabbarMenu;
