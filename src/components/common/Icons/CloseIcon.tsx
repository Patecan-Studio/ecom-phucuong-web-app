import React from "react";
import NextImage from "next/image";

interface CloseIconProps extends React.SVGAttributes<HTMLOrSVGElement> {}

const CloseIcon = (props: CloseIconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.34375 17.6567L17.6575 6.34303"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
      <path
        d="M6.34375 6.34326L17.6575 17.657"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

export default CloseIcon;
