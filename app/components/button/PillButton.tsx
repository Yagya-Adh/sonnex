"use client";
interface ButtonProps {
  text: string;
  variant?:
    | "primary"
    | "primary-outline"
    | "primary-outline-focus"
    | "angle-white"
    | "danger"
    | "black-white"
    | "dark";
  padding?: string;
}

const PillButton = ({ text, variant, padding }: ButtonProps) => {
  const variantClasses: { [key: string]: string } = {
    primary:
      "rounded-full text-black border border-stone-200 hover:bg-sonex-cartBackGround items-center",
    "black-white":
      "text-xl font-extrabold rounded-full font-sans bg-white group-hover:bg-black text-black border border-black hover:border-white group-hover:text-white items-center",
    "angle-white": "text-white border border-white rounded-full items-center",
    "primary-outline":
      "text-black border border-black rounded-full hover:bg-sonex-cartBackGround items-center",
    "primary-outline-focus":
      "text-black border hover:border-black hover:bg-sonex-cartBackGround items-center flex justify-center rounded-full",
    dark: "rounded-full text-black border border-black bg-stone-100 items-center",
    danger: "text-rose-600 border-rose-600 border rounded-full items-center",
    default:
      "rounded-full border-stone-100 hover:bg-sonex-cartBackGround items-center",
  };

  const classes = variantClasses[variant || "default"];

  return <button className={`${classes} ${padding || ""}`}>{text}</button>;
};

export default PillButton;
