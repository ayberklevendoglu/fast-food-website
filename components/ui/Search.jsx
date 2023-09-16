import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "./Title";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

const Search = ({ setIsSearchModal }) => {
  return (
    <div
      className='fixed top-0 left-0 w-screen h-screen z-50 t after:content-[""] after:w-screen after:h-screen after:bg-slate-400 after:absolute after:top-0
    after:left-0 after:opacity-70 grid place-content-center'
    >
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="w-full h-full grid place-content-center">
          <div className="relative z-50 w-[370px] md:w-[600px] bg-white rounded-md text-center p-5">
            <Title addClass="text-[40px]">Search</Title>
            <input
              type="text"
              placeholder="What do you want to eat?"
              className="border w-full p-2 my-5 rounded-sm border-primary"
            />
            <div>
              <ul>
                <li className="flex items-center justify-between p-2 hover:bg-primary rounded-lg transition-all my-4">
                  <div className="relative">
                    <Image
                      src="/images/f1.png"
                      objectFit="cover"
                      className="rounded-md"
                      alt="first food"
                      width={75}
                      height={75}
                    />
                  </div>
                  <span className="font-bold">Good Pizza</span>
                  <span className="font-bold">$10</span>
                </li>
                <li className="flex items-center justify-between p-2 hover:bg-primary rounded-lg transition-all my-4">
                  <div className="relative">
                    <Image
                      src="/images/f1.png"
                      objectFit="cover"
                      className="rounded-md"
                      alt="first food"
                      width={75}
                      height={75}
                    />
                  </div>
                  <span className="font-bold">Good Pizza</span>
                  <span className="font-bold">$10</span>
                </li>
                <li className="flex items-center justify-between p-2 hover:bg-primary rounded-lg transition-all my-4">
                  <div className="relative">
                    <Image
                      src="/images/f1.png"
                      objectFit="cover"
                      className="rounded-md"
                      alt="first food"
                      width={75}
                      height={75}
                    />
                  </div>
                  <span className="font-bold">Good Pizza</span>
                  <span className="font-bold">$10</span>
                </li>
                <li className="flex items-center justify-between p-2 hover:bg-primary rounded-lg transition-all my-4">
                  <div className="relative">
                    <Image
                      src="/images/f1.png"
                      objectFit="cover"
                      className="rounded-md"
                      alt="first food"
                      width={75}
                      height={75}
                    />
                  </div>
                  <span className="font-bold">Good Pizza</span>
                  <span className="font-bold">$10</span>
                </li>
              </ul>
              <button>
                <AiOutlineClose
                  className="text-2xl absolute top-4 right-4 hover:text-primary"
                  onClick={() => setIsSearchModal(false)}
                />
              </button>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
