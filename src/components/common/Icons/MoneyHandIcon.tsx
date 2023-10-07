import React from "react";

interface MoneyHandIconProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {}

const MoneyHandIcon = (props: MoneyHandIconProps) => {
  return <img src="./images/money-hand.png" {...props}/>;
};

export default MoneyHandIcon;
