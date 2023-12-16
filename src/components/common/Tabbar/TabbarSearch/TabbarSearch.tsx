"use client";

import { useEffect, useState } from "react";
import TabbarSearchInput from "./TabbarSearchInput";
import TabbarSearchButton from "./TabbarSearchButton";
import { usePathname, useRouter } from "next/navigation";
import TabbarSuggest from "./TabbarSuggest";
import TabbarBurger from "./TabberBurger";

const getDropdownProductsByKeyword = async (q: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products?page=1&page_size=4&q=${q}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getDropdownProducts = async (page_size?: any) => {
  const pageSizeQuery = page_size ? `&page_size=${page_size}` : "";

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products?page=1&${pageSizeQuery}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const TabbarSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [debounceInputValue, setDebounceInputValue] = useState("");
  const [dropdownProducts, setDropdownProducts] = useState([]);
  const router = useRouter();
  const pathname = usePathname();

  const handleSearchParams = (e: any) => {
    e.preventDefault();
    if (inputValue.length === 0) return;
    let params = new URLSearchParams(window.location.search);
    if (inputValue.length > 0) {
      params.set("q", inputValue);
    } else {
      params.delete("q");
    }

    if (pathname.includes("products")) {
      router.replace(`${pathname}?${params.toString()}`);
      return;
    }

    router.replace(`${pathname}products?${params.toString()}`);
  };

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebounceInputValue(inputValue);
    }, 500);
    return () => clearTimeout(delayInputTimeoutId);
  }, [inputValue]);

  useEffect(() => {
    const getDropdownProductsByKeywordData = async () => {
      const data = await getDropdownProductsByKeyword(debounceInputValue);
      setDropdownProducts(data.items);
    };
    if (debounceInputValue.length > 0) {
      getDropdownProductsByKeywordData();
    } else {
      setDropdownProducts([]);
    }
  }, [debounceInputValue]);

  useEffect(() => {
    setInputValue("");
    setDropdownProducts([]);
  }, [pathname]);

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleClick = async (e: any) => {
    const data = await getDropdownProducts(4);
    setDropdownProducts(data.items);
  };

  const handleClose = () => {
    if (dropdownProducts.length > 0) {
      setDropdownProducts([]);
    }
  };

  return (
    <form className="tabbar__search" onSubmit={handleSearchParams}>
      <TabbarSearchInput
        value={inputValue}
        onChange={handleChange}
        onClick={handleClick}
        onClose={handleClose}
      />
      <TabbarSearchButton onClick={handleSearchParams} />
      <TabbarSuggest
        products={dropdownProducts}
        isDisplay={dropdownProducts.length > 0}
      />
      <TabbarBurger />
    </form>
  );
};

export default TabbarSearch;
