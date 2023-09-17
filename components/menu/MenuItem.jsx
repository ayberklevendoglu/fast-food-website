import Image from "next/image";
import React from "react";
import { BsFillCartFill } from "react-icons/bs";

const MenuItem = () => {
  return (
    <div className="rounded-2xl bg-secondary max-w-[362px]">
      <div className="relative max-w-[362px] max-h-[215px] p-6 flex justify-center bg-slate-100 rounded-bl-[3rem] rounded-t-xl">
        <Image
          src="/images/f2.png"
          alt="menu"
          width={197}
          height={150}
          objectFit="contain"
          className="hover:scale-110 transition-all"
        />
      </div>
      <div className=" text-white p-6 rounded-2xl">
        <h5 className="text-start text-2xl font-semibold mb-4">
          Delicious Burger
        </h5>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt ex
          explicabo itaque, esse aspernatur doloremque.
        </p>
        <div className="flex justify-between mt-4">
          <p>$15</p>
          <div className="bg-primary p-2 rounded-full cursor-pointer">
            <BsFillCartFill className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
