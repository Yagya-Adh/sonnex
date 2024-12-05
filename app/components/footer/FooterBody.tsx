"use client";
import Image from "next/image";
import footerDATA from "../../footer.json";
import FACEBOOKICON from "../../assets/footer/facebook.svg";
import INSTAGRAMICON from "../../assets/footer/instagram.svg";
import TWEETERICON from "../../assets/footer/tweeter.svg";
import YOUTUBEICON from "../../assets/footer/youtube.svg";

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
  { id: 1, icon: FACEBOOKICON },
  { id: 2, icon: INSTAGRAMICON },
  { id: 3, icon: TWEETERICON },
  { id: 4, icon: YOUTUBEICON },
];
const data: IdataFooter[] = footerDATA;
const FooterBody = () => {
  return (
    <div className="bg-black text-white">
      <div className="grid grid-cols-2 lg:grid-cols-4 max-w-screen-2xl mx-auto">
        {data?.slice(0, 1).map((footer) => (
          <div key={footer.id} className="p-20 border border-stone-700">
            {footer.column.head.lists.map((items) => (
              <h1
                className="text-2xl font-bold leading-10 font-sonexFamily tracking-tighter text-stone-500 transition-all ease-in-out duration-100  hover:text-stone-100 font-sans"
                key={items.id}
              >
                {items.name}
              </h1>
            ))}
          </div>
        ))}
        {data?.slice(1, 3).map((footer) => (
          <div key={footer.id} className="p-20 border border-stone-700">
            {footer.column.head.lists.map((items) => (
              <h1
                className="text-3xl font-bold font-sonexFamily tracking-tighter leading-10 "
                key={items.id}
              >
                {items.name}
              </h1>
            ))}
            {footer.column.head.subList?.map((subitem) => (
              <h1
                className="text-stone-500 transition-all ease-in-out duration-100  hover:text-stone-100 font-sans leading-7 text-xl"
                key={subitem.id}
              >
                {subitem.name}
              </h1>
            ))}
          </div>
        ))}
        <div className="grid  grid-cols-2">
          {socialIcons.map((icons) => (
            <div
              className="border border-stone-800 items-center flex justify-center"
              key={icons.id}
            >
              <div className="bg-stone-800 p-4 rounded-full items-center">
                <Image
                  src={icons.icon}
                  alt="icons_Social_"
                  className="size-8 z-20"
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
