"use client";
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

const BrandPage = () => {
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
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-5 md:grid-cols-3 gap-20 items-center py-10">
          {data?.map((listLink) => (
            <div
              key={listLink.id}
              className={`flex flex-col-reverse items-center ${listLink.colSpan}`}
            >
              {
                <p className="items-center flex justify-center p-10 text-9xl font-bold rounded-full border-2 hover:border-black hover:bg-sonex-cartBackGround">
                  {listLink.name}
                </p>
              }
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BrandPage;
