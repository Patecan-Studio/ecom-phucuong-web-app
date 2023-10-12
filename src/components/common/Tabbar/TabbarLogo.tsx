import React from "react";
import NextImage from "next/image";

const TabbarLogo = () => {
  return (
    <a className="tabbar__logo" href="#">
      <NextImage
        src="https://nuwwaqzrwtilsxbajubq.supabase.co/storage/v1/object/public/images/static/logo_phucuong%20350px.png"
        unoptimized
        alt="package-icon"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </a>
  );
};

export default TabbarLogo;
