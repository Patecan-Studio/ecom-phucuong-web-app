import React from "react";

interface LogoIconProps extends React.SVGAttributes<HTMLOrSVGElement> {}

const LogoIcon = (props: LogoIconProps) => {
  return (
    <svg
      width="21"
      height="26"
      viewBox="0 0 21 24"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.21886 6.49655C2.17332 6.49655 2.12777 6.47777 2.11069 6.46838L1.11719 5.79244L10.1498 0.0688459C10.1783 0.0531991 10.2978 0 10.4345 0C10.5142 0 10.5853 0.0187761 10.6508 0.0594578L19.8314 5.86129L18.9034 6.47151C18.8949 6.47151 18.8835 6.47151 18.8778 6.47151C18.781 6.47151 18.6586 6.42457 18.6045 6.39954L11.3625 1.77435C11.0949 1.5991 10.796 1.51148 10.48 1.51148C9.99037 1.51148 9.62314 1.73366 9.55482 1.77747L2.27864 6.47777C2.25587 6.49342 2.24164 6.49655 2.21886 6.49655Z"
        fill="#fff"
      ></path>
      <path
        d="M11.0381 14.6122C11.0409 14.4745 11.0865 14.002 11.5135 13.7234L19.1256 8.78532V7.63643L20.2301 6.92919V17.3097C20.2301 17.316 20.2073 18.1828 19.7006 18.5082L13.2813 22.5795L11.3114 23.8281C11.2203 23.8845 11.1292 23.9408 11.0381 23.9877V14.6122ZM13.0706 14.4463C12.3675 14.9063 12.1568 15.7169 12.1426 16.1237V16.1393V21.5907L18.2488 17.7134C19.0345 17.2127 19.117 16.3678 19.1256 16.1205V16.0986V10.494L13.0706 14.4463Z"
        fill="#fff"
      ></path>
      <path
        d="M1.11461 18.5021C0.696148 18.2361 0.607901 17.7072 0.59082 17.4131V6.90429L1.70104 7.63656V8.95443L6.87065 12.259L9.22773 13.7955C9.29605 13.8519 9.77714 14.2649 9.77714 14.8032V23.9972L1.11461 18.5021ZM1.70388 16.1488L1.70958 16.1926C1.74658 16.5588 1.92023 17.2472 2.66607 17.7229L8.66408 21.5313V17.1001C8.66408 15.6857 7.98087 14.8689 7.57948 14.6092L1.70388 10.782V16.1488Z"
        fill="#fff"
      ></path>
    </svg>
  );
};

export default LogoIcon;
