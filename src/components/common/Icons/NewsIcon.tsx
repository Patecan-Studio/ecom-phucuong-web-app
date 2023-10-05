import React from "react";

interface NewsIconProps extends React.SVGAttributes<HTMLOrSVGElement> {}

const NewsIcon = (props: NewsIconProps) => {
  return (
    <svg
      width="24"
      height="22"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.2208 22C9.48777 22 6.68716 22 3.65274 21.9946C2.72267 21.9946 1.89132 21.704 1.24702 21.1497C0.607924 20.6008 0.187053 19.8205 0.0363715 18.9002C0 18.6796 0 18.4428 0 18.2114V18.1952C0 15.2461 0 12.2162 0 9.19716C0 7.72798 0.852132 6.85078 2.27582 6.8454C2.66551 6.8454 3.05521 6.8454 3.4501 6.8454C3.76185 6.8454 4.0788 6.8454 4.39056 6.8454C4.70232 6.8454 5.01927 6.8454 5.33102 6.8454H5.90777V6.24804C5.90777 5.8498 5.90777 5.45695 5.90777 5.05871C5.90777 4.17074 5.90258 3.25049 5.91297 2.35176C5.92336 1.10861 6.77549 0.150685 7.98095 0.0161448C8.09526 0.00538161 8.21477 0 8.33947 0L10.236 0C12.1533 0 14.0758 0 15.9931 0C18.0714 0 19.8952 0 21.5631 0C22.8153 0 23.735 0.73728 23.9584 1.92123C23.9948 2.09883 23.9948 2.28718 23.9948 2.4863V3.59491C23.9948 8.38992 24 13.3518 23.9948 18.2329C23.9948 20.4501 22.4932 22 20.3421 22C17.7545 22 15.0162 22 12.2208 22ZM14.2992 20.8645C16.6582 20.8645 18.5651 20.8699 20.3161 20.886H20.3421C21.0695 20.886 21.7346 20.6115 22.2126 20.1111C22.6906 19.6106 22.9556 18.9163 22.9504 18.1414C22.9348 14.4335 22.9348 10.661 22.94 7.01223C22.94 5.56996 22.94 4.07926 22.94 2.61008C22.94 1.57681 22.4984 1.11937 21.5112 1.11937H21.3709C20.2433 1.11937 19.121 1.11937 17.9935 1.11937C16.866 1.11937 15.7437 1.11937 14.6161 1.11937C12.1429 1.11937 10.2412 1.11399 8.44858 1.10323H8.43299C7.97056 1.10323 7.60684 1.23777 7.35224 1.50147C7.09764 1.76517 6.96255 2.15802 6.96774 2.6316C6.97813 5.27397 6.97813 7.96478 6.97813 10.5641C6.97813 12.9051 6.97813 15.3268 6.98333 17.7055C6.98853 18.658 6.93137 19.6698 6.22992 20.5954L6.03247 20.8591H6.78069C8.03291 20.8591 9.31111 20.8591 10.5425 20.8537C11.7688 20.8645 13.0418 20.8645 14.2992 20.8645ZM3.55921 7.94863C3.13834 7.94863 2.71228 7.94863 2.2914 7.94863C1.46006 7.94863 1.07036 8.35763 1.07036 9.23483C1.07036 10.0259 1.07036 10.8332 1.07036 11.6081C1.07036 11.931 1.07036 12.2485 1.07036 12.5714C1.07036 13.1473 1.07036 13.7231 1.07036 14.2989C1.07036 15.6067 1.06517 16.9628 1.07556 18.2975C1.08595 19.7451 2.14072 20.8752 3.48127 20.8752C3.71509 20.8752 3.9541 20.8376 4.18272 20.7676C5.2323 20.4447 5.91297 19.4706 5.91297 18.2759C5.91816 15.7466 5.91297 13.1742 5.91297 10.6879C5.91297 9.92906 5.91297 9.16487 5.91297 8.40607C5.91297 8.34687 5.90777 8.29305 5.90777 8.22847C5.90777 8.19618 5.90258 8.15851 5.90258 8.11546L5.89738 7.97016L5.75709 7.96478C5.71552 7.96478 5.67396 7.95939 5.63758 7.95939C5.56484 7.95401 5.4921 7.94863 5.41935 7.94863H5.26867C4.69192 7.94863 4.12557 7.94863 3.55921 7.94863Z"
        fill="#5E5E5E"
      ></path>
      <path
        d="M14.954 9.76231C13.5407 9.76231 12.1274 9.76231 10.7453 9.76231C10.2725 9.76231 10.0698 9.55243 10.0698 9.06271C10.0646 7.6904 10.0646 6.33423 10.0698 5.02112C10.0698 4.52601 10.2621 4.33228 10.7505 4.33228C11.348 4.33228 11.9455 4.33228 12.5431 4.33228C12.9432 4.33228 14.5539 4.33228 14.954 4.33228C15.3541 4.33228 16.9648 4.33228 17.3649 4.33228C17.9624 4.33228 18.56 4.33228 19.1575 4.33228C19.6407 4.33228 19.833 4.52601 19.833 5.0265C19.8382 6.39881 19.8382 7.76036 19.833 9.06809C19.833 9.55781 19.6251 9.76231 19.1523 9.76231C17.7598 9.76231 16.3569 9.76231 14.954 9.76231ZM11.1765 8.60527H18.7418V5.45703H11.1765V8.60527Z"
        fill="#5E5E5E"
      ></path>
      <path
        d="M18.773 13.002C18.6639 13.002 18.5548 13.002 18.4404 13.002C18.3313 13.002 18.217 13.002 18.1079 13.002H14.9072C14.5123 13.002 14.1122 13.002 13.7173 13.002C13.3224 13.002 12.9224 13.002 12.5275 13.002C11.8208 13.002 11.2493 13.002 10.7193 12.9966C10.4699 12.9966 10.2568 12.8943 10.1477 12.7275C10.0542 12.5876 10.0438 12.41 10.1114 12.2378C10.2049 12.001 10.3816 11.888 10.6673 11.8772C10.7764 11.8718 10.8959 11.8718 11.0466 11.8718C11.1246 11.8718 11.2025 11.8718 11.2804 11.8718C11.3584 11.8718 11.4363 11.8718 11.5143 11.8718H18.9393C18.9704 11.8718 18.9964 11.8718 19.0276 11.8718C19.0536 11.8718 19.0847 11.8718 19.1107 11.8718C19.1627 11.8718 19.199 11.8718 19.2354 11.8772C19.6043 11.8987 19.8485 12.1248 19.8433 12.4423C19.8381 12.7652 19.5939 12.9912 19.2302 12.9966C19.0899 13.002 18.9496 13.002 18.773 13.002Z"
        fill="#5E5E5E"
      ></path>
      <path
        d="M13.7587 16.2363C12.5741 16.2363 11.618 16.2363 10.7503 16.2363C10.4801 16.2363 10.2567 16.1233 10.1424 15.9403C10.0541 15.795 10.0489 15.6174 10.132 15.4452C10.2411 15.2084 10.423 15.1169 10.7763 15.1169H10.7815C11.353 15.1169 11.961 15.1169 12.7559 15.1169C13.1093 15.1169 13.4626 15.1169 13.8159 15.1169C14.1692 15.1169 14.5225 15.1169 14.8759 15.1169H15.0369C15.4318 15.1169 15.8267 15.1169 16.2216 15.1169C16.6165 15.1169 17.0114 15.1169 17.4063 15.1169C18.1025 15.1169 18.6741 15.1169 19.1989 15.1223C19.4535 15.1223 19.6613 15.2246 19.7704 15.3968C19.8588 15.5367 19.8692 15.7089 19.7964 15.8865C19.6977 16.1287 19.521 16.2363 19.2353 16.2363C18.6897 16.2363 18.1389 16.2363 17.5933 16.2363C17.5881 16.2363 14.3563 16.2363 13.7587 16.2363Z"
        fill="#5E5E5E"
      ></path>
    </svg>
  );
};

export default NewsIcon;
