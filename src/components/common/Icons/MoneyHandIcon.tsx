import React from "react";
import NextImage from "next/image";

interface MoneyHandIconProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {}

const MoneyHandIcon = (props: MoneyHandIconProps) => {
  return (
    <div {...props}>
      <NextImage
        src="/images/money-hand.png"
        alt="money-hand-icon"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default MoneyHandIcon;
