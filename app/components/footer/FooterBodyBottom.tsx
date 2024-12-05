"use client";
import Link from "next/link";
import PillButton from "../button/PillButton";
import {
  ArrowRightIcon,
  CallIcon,
  EmailIcon,
  SwitzerlandFlagIcon,
} from "@/app/icons";
interface IGridTwoData {
  id: number;
  icon: string;
  title: string;
  slug: string;
  name: string;
}
const GridTwoData: IGridTwoData[] = [
  {
    id: 1,
    name: "call",
    icon: "/assets/footer/call.svg",
    title: "Call us",
    slug: "Mon-Fri: 10am - 7pm CET",
  },
  {
    id: 2,
    name: "email",
    icon: "/assets/footer/email.svg",
    title: "Email",
    slug: "We usually reply within 48 hours",
  },
];

const GridOneCalendar = () => {
  return (
    <div className="grid grid-cols-2 items-start py-4">
      <div className="flex-col flex items-center  ">
        <h1 className="font-bold text-lg">Mon-Fri </h1>
        <span className="text-sm text-white/45">10am &#45; 7pm</span>
      </div>
      <div className="border-l border-white/45 flex-col flex items-center  ">
        <h2 className="font-bold text-lg">Saturday</h2>
        <span className="text-sm text-white/45">10am &#45; 2pm</span>
      </div>
    </div>
  );
};

const GridOne = () => {
  return (
    <div className="border border-stone-700 p-4">
      <ColOne />
      <div className="grid grid-cols-2 gap-3 items-center py-5">
        <PillButton
          text="Opening hours"
          variant="angle-white"
          padding="px-2 py-2"
        />
        <GridOneCalendar />
      </div>
    </div>
  );
};

const ColOne = () => {
  return (
    <div className="flex flex-col">
      <h1 className="font-barlow font-bold text-xl py-3">VISIT US</h1>
      <p className="flex items-end max-w-40 text-white/50">
        <span>Kingdom Park&#44; 80 4910 Lenzerheide</span>
        <SwitzerlandFlagIcon className="h-5 w-5" />
      </p>
      <Link
        href="https://www.google.com/maps/"
        target="_blank"
        className="text-lg border-b w-1/3 items-center flex"
      >
        Get direction{" "}
        <ArrowRightIcon className="-rotate-45 w-5 h-5 fill-white" />
      </Link>
    </div>
  );
};

const GridTwo = () => {
  return (
    <>
      {GridTwoData.map((footerList) => (
        <div
          className="flex justify-center items-center border border-stone-700 p-20"
          key={footerList.id}
        >
          <div className="flex items-center">
            <div className="rounded-full bg-stone-700 p-4 me-3">
              {footerList.name == "call" ? (
                <Link href="tel:+123456789">
                  <CallIcon className="h-5 w-5" />
                </Link>
              ) : footerList.name == "email" ? (
                <Link href="mailto:name@email.com">
                  <EmailIcon className="h-5 w-5" />
                </Link>
              ) : null}
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold">{footerList.title}</h1>
              <p className="text-stone-400 hover:text-white">
                {footerList.slug}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const FooterBodyBottom = () => {
  return (
    <div className="bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto px-4 lg:p-0">
        <GridOne />
        <GridTwo />
      </div>
    </div>
  );
};
export default FooterBodyBottom;
