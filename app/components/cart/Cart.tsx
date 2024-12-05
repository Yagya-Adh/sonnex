"use client";
import { XmarkIcon } from "@/app/icons";

interface ICart {
  handleCartPop: () => void;
}

const Cart = ({ handleCartPop }: ICart) => {
  return (
    <>
      <div
        role="button"
        className="h-full w-full bg-black opacity-70 p-20"
        onClick={handleCartPop}
      />
      <div className="absolute top-0 right-0 overflow-hidden bg-white text-black lg:w-1/4 md:w-2/4 sm:w-3/4 w-4/5 h-full">
        <div className="flex justify-between border items-center text-2xl">
          <h2 className="px-4 font-normal font-sans">Your Cart</h2>
          <button
            type="button"
            onClick={handleCartPop}
            className="border py-4 px-4 bg-transparent hover:bg-black/5 ease-in-out duration-300 transition-all"
          >
            <XmarkIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center relative p-1 px-4 h-full">
          <p className="font-inter font-medium text-sm text-black">
            No items found.
          </p>
        </div>
      </div>
    </>
  );
};

export default Cart;
