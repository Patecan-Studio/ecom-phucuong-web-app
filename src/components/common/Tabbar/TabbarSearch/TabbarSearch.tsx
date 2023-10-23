"use client";

import { useEffect, useState } from "react";
import TabbarSearchInput from "./TabbarSearchInput";
import TabbarSearchButton from "./TabbarSearchButton";
import { usePathname, useRouter } from "next/navigation";

const TabbarSearch = () => {
  const [inputValue, setInputValue] = useState("");
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
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get("q") ?? "";
    setInputValue(searchQuery);
  }, []);

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <form className="tabbar__search" onSubmit={handleSearchParams}>
      <TabbarSearchInput value={inputValue} onChange={handleChange} />
      <TabbarSearchButton onClick={handleSearchParams} />
    </form>
  );
};

export default TabbarSearch;
