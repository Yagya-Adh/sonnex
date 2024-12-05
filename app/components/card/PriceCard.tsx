import Image from "next/image";
import PillButton from "../button/PillButton";

interface IPriceCardProp {
  width?: string;
  backgroundColor?: string;
  cycle: string;
  typeCycle: string;
  title: string;
  price: string;
  actualPrice?: string;
  New?: string;
  Sale?: string;
}
const PriceCard = ({
  width,
  backgroundColor,
  cycle,
  typeCycle,
  title,
  price,
  actualPrice,
  New,
  Sale,
}: IPriceCardProp) => {
  return (
    <div
      className={`rounded-sm border hover:bg-sonex-cartBackGround overflow-hidden 
        ${width && width} ${backgroundColor && backgroundColor}`}
    >
      <div className="px-4 pt-2 py-10">
        <h1 className="font-bold">{title}</h1>
        <span className="text-stone-600 text-sm">{typeCycle}</span>
      </div>
      <Image
        src={cycle}
        alt={`${title}.card_arival_`}
        className=" translate-y-0 hover:-translate-y-1 ease-in-out transition-all duration-700 h-full w-full"
        height={400}
        width={400}
      />
      <div className="px-4 pb-2 py-10">
        <span className=" line-through text-sonex-blackBackGroundCol">
          {actualPrice && actualPrice}
        </span>
        <div className="flex justify-between">
          <h2 className="text-bold">{price && price}</h2>
          <div>
            {New && (
              <PillButton text={New} variant="primary-outline" padding="px-2" />
            )}
            {Sale && <PillButton text={Sale} variant="danger" padding="px-2" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
