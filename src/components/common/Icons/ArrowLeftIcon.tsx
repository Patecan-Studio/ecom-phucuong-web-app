import React from "react";

interface ArrowLeftIconProps extends React.SVGAttributes<HTMLOrSVGElement> {}

const ArrowLeftIcon = (props: ArrowLeftIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="15"
      viewBox="0 0 22 15"
      fill="none"
      style={{ rotate: "180deg" }}
      {...props}
    >
      <line y1="7.5" x2="14" y2="7.5" stroke="#696D6C" />
      <path
        d="M20.5838 7.09456C20.8603 7.29413 20.8603 7.70587 20.5838 7.90544L14.2926 12.4457C13.9619 12.6844 13.5 12.4481 13.5 12.0403L13.5 2.95972C13.5 2.55191 13.9619 2.31563 14.2926 2.55428L20.5838 7.09456Z"
        stroke="#696D6C"
      />
    </svg>
  );
};

export default ArrowLeftIcon;
