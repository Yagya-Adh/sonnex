"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ToggleButton from "../button/ToggleButton";
import PillButton from "../button/PillButton";
import Anchor from "../anchor/Anchor";
import { BagIcon, PlusIcon } from "@/app/icons";
import Cart from "../cart/Cart";
import shopRoutes from "@/lib/data/shopRoutes.json";
import exploreRoutes from "@/lib/data/exploreRoute.json";
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
      <nav className="sticky top-0 left-0 z-20">
        <div className="bg-white border-b-sonex-borderCol relative">
          <div className="max-w-screen-xl mx-auto flex items-center justify-between border-b px-4 ">
            <div className="flex items-center justify-between py-4 md:p-0 gap-10 shrink-0">
              <div className="flex items-center justify-between">
                <div onClick={handleSideBarPop} role="button">
                  <ToggleButton />
                </div>
                <Link href={"/"}>
                  <Image
                    src="/assets/SONNEX.svg"
                    className="w-auto h-auto object-center object-cover shrink-0"
                    alt="sonex_logo"
                    height={120}
                    width={120}
                  />
                </Link>
              </div>
              <ul className="hidden md:flex items-center font-sans px-6 font-sonexFamily tracking-tighter ms-5 justify-between">
                <button
                  type="button"
                  onClick={openNAVBOXFirst}
                  className="flex items-center text-xl font-bold ms-2 transition-all ease-in-out duration-500 border-transparent border-t-4 hover:border-t-sonex-prime py-5"
                >
                  SHOP
                  <PlusIcon className="text-black h-4 w-8 font-bold font-inter" />
                </button>
                <button
                  type="button"
                  onClick={openNAVBOXSecond}
                  className="flex items-center text-xl font-bold ms-2 transition-all ease-in-out duration-500 border-transparent border-t-4 hover:border-t-sonex-prime py-5"
                >
                  EXPLORE
                  <PlusIcon className="text-black h-4 w-8 font-bold font-inter" />
                </button>
              </ul>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleCartPop}
                type="button"
                className="bg-sonex-cartBackGround rounded-full flex items-center relative p-3 justify-center"
              >
                <span className="bg-rose-600 absolute -top-1 -right-3 rounded-full text-white text-sm text-center h-5 w-5 p-0.5">
                  {0}
                </span>
                <BagIcon className="h-4 w-4 text-black" />
              </button>
            </div>
          </div>
          {openFirst && (
            <div className="relative bg-white">
              <div className="max-w-screen-xl py-5 px-4 mx-auto flex justify-between items-center">
                <div className="hidden md:flex justify-center">
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
                <div className="hidden md:flex flex-col justify-center">
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
            <div className="max-w-screen-xl mx-auto px-4 py-5">
              <div className="hidden md:flex flex-wrap gap-14">
                {exploreNav?.map((explore) => (
                  <div key={explore.id}>
                    <Anchor
                      text={explore.name}
                      padding="font-extrabold text-7xl px-2 py-10 items-center"
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
          <div className="top-10 left-0  inset-0 h-full">
            <SideBar />
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
