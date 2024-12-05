import PriceCard from "../card/PriceCard";
import MarqueeComponent from "../marquee/MarqueeComponent";

const BannerFootSection = () => {
  return (
    <div className="absolute left-0 bottom-0">
      <div className="flex justify-between items-end md:px-0 px-4">
        <p className="text-white text-xl font-bold max-w-screen-sm pe-40 font-barlow">
          YOUR SHOP FOR BICYCLES AND E&#45;BIKES IN SWITZERLAND &#46;
        </p>
        <div className="w-full">
          <PriceCard
            cycle="/assets/advertisehomeCycle.webp"
            backgroundColor="bg-[white]"
            width="w-1/4"
            title="Crux Expert - Gloss Carbon / Tarmac Black"
            typeCycle="Steel"
            price="$ 4,299.00 USD"
            actualPrice="$ 7,200.00 USD"
            New="New"
            Sale="Sale"
          />
        </div>
      </div>
      <MarqueeComponent />
    </div>
  );
};
export default BannerFootSection;
