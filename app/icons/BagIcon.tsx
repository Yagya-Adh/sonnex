import { IIconsInterface } from "../interface/IIconInterface";

const BagIcon = ({ className }: IIconsInterface) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M6.25006 6.39167V5.58333C6.25006 3.70833 7.75839 1.86667 9.63339 1.69167C11.8667 1.475 13.7501 3.23333 13.7501 5.425V6.575"
        stroke="black"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.49992 18.3333H12.4999C15.8499 18.3333 16.4499 16.9917 16.6249 15.3583L17.2499 10.3583C17.4749 8.325 16.8916 6.66666 13.3332 6.66666H6.66658C3.10825 6.66666 2.52492 8.325 2.74992 10.3583L3.37492 15.3583C3.54992 16.9917 4.14992 18.3333 7.49992 18.3333Z"
        stroke="black"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.9129 10H12.9204"
        stroke="black"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.07878 10H7.08626"
        stroke="black"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default BagIcon;
