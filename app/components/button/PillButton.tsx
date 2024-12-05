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
  if (variant == "primary") {
    return (
      <button
        className={`rounded-full text-black border border-stone-200 hover:bg-sonex-cartBackGround items-center ${padding} `}
      >
        {text}
      </button>
    );
  }

  if (variant == "black-white") {
    return (
      <button
        className={`text-xl font-extrabold rounded-full font-sans  bg-white hover:bg-black text-black border border-black hover:border-white hover:text-white items-center ${padding} `}
      >
        {text}
      </button>
    );
  }

  if (variant == "angle-white") {
    return (
      <button
        className={`" text-white border border-white rounded-full items-center" ${padding} `}
      >
        {text}
      </button>
    );
  }
  if (variant == "primary-outline") {
    return (
      <button
        className={` text-black border border-black rounded-full hover:bg-sonex-cartBackGround items-center ${padding} `}
      >
        {text}
      </button>
    );
  }

  if (variant == "primary-outline-focus") {
    return (
      <button
        className={` text-black border hover:border-black hover:bg-sonex-cartBackGround items-center flex justify-center rounded-full  ${padding} `}
      >
        {text}
      </button>
    );
  }
  if (variant == "dark") {
    return (
      <button
        className={`rounded-full text-black border border-black bg-stone-100 items-center ${padding} `}
      >
        {text}
      </button>
    );
  }

  if (variant == "danger") {
    return (
      <button
        className={` text-rose-600 border-rose-600  border rounded-full items-center ${padding} `}
      >
        {text}
      </button>
    );
  }
  return (
    <button
      className={`rounded-full border-stone-100 hover:bg-sonex-cartBackGround items-center ${padding} `}
    >
      {text}
    </button>
  );
};

export default PillButton;
