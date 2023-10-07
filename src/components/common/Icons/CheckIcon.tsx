import React from "react";

interface CheckIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const CheckIcon = (props: CheckIconProps) => {
  return <img src="./images/check-icon.png" {...props} />;
};

export default CheckIcon;
