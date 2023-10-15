import React from "react";
import NextImage from "next/image";

const TabbarLogo = () => {
  return (
    <a className="tabbar__logo" href="#">
      <NextImage
        src="/images/logo.png"
        alt="package-icon"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "90%", height: "auto" }}
        priority
      />
    </a>
  );
};

export default TabbarLogo;
