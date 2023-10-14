import React from "react";
import NextImage from "next/image";

interface CheckIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const CheckIcon = (props: CheckIconProps) => {
  return (
    <div {...props}>
      <NextImage
        src="/images/check-icon.png"
        alt="check-icon"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default CheckIcon;
