import React from "react";
import NextImage from "next/image";

interface PackageIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const PackageIcon = (props: PackageIconProps) => {
  return (
    <div {...props}>
      <NextImage
        src="/images/package-icon.png"
        alt="package-icon"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default PackageIcon;
