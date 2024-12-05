"use client";
import { useState } from "react";
import Image from "next/image";
import { PlusIcon } from "@heroicons/react/16/solid";
import ToggleButton from "../button/ToggleButton";
import Link from "next/link";
import PillButton from "../button/PillButton";
import exploreRoutes from "@/lib/data/exploreRoute.json";
import shopRoutes from "@/lib/data/shopRoutes.json";
import Anchor from "../anchor/Anchor";
import { BagIcon } from "@/app/icons";
import Cart from "../cart/Cart";
import SideBar from "../sidebar/SideBar";
const shopNav = shopRoutes;
const exploreNav = exploreRoutes;

const NavBar = () => {
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const openNAVBOXFirst = () => {
    setOpenFirst(!openFirst);
  };
  const openNAVBOXSecond = () => {
    setOpenSecond(!openSecond);
  };

  const handleCartPop = () => {
    setCartOpen(!cartOpen);
  };
  const handleSideBarPop = () => {
    setSideBarOpen(!cartOpen);
  };

  return (
    <>
      <nav className="sticky top-0 z-20 left-0">
        <div className=" bg-white border-b-sonex-borderCol">
          <div className="max-w-screen-2xl mx-auto flex items-center justify-between border-b  px-10  w-full">
            <div className=" flex items-center justify-between  ">
              <div className="flex items-center justify-between">
                <ToggleButton handleSideBarPop={handleSideBarPop} />
                <Link href={"/"}>
                  <Image
                    src="/assets/SONNEX.svg"
                    className=""
                    alt="sonex_logo"
                    height={120}
                    width={120}
                  />
                </Link>
              </div>
              <ul className="flex items-center font-sans px-6 font-sonexFamily tracking-tighter ms-5  justify-between p-1">
                <button
                  onClick={openNAVBOXFirst}
                  className="flex items-center text-xl font-bold ms-2 transition-all ease-in-out duration-500  py-5 border-transparent border-t-4 hover:border-t-sonex-prime"
                >
                  SHOP
                  <PlusIcon className="text-black size-4" />
                </button>
                <button
                  onClick={openNAVBOXSecond}
                  className="flex items-center text-xl font-bold ms-2 transition-all ease-in-out duration-500  py-5 border-transparent border-t-4 hover:border-t-sonex-prime"
                >
                  EXPLORE
                  <PlusIcon className="text-black size-4" />
                </button>
              </ul>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleCartPop}
                type="button"
                className="bg-sonex-cartBackGround rounded-full flex items-center relative p-3 justify-center"
              >
                <span className="bg-rose-600 absolute -top-1 -right-3 rounded-full text-white text-sm text-center h-6 w-6 p-0.5">
                  {0}
                </span>
                <BagIcon className="h-5 w-5 text-black" />
              </button>
            </div>
          </div>
          {openFirst && (
            <div className="relative bg-white">
              <div className="max-w-screen-2xl py-5 px-10 mx-auto flex items-center justify-between">
                <div className="flex justify-center">
                  {shopNav?.slice(0, 3).map((pillLink) => (
                    <div key={pillLink.id}>
                      <PillButton
                        padding="px-2 py-1"
                        text={pillLink.name}
                        variant="dark"
                      />
                      <ul className="pb-2">
                        {pillLink.innerRoute?.map((inLink) => (
                          <li key={inLink.id} className="p-1">
                            <PillButton
                              text={inLink.name}
                              padding="px-2"
                              variant="primary"
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col justify-center">
                  {shopNav?.slice(3, 6).map((bigNav) => (
                    <div key={bigNav.id} className="py-2">
                      <PillButton
                        text={bigNav.name}
                        padding="font-extrabold text-7xl py-10"
                        variant="primary-outline-focus"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {openSecond && (
            <div className="max-w-screen-2xl mx-auto px-10 py-5">
              <div className="grid grid-cols-3 gap-4">
                {exploreNav?.map((explore) => (
                  <div key={explore.id} className="">
                    <Anchor
                      text={explore.name}
                      padding="font-extrabold text-7xl py-10 px-4 items-center"
                      link={explore.linkPath}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {cartOpen && (
          <div className="fixed top-0 right-0 inset-0 h-full w-full">
            <Cart handleCartPop={handleCartPop} />
          </div>
        )}{" "}
        {sideBarOpen && (
          <div className="fixed top-0 left-0 inset-0 h-full w-full">
            <SideBar handleSideBarPop={handleSideBarPop} />
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
