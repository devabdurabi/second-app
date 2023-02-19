import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="w-full h-[90px] font-fontfam bg-black">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <h2 className="font-bold text-white text-3xl">Abdurabi.</h2>
        <div className="hidden md:flex">
          <ul className="flex justify-around items-center font-light text-white h-full">
            <li className="px-4">About</li>
            <li className="px-4">Ervaring</li>
            <li className="px-4">Weetjes</li>
            <li className="px-4">Contact</li>
            <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 ml-5 py-3 px-7 rounded-3xl">
              Contact Nu
            </button>
          </ul>
        </div>

        {/* Hier komt de hamburger icon/mobile first */}
        <div onClick={handleNav} className="block md:hidden">
          {/* als nav true is.. laat x zien zo niet hamburger */}
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>

        {/* Mobile-menu */}
        <div
          className={
            nav
              ? "w-full bg-black text-white absolute top-[90px] left-0 flex justify-center"
              : " absolute left-[-100%]"
          }
        >
          <ul>
            <li className="p-4 text-2xl ">About</li>
            <li className="p-4 text-2xl ">Ervaring</li>
            <li className="p-4 text-2xl ">Weetjes</li>
            <li className="p-4 text-2xl ">Contact </li>
            <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-3 px-7 rounded-3xl">
              Contact Nu
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
