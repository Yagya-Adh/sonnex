"use client";
import Link from "next/link";
import footerDATA from "@/lib/data/footer.json";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/app/icons";
import footerSocialIconsData from "@/lib/data/socialIconData.json";
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
const data: IdataFooter[] = footerDATA;
const socialIcons = footerSocialIconsData;

const FooterBody = () => {
  return (
    <div className="bg-black text-white">
      <div className="grid grid-cols-2 lg:grid-cols-4 max-w-screen-xl mx-auto">
        {data?.slice(0, 1).map((footer) => (
          <div
            key={footer.id}
            className="pb-20 p-4 border border-stone-700 flex flex-col"
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
            className="pb-20 p-4 border border-stone-700 flex flex-col"
          >
            {footer.column.head.lists.map((items) => (
              <h3
                className="text-xl font-bold font-sonexFamily tracking-tighter leading-10"
                key={items.id}
              >
                {items.name}
              </h3>
            ))}
            {footer.column.head.subList?.map((subitem) => (
              <h3
                className="text-white/60 text-sm transition-all ease-in-out duration-100 hover:text-stone-100 font-sans leading-7"
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
              <div className="bg-stone-800 p-3 rounded-full items-center">
                <Link href={icons.linkPath} target="_blank">
                  {icons.name == "facebook" ? (
                    <FacebookIcon className="h-8 w-8" />
                  ) : icons.name == "tweeter" ? (
                    <TwitterIcon className="h-8 w-8" />
                  ) : icons.name == "instagram" ? (
                    <InstagramIcon className="w-8 h-8" />
                  ) : icons.name == "youtube" ? (
                    <YoutubeIcon className="w-8 h-8" />
                  ) : null}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterBody;
