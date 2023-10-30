import React from "react";
import NextImage from "next/image";
import Link from "next/link";

const TabbarLogo = () => {
  return (
    <Link className="tabbar__logo" href="/">
      <NextImage
        src="/images/logo.png"
        alt="package-icon"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        priority
      />
    </Link>
  );
};

export default TabbarLogo;
