import React from "react";

interface PackageIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const PackageIcon = (props: PackageIconProps) => {
  return <img src="./images/package-icon.png" {...props} />;
};

export default PackageIcon;
