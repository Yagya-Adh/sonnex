"use client";
import Image, { StaticImageData } from "next/image";
import PillButton from "../button/PillButton";

interface IloadImageCard {
  cycleImage: StaticImageData;
  contentName: string;
  bordering?: string;
}
const ImageCard = ({ cycleImage, contentName, bordering }: IloadImageCard) => {
  return (
    <div
      className={`"rounded-sm hover:bg-sonex-cartBackGround overflow-hidden relative" 
        ${bordering ? bordering : ""} `}
    >
      <div className="relative">
        <Image
          src={cycleImage}
          alt="image_cards_ "
          className=" scale-110 hover:scale-150 ease-in-out transition-all duration-700"
        />
        <div className="absolute z-10 bottom-4 left-4">
          <PillButton
            text={contentName}
            variant="black-white"
            padding="px-2 py-1"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
