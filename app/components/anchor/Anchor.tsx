import Link from "next/link";

interface IAnchorInterface {
  text: string;
  link: string;
  padding: string;
}

const Anchor = ({ text, link, padding }: IAnchorInterface) => {
  return (
    <Link
      href={link}
      className={`text-black border hover:border-black hover:bg-sonex-cartBackGround items-center flex justify-center rounded-full  
        ${padding} 
        `}
    >
      {text}
    </Link>
  );
};

export default Anchor;
