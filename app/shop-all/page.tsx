"use client";
import CustomLists from "../components/list/CustomLists";
import SectionHead from "../components/section/SectionHead";
import PriceCard from "../components/card/PriceCard";
import cycleC from "../assets/advertisehomeCycle.webp";

const data = [
  {
    id: 1,
    title: "Turbo Como SL 5.0 - Smoke / Transparent",
    type: "Diamond",
    price: "$ 2,349.00 USD",
    actualPrice: "$ 4,250.00 USD",
    new: "New",
    sale: "Sale",
  },
  {
    id: 2,
    title: "Jett 20 Single Speed - Gloss Cobalt Blue",
    type: "Lizard",
    price: "$ 425.00 USD",
    new: "New",
    sale: "",
  },
  {
    id: 3,
    title: "Turbo Vado 4.0 - Cast Black",
    type: "Diamond",
    price: "$ 4,000.00 USD",
    actualPrice: "$ 2,749.00 USD",
    new: "New",
    sale: "Sale",
  },

  {
    id: 4,
    title: "  S-Works Turbo Levo SL Carbon - Rusted Red / Redwood",
    type: "Enduro",
    price: "$$ 4,000.00 USD",
    actualPrice: "$ 2,749.00 USD",
    new: "New",
    sale: "Sale",
  },

  {
    id: 5,
    title: "Turbo Vado 4.0 - Cast Black",
    type: "Diamond",
    price: "$ 21,199.00 USD",
    actualPrice: "$ 14,599.00 USD",
    new: "New",
    sale: "Sale",
  },
  {
    id: 6,
    title: "Crux Expert - Gloss Carbon / Tarmac Black",
    type: "Steel",
    price: "$ 7,200.00 USD",
    actualPrice: "$ 4,299.00 USD",
    new: "New",
    sale: "Sale",
  },
  {
    id: 7,
    title: "Diverge Comp Carbon - Amber Glow / Gloss Metallic",
    type: "Guff",
    price: "$ 4,000.00 USD",
    new: "New",
    sale: "",
  },
];

interface IfilterRoutes {
  id: number;
  path: string;
  isActive: boolean;
}
const filterRoutes: IfilterRoutes[] = [
  {
    id: 1,
    path: "All",
    isActive: true,
  },
  {
    id: 2,
    path: "Bikes",
    isActive: false,
  },
  {
    id: 3,
    path: "Gear",
    isActive: false,
  },
  {
    id: 4,
    path: "Parts",
    isActive: false,
  },
];

const ShopAllPage = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <SectionHead sectionName="PRODUCTS" />

        <div className="flex py-4 border-t border-b">
          {filterRoutes?.map((route) => (
            <CustomLists
              key={route.id}
              text={route.path}
              isActive={route.isActive}
              fontSize="text-sm"
            />
          ))}
        </div>
        <div className="grid gird-cols-1 md:grid-cols-3">
          {data?.map((sonnex) => (
            <div key={sonnex.id}>
              <PriceCard
                width={sonnex.title}
                backgroundColor={sonnex.title}
                cycle={cycleC}
                typeCycle={sonnex.type}
                title={sonnex.title}
                price={sonnex.price}
                actualPrice={sonnex.actualPrice}
                New={sonnex.new}
                Sale={sonnex.sale}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopAllPage;
