import PriceCard from "../card/PriceCard";
import MarqueeComponent from "../marquee/MarqueeComponent";

const BannerFootSection = () => {
  return (
    <div className="absolute left-0 bottom-0 w-full">
      <div className="flex justify-between items-end md:px-0 px-4 w-full">
        <p className="text-white text-xl font-bold max-w-screen-96 pe-40 font-barlow">
          YOUR SHOP FOR BICYCLES AND E&#45;BIKES IN SWITZERLAND &#46;
        </p>

        <div className="w-full h-full md:flex inset-0 justify-end hidden p-4">
          <PriceCard
            cycle="/assets/advertisehomeCycle.webp"
            backgroundColor="bg-[white]"
            width="w-1/2"
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
