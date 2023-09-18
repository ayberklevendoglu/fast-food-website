import Image from "next/image";
import React from "react";

const CustomerItem = ({image}) => {
  return (
    <div className="m-5">
      <div className="p-6 bg-secondary text-white rounded-md">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
        voluptatem ullam quae, dolor illum adipisci est eveniet officia
        inventore, maiores quod esse consectetur facilis doloribus dolores omnis
        dignissimos alias distinctio!
        <div className="flex flex-col mt-4">
          <span className="text-lg font-semibold">Moana Michell</span>
          <span>le amerique</span>
        </div>
      </div>
      <div className="w-fit mt-10">
        <div
          className="w-0 h-0
              border-l-[11px] border-l-transparent
              border-b-[12px] border-primary
              border-r-[11px] border-r-transparent
              mx-auto"
        ></div>
        <Image
          src={image}
          width={100}
          height={100}
          alt="customer-1"
          className="rounded-full border-primary border-4 -mt-[1px]"
        />
      </div>
    </div>
  );
};

export default CustomerItem;
