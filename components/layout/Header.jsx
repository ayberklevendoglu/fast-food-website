import React, { useState } from "react";
import Logo from "../ui/Logo";
import { BiSolidUserCircle, BiSolidShoppingBag } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import Search from "../ui/Search";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  return (
    <div className="h-24 bg-slate-900">
      <div className="container mx-auto flex justify-between text-white items-center h-full">
        <div>
          <Logo />
        </div>
        <nav>
          <ul className="flex gap-1 ">
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
          <button className="btn-primary"> Order Online</button>
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;
