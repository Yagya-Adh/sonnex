"use client";
import Image from "next/image";
import footerDATA from "@/lib/data/footer.json";

interface Icommon {
  id: number;
  link?: string;
  name?: string;
  socialName?: string;
}

interface IlistFooter {
  lists: Icommon[];
  subList?: Icommon[] | undefined | null;
  social?: Icommon[];
}
interface IcolumnFooter {
  head: IlistFooter;
}
interface IdataFooter {
  id: number;
  column: IcolumnFooter;
}

const socialIcons = [
  { id: 1, icon: "/assets/footer/facebook.svg" },
  { id: 2, icon: "/assets/footer/instagram.svg" },
  { id: 3, icon: "/assets/footer/tweeter.svg" },
  { id: 4, icon: "/assets/footer/youtube.svg" },
];
const data: IdataFooter[] = footerDATA;
const FooterBody = () => {
  return (
    <div className="bg-black text-white">
      <div className="grid grid-cols-2 lg:grid-cols-4 max-w-screen-xl mx-auto">
        {data?.slice(0, 1).map((footer) => (
          <div
            key={footer.id}
            className="p-4 border border-stone-700 flex flex-col"
          >
            {footer.column.head.lists.map((items) => (
              <h2
                className="text-2xl font-extrabold font-inter tracking-tighter text-white/60 transition-all ease-in-out duration-100  hover:text-stone-100"
                key={items.id}
              >
                {items.name}
              </h2>
            ))}
          </div>
        ))}
        {data?.slice(1, 3).map((footer) => (
          <div
            key={footer.id}
            className="p-4 border border-stone-700 flex flex-col"
          >
            {footer.column.head.lists.map((items) => (
              <h3
                className="text-xl font-bold font-sonexFamily tracking-tighter leading-10 "
                key={items.id}
              >
                {items.name}
              </h3>
            ))}
            {footer.column.head.subList?.map((subitem) => (
              <h3
                className="text-white/60 transition-all ease-in-out duration-100 hover:text-stone-100 font-sans leading-7"
                key={subitem.id}
              >
                {subitem.name}
              </h3>
            ))}
          </div>
        ))}
        <div className="grid grid-cols-2">
          {socialIcons.map((icons) => (
            <div
              className="border border-stone-800 items-center flex justify-center"
              key={icons.id}
            >
              <div className="bg-stone-800 p-4 rounded-full items-center">
                <Image
                  src={icons.icon}
                  alt="icons_Social_"
                  className="w-full origin-center object-cover h-full z-20"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterBody;
