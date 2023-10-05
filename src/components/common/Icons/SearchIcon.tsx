import React from "react";

interface SearchIconProps extends React.SVGAttributes<HTMLOrSVGElement> {}

const SearchIcon = (props: SearchIconProps) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1286_512)">
        <path
          d="M9.06786 0C9.48224 0 9.89663 0 10.3164 0C10.381 0.0107606 10.4402 0.0322817 10.5047 0.037662C11.5649 0.118366 12.5874 0.355099 13.5454 0.807043C17.0165 2.43727 18.9862 5.1597 19.3467 8.99046C19.5136 10.7498 19.1637 12.4285 18.3565 13.9941C18.0175 14.6505 17.5923 15.2639 17.1779 15.9364C17.1995 15.9526 17.2748 16.001 17.334 16.0602C18.7386 17.459 20.1432 18.8579 21.537 20.2675C21.72 20.4559 21.8492 20.698 22.0052 20.9186C22.0052 21.0477 22.0052 21.1768 22.0052 21.3059C21.9945 21.3221 21.9729 21.3328 21.9676 21.349C21.677 22.0592 20.9666 22.2098 20.4177 21.6664C19.153 20.4074 17.8937 19.1484 16.6344 17.8841C16.3868 17.6366 16.1447 17.3837 15.8917 17.1255C15.8164 17.1846 15.7518 17.2331 15.6926 17.2761C13.3947 19.0408 10.8169 19.7026 7.95925 19.1969C3.54095 18.4275 0.215123 14.629 0.0106222 10.1526C-0.0754834 8.2157 0.360427 6.39716 1.37217 4.74003C2.8844 2.25972 5.06933 0.731719 7.92696 0.166789C8.30367 0.0968452 8.68577 0.0538029 9.06786 0ZM17.5816 9.67914C17.5654 5.31573 14.0028 1.76473 9.67598 1.79702C5.30612 1.82392 1.8027 5.33187 1.79193 9.68452C1.78655 14.0264 5.33841 17.5828 9.68675 17.5774C14.0458 17.5774 17.5977 14.0157 17.5816 9.67914Z"
          fill="#333333"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1286_512">
          <rect width="22" height="22" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default SearchIcon;
