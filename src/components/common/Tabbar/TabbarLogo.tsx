import React from "react";
import NextImage from "next/image";
import Link from "next/link";

const TabbarLogo = ({ logoUrl }: any) => {
  return (
    <Link className="tabbar__logo" href="/">
      <NextImage
        src={logoUrl || "/images/logo.png"}
        alt="tabbar-logo"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </Link>
  );
};

export default TabbarLogo;
