"use client";
import Link from "next/link";
import { XmarkIcon } from "@/app/icons";

interface IASideProp {
  handleSideBarPop: () => void;
}
const SideBar = ({ handleSideBarPop }: IASideProp) => {
  return (
    <aside className="bg-white h-screen w-2/3 sm:w-1/3 p-4">
      <div className="flex flex-row items-start justify-between ">
        <Link href="/">Lorem ipsum dolor</Link>{" "}
        <button type="button" onClick={handleSideBarPop}>
          <XmarkIcon className="h-6 w-6 fill-black" />
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
