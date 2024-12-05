"use client";
import shopRoutes from "@/lib/data/shopRoutes.json";
import exploreRoutes from "@/lib/data/exploreRoute.json";
const shopNav = shopRoutes;
const exploreNav = exploreRoutes;

const SideBar = () => {
  return (
    <aside className="bg-white h-screen w-2/3 sm:w-1/3">
      <div className="flex flex-col items-start justify-between px-4">
        <ul className="">
          {shopNav?.map((shop) => (
            <li key={shop.id}>{shop.name}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
