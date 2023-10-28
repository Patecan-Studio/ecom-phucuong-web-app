import React from "react";

interface NavigatorIconProps extends React.SVGAttributes<HTMLOrSVGElement> {}

const NavigatorIcon = (props: NavigatorIconProps) => {
  return (
    <svg
      width="23"
      height="26"
      viewBox="0 0 23 24"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.791828 24C0.447282 24 0.193405 23.8943 0.0725117 23.7065C-0.0483819 23.5186 -0.0302479 23.2544 0.120869 22.9667C0.465416 22.2916 0.816007 21.6164 1.1666 20.9413C1.87383 19.5616 2.61128 18.1409 3.32455 16.7319C3.4938 16.3973 3.72954 16.2505 4.09827 16.2505H4.1164C4.46095 16.2564 4.82967 16.2564 5.28302 16.2564C5.55504 16.2564 5.82705 16.2564 6.11115 16.2564C6.40129 16.2564 6.69748 16.2564 6.99971 16.2564H7.43493C7.43493 16.2564 6.7277 15.5049 6.52823 15.2877C6.09301 14.8239 5.68197 14.3836 5.26489 13.9374C3.73559 12.3112 2.96187 10.3855 2.96791 8.20744C2.97396 6.27006 3.69932 4.38552 5.01706 2.88845C6.3348 1.40313 8.1482 0.410959 10.1188 0.105675C10.5782 0.035225 11.0436 0 11.509 0C15.698 0 19.2281 2.90607 19.9111 6.90998C20.3585 9.5225 19.6331 11.8767 17.7653 13.908C17.4086 14.2955 17.0399 14.683 16.6893 15.0587C16.4959 15.2642 16.3025 15.4638 16.1151 15.6693C16.0667 15.7221 16.0184 15.775 15.97 15.8395C15.9458 15.8689 15.9156 15.9041 15.8854 15.9393L15.6436 16.2211L16.0184 16.2505C16.0546 16.2505 16.0849 16.2564 16.1151 16.2564C16.1755 16.2622 16.2299 16.2681 16.2843 16.2681C16.508 16.2681 16.7377 16.2681 16.9613 16.2681C17.2454 16.2681 17.5295 16.2681 17.8136 16.2681C18.2307 16.2681 18.5753 16.2681 18.9017 16.2622H18.9198C19.2765 16.2622 19.5001 16.3973 19.6633 16.7084C20.298 17.9413 20.9387 19.1977 21.5674 20.4129C22.0086 21.2642 22.4439 22.1155 22.8791 22.9667C23.0302 23.2603 23.0483 23.5245 22.9274 23.7182C22.8065 23.9061 22.5527 24.0117 22.2202 24.0117C18.6478 24.0117 15.0814 24.0117 11.509 24.0117C7.93664 24.0117 4.36423 24 0.791828 24ZM4.74505 17.501C4.47908 17.501 4.31588 17.6008 4.20103 17.8239C3.64492 18.9217 3.07067 20.0372 2.51456 21.1115C2.32113 21.4873 2.1277 21.863 1.93427 22.2387C1.91009 22.2916 1.88592 22.3386 1.86174 22.3973C1.84965 22.4207 1.83756 22.4501 1.82547 22.4795L1.70457 22.7436H21.2591L21.1805 22.5029C21.1745 22.4853 21.1684 22.4677 21.1684 22.456C21.1624 22.4266 21.1503 22.4031 21.1382 22.3738L20.8178 21.7456C20.1469 20.4364 19.4517 19.0802 18.7566 17.7534C18.678 17.6067 18.4604 17.5127 18.3033 17.5068C17.7048 17.501 17.0943 17.501 16.5019 17.501C15.97 17.501 15.4199 17.501 14.882 17.4951H14.8759C14.6523 17.4951 14.483 17.5714 14.338 17.7476C13.8483 18.3346 13.3466 18.9335 12.857 19.5088C12.6092 19.8023 12.3553 20.1018 12.1075 20.4012C11.9745 20.5597 11.7629 20.7534 11.509 20.7534C11.2552 20.7534 11.0436 20.5597 10.9046 20.3953C10.6688 20.1135 10.4331 19.8317 10.1973 19.5499C9.70168 18.9628 9.19393 18.3581 8.69827 17.7593C8.54111 17.5714 8.37185 17.4951 8.11193 17.4951H8.09984C7.53769 17.501 6.97553 17.501 6.43151 17.501C5.86936 17.501 5.3072 17.501 4.76318 17.4951L4.74505 17.501ZM11.503 1.26223C10.5359 1.26223 9.58684 1.4501 8.68013 1.81996C6.49196 2.7182 4.94452 4.51468 4.43677 6.75147C3.92297 9.02935 4.56371 11.3366 6.20786 13.092C7.21128 14.1663 8.2026 15.2877 9.15766 16.3738L9.3934 16.6438C9.84676 17.1605 10.2759 17.6771 10.7353 18.2231C10.9348 18.4638 11.1403 18.7104 11.3519 18.9569L11.497 19.1331L11.6481 18.9628C11.6783 18.9335 11.7025 18.9041 11.7206 18.8806C11.7629 18.8278 11.8052 18.7867 11.8415 18.7456C12.1981 18.3229 12.5608 17.8943 12.9114 17.4834C14.1566 16.0039 15.4502 14.4716 16.8163 13.0568C18.3335 11.4892 18.9621 9.58708 18.678 7.41487C18.2247 3.90411 15.1358 1.26223 11.503 1.26223Z"
        fill="#fff"
      ></path>
      <path
        d="M11.4848 12.3874C9.14546 12.3698 7.25348 10.5204 7.27161 8.27778C7.27766 7.17406 7.72496 6.14079 8.52286 5.37171C9.32076 4.60263 10.3907 4.17993 11.521 4.17993H11.5512C12.6695 4.1858 13.7213 4.62612 14.5192 5.41868C15.3171 6.21124 15.7463 7.24451 15.7281 8.33062C15.6919 10.5674 13.8059 12.3874 11.521 12.3874H11.4848ZM11.5029 5.43042C9.88292 5.43042 8.55913 6.70439 8.55309 8.27191C8.54704 9.84529 9.86478 11.131 11.4908 11.1427H11.515C13.1108 11.1427 14.4225 9.86878 14.4406 8.30713C14.4467 7.54979 14.1505 6.83355 13.5944 6.28756C13.0382 5.74158 12.3068 5.43629 11.5271 5.43042H11.5029Z"
        fill="#fff"
      ></path>
    </svg>
  );
};

export default NavigatorIcon;
