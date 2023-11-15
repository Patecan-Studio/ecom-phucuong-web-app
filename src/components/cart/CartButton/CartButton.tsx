import {TabbarMenuItemProps} from "@/components/common/Tabbar/types";
import {useAppSelector} from "@/store/store";
import {totalCartItemSelector, totalCartPriceSelector} from "@/store/cartSlice";
import React from "react";
import Link from "next/link";

const CartButton = ({
                          className,
                          label,
                          icon,
                      }: TabbarMenuItemProps) => {
    const totalItems = useAppSelector(totalCartItemSelector);
    const totalPrice = useAppSelector(totalCartPriceSelector);
    return (
        <Link href={"/cart"}>
            <div className={`tabbar__menu__item ${className} bg-primary_2` } key={label}>
                {totalItems ? (
                    <>
                        <div className="tabbar__menu__icon">
                            {icon}
                            <p className="tabbar__menu__count">{totalItems}</p>
                        </div>
                        <div className="tabbar__menu__text">{label}</div>
                    </>
                ) : (
                    <>
                        <div className="tabbar__menu__icon">{icon}
                            <p className="tabbar__menu__count">{'0'}</p>
                        </div>
                        <div className="tabbar__menu__text">{label}</div>
                    </>
                )}
            </div>
        </Link>
    );
};

export default CartButton;
