import React from "react";

interface PlusSignIconProps extends React.SVGAttributes<HTMLOrSVGElement> {}

const PlusSignIcon = (props: PlusSignIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <line y1="7.5" x2="16" y2="7.5" stroke="#9f2434" />
      <line x1="7.5" y1="16" x2="7.5" y2="2.18557e-08" stroke="#9f2434" />
    </svg>
  );
};

export default PlusSignIcon;
