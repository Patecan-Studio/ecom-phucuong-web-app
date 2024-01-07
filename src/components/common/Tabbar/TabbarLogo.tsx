import React from "react";
import NextImage from "next/image";
import Link from "next/link";
import { cloudflareLoader } from "@/share/utils/cloudflare/images";

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
        priority
        loader={() =>
          cloudflareLoader({
            src: logoUrl || "/images/logo.png",
            width: 450,
          })
        }
      />
    </Link>
  );
};

export default TabbarLogo;
