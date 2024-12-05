import { IIconsInterface } from "../interface/IIconInterface";

const SwitzerlandFlagIcon = ({ className }: IIconsInterface) => {
  return (
    <svg
      viewBox="0 0 16 12"
      className={className}
      aria-label="Switzerland Flag"
    >
      <g clipPath="url(#clip0_6312_2774)">
        <rect width="16" height="12" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V12H16V0H0Z"
          fill="#E31D1C"
        />
        <mask
          id="mask0_6312_2774"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="16"
          height="12"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V12H16V0H0Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_6312_2774)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 3H7V5H5V7H7V9H9V7H11V5H9V3Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_6312_2774">
          <rect width="16" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SwitzerlandFlagIcon;
