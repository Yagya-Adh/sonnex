"use client";
import Link from "next/link";
import Marquee from "react-fast-marquee";
const data = [
  { id: 1, colSpan: "col-span-2", name: "Diamond" },
  { id: 2, colSpan: "col-span-1", name: "Enduro" },
  { id: 3, colSpan: "col-span-2", name: "Extreme" },
  { id: 4, colSpan: "col-span-1", name: "Guff" },
  { id: 5, colSpan: "col-span-2", name: "Hard Metal" },
  { id: 6, colSpan: "col-span-2", name: "Lizard" },
  { id: 7, colSpan: "col-span-1", name: "Obus" },
  { id: 8, colSpan: "col-span-1", name: "Rhomb" },
  { id: 9, colSpan: "col-span-1", name: "Steel" },
];

const BrandBody = () => {
  return (
    <>
      <Marquee>
        <div className="flex py-4 bg-sonex-footerFormBackGround text-white font-barlow text-3xl font-extrabold ">
          BRANDS - BRANS - BRANDS -BRANDS - BRANS - BRANDS -BRANDS - BRANS -
          BRANDS -BRANDS - BRANS - BRANDS -BRANDS - BRANS - BRANDS -BRANDS -
          BRANS - BRANDS - BRANDS - BRANS - BRANDS -BRANDS - BRANS - BRANDS
          -BRANDS - BRANS - BRANDS -BRANDS - BRANS - BRANDS -BRANDS - BRANS -
          BRANDS -BRANDS - BRANS - BRANDS - BRANDS - BRANS - BRANDS -BRANDS -
          BRANS - BRANDS -BRANDS - BRANS - BRANDS -BRANDS - BRANS - BRANDS
          -BRANDS - BRANS - BRANDS -BRANDS - BRANS - BRANDS - BRANDS - BRANS -
          BRANDS -BRANDS - BRANS - BRANDS -BRANDS - BRANS - BRANDS -BRANDS -
          BRANS - BRANDS -BRANDS - BRANS - BRANDS -BRANDS - BRANS - BRANDS -
        </div>
      </Marquee>
      <div className="max-w-screen-xl mx-auto px-4 md:px-0">
        <div className="flex flex-wrap gap-1 md:gap-4 lg:gap-20 items-center py-10 w-full">
          {data?.map((listLink) => (
            <Link
              href={listLink.name}
              key={listLink.id}
              className={`flex flex-col-reverse items-center ${listLink.colSpan}`}
            >
              {
                <span className="items-center flex justify-center p-10 text-4xl md:text-9xl font-bold rounded-full border-2 hover:border-black hover:bg-sonex-cartBackGround">
                  {listLink.name}
                </span>
              }
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default BrandBody;
