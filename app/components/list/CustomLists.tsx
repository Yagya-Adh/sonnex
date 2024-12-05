"use client";

type textIN = {
  text: string;
  key: number;
  isActive?: boolean;
  fontSize?: string;
};

const CustomLists = ({ text, key, isActive, fontSize }: textIN) => {
  return (
    <>
      <h1
        className={`rounded-full px-2 py-1 font-bold border mx-1 hover:bg-sonex-cartBackGround
          ${isActive ? "bg-black text-white " : ""}
          ${fontSize ? fontSize : ""}
          `}
        key={key}
      >
        {text}
      </h1>
    </>
  );
};
export default CustomLists;
