"use client";
import React from "react";
import switcherland from "../../assets/footer/Switzerland.svg";
import Image, { StaticImageData } from "next/image";
import PillButton from "../button/PillButton";
import callUs from "../../assets/footer/call.svg";
import emailUs from "../../assets/footer/email.svg";
import { ArrowUpIcon } from "@heroicons/react/16/solid";
interface IGridTwoData {
  id: number;
  icon: StaticImageData;
  title: string;
  slug: string;
}
const GridTwoData: IGridTwoData[] = [
  { id: 1, icon: callUs, title: "Call us", slug: "Mon-Fri: 10am - 7pm CET" },
  {
    id: 2,
    icon: emailUs,
    title: "Email",
    slug: "We usually reply within 48 hours",
  },
];
const FooterBodyBottom = () => {
  return (
    <div className="bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-2xl mx-auto px-10 ">
        <GridOne />
        <GridTwo />
      </div>
    </div>
  );
};
export default FooterBodyBottom;

const GridOneCalendar = () => {
  return (
    <div className="flex items-center justify-center  ">
      <div className="flex-col flex items-center p-2">
        <h1 className="font-bold text-xl">Mon-Fri </h1>
        <span>10am &#45; 7pm</span>
      </div>
      <div className="border-l border-stone-200 flex-col flex items-center p-2">
        <h2 className="font-bold text-xl">Saturday</h2>
        <span>10am &#45; 2pm</span>
      </div>
    </div>
  );
};

const GridOne = () => {
  return (
    <div className="border border-stone-700 p-20">
      <ColOne />
      <div className="grid grid-cols-2 gap-3 items-center ">
        <PillButton
          text="Opening hours"
          variant="angle-white"
          padding="px-4 py-2"
        />
        <GridOneCalendar />
      </div>
    </div>
  );
};

const ColOne = () => {
  return (
    <div className="flex flex-col">
      <h1 className="font-sonexFamily font-bold text-3xl py-2">VISIT US</h1>
      <p className="flex items-end max-w-16 text-stone-500">
        Kingdom Park&#44; 80 4910 Lenzerheide
        <Image src={switcherland} alt="switchzer_" className="size-3" />
      </p>
      <span className="text-2xl border-b  w-2/4 py-1 items-center flex ">
        Get direction <ArrowUpIcon className="rotate-45 size-6 " />{" "}
      </span>
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
              <Image src={footerList.icon} alt="" className=" size-5" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl  font-bold">{footerList.title}</h1>
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
