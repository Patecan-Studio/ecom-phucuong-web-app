import React from "react";
import NextImage from "next/image";

interface TwentyFourHourIconProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {}

const TwentyFourHourIcon = (props: TwentyFourHourIconProps) => {
  return (
    <div {...props}>
      <NextImage
        src="/images/24h-icon.png"
        alt="24h-icon"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default TwentyFourHourIcon;
