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
      className={`
      bg-white
      border
      flex 
      flex-col
      justify-center 
      rounded-sm
      overflow-hidden
      group  
      px-4
      h-full
      ${width && width} 
      ${backgroundColor && backgroundColor}
      `}
    >
      <div className="py-8">
        <h1 className="font-bold font-inter text-lg max-w-72">{title}</h1>
        <span className="text-stone-600 text-sm">{typeCycle}</span>
      </div>
      <Image
        src={cycle}
        alt={`${title}.card_arival_`}
        height={200}
        width={200}
        className="translate-y-0 group-hover:-translate-y-1 ease-in-out transition-all duration-700 h-auto w-auto"
      />
      <div className="py-7">
        <span className=" line-through text-sonex-blackBackGroundCol">
          {actualPrice && actualPrice}
        </span>
        <div className="flex justify-between">
          <h2 className="text-bold">{price && price}</h2>
          <div>
            {New && (
              <PillButton text={New} variant="primary-outline" padding="px-2" />
            )}
            {Sale && (
              <PillButton text={Sale} variant="danger" padding="px-2 ml-2" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
