import React from "react";

interface TwentyFourHourIconProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {}

const TwentyFourHourIcon = (props: TwentyFourHourIconProps) => {
  return <img src="./images/24h-icon.png" {...props}/>;
};

export default TwentyFourHourIcon;
