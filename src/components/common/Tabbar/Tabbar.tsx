"use client";

import React, { useEffect, useState } from "react";
import TabbarLogo from "./TabbarLogo";
import TabbarMenu from "./TabbarMenu";
import TabbarSecondary from "./TabbarSecondary";
import TabbarSearch from "./TabbarSearch/TabbarSearch";
import "./style.scss";
import TabbarSecondaryMobile from "./TabbarSecondaryMobile";
import { usePathname, useSearchParams } from "next/navigation";
const initialPath = "/products";

const Tabbar = ({ logoUrl }: any) => {
  const [isMobileActive, setIsMobileActive] = useState(false);
  const [menu, setMenu] = useState<any>([]);

  useEffect(() => {
    const fetchCategoryTree = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/categories:{categoryTree}`
        );
        const categoryTree = await response.json();
        // remove 653b5fb490f7fb2f9cfdd2cc id from category tree
        categoryTree.items = categoryTree.items.filter(
          (item: any) => item._id !== "653b5fb490f7fb2f9cfdd2cc"
        );
        setMenu(transformCategoryTree(categoryTree));
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategoryTree();
  }, []);

  function createCategoryPath(categoryId: string): string {
    return `${initialPath}?category=${categoryId}`;
  }

  const transformCategoryTree = (categoryTree: any) => {
    const menu = categoryTree.items.map((item: any) => {
      if (item._id === "6583e62e3ebb0257be7dbf0c") {
        const dropdownMenu = item.child_category_list.map((child: any) => {
          return {
            label: {
              name: child.category_name,
              path: "https://ddspace.com.vn/",
            },
            list: child.child_category_list.map((grandChild: any) => {
              return {
                name: grandChild.category_name,
                path: "https://ddspace.com.vn/",
              };
            }),
          };
        });

        return {
          label: item.category_name,
          path: "https://ddspace.com.vn/",
          dropdownMenu,
        };
      }

      const dropdownMenu = item.child_category_list.map((child: any) => {
        return {
          label: {
            name: child.category_name,
            path: createCategoryPath(child._id),
          },
          list: child.child_category_list.map((grandChild: any) => {
            if (grandChild._id === "6584124e5603a35c31cfac87") {
              return {
                name: grandChild.category_name,
                path: "https://kesgroup.com.vn/san-pham/van-phu/melamine/melamine-phu-tren-van-mdf",
              };
            }

            if (grandChild._id === "658412675603a35c31cfad6d") {
              return {
                name: grandChild.category_name,
                path: "https://kesgroup.com.vn/san-pham/van-phu/melamine/melamine-phu-tren-van-dam",
              };
            }

            if (grandChild._id === "6584127d5603a35c31cfae54") {
              return {
                name: grandChild.category_name,
                path: "https://kesgroup.com.vn/san-pham/van-phu/melamine/melamine-phu-tren-van-hdf",
              };
            }
              
            return {
              name: grandChild.category_name,
              path: createCategoryPath(grandChild._id),
            };
          }),
        };
      });
      return {
        label: item.category_name,
        path: createCategoryPath(item._id),
        dropdownMenu,
      };
    });
    return menu;
  };

  const checkExternalLink = (path: string) => {
    if (!path) return false;
    return path.startsWith("http");
  };

  const handleBurgerClick = () => {
    setIsMobileActive(!isMobileActive);
  };

  const handleBurgerClose = () => {
    setIsMobileActive(false);
  };

  return (
    <div className="tabbar-container">
      <div className="tabbar">
        <TabbarLogo logoUrl={logoUrl} />
        <TabbarSearch
          isMobileActive={isMobileActive}
          onBurgerClick={handleBurgerClick}
        />
        <TabbarMenu />
      </div>
      <div className="tabbar--secondary-container">
        <TabbarSecondary menu={menu} checkExternalLink={checkExternalLink} />
        {isMobileActive && (
          <TabbarSecondaryMobile
            menu={menu}
            checkExternalLink={checkExternalLink}
            onBurgerClose={handleBurgerClose}
          />
        )}
      </div>
    </div>
  );
};

export default Tabbar;
