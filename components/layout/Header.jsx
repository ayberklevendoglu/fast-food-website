import React, { useState } from "react";
import Logo from "../ui/Logo";
import { BiSolidUserCircle, BiSolidShoppingBag } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import Search from "../ui/Search";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);
  const router = useRouter();
  return (
    <div
      className={`h-24 z-50 absolute top-0 left-0 right-0 ${
        router.asPath === "/" ? "bg-opacity-0" : "bg-slate-800"
      }`}
    >
      <div className="container mx-auto flex justify-between text-white items-center h-full">
        <div>
          <Logo />
        </div>
        <nav
          className={`absolute sm:static top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden ${
            isMenuModal === true && "!grid place-content-center"
          }`}
        >
          <ul className="flex gap-1 sm:flex-row flex-col items-center">
            <li className="px-1 py-5 uppercase">
              <a className="hover:text-primary" href="">
                Home
              </a>
            </li>
            <li className="px-1 py-5 uppercase">
              <a className="hover:text-primary" href="">
                Menu
              </a>
            </li>
            <li className="px-1 py-5 uppercase">
              <a className="hover:text-primary" href="">
                About
              </a>
            </li>
            <li className="px-1 py-5 uppercase">
              <a className="hover:text-primary" href="">
                Book Table
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-3 items-center">
          <a href="">
            <BiSolidUserCircle className="text-xl hover:text-primary" />
          </a>
          <a href="">
            <BiSolidShoppingBag className="text-xl hover:text-primary" />
          </a>
          <button
            onClick={() => {
              setIsSearchModal(true);
            }}
          >
            <BsSearch className="text-xl hover:text-primary" />
          </button>
          <a href="#" className="hidden md:inline-block">
            <button className="btn-primary">Order Online</button>
          </a>
          <button
            className="sm:hidden inline-block"
            onClick={() => setIsMenuModal(true)}
          >
            <AiOutlineMenu className="block md:hidden text-xl hover:text-primary transition-all" />
          </button>
          {isMenuModal && (
            <button>
              <AiOutlineClose
                className="text-2xl absolute top-4 right-4 text-black hover:text-primary"
                onClick={() => setIsMenuModal(false)}
              />
            </button>
          )}
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;
