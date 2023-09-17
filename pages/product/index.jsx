import Title from "@/components/ui/Title";
import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <div className="flex items-center h-screen py-20 flex-wrap">
      <div className="relative md:flex-1 w-[80%] h-[80%] mx-20">
        <Image
          src="/images/f1.png"
          alt="f1"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="md:flex-1 px-20 flex flex-col md:items-start items-center">
        <Title addClass="text-6xl">Good Pizza</Title>
        <span className="text-primary text-2xl font-bold underline inline-block my-4">
          $10
        </span>
        <p className="text-sm mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui unde, ex
          dolor dolorem nemo cumque. Quisquam, voluptatum. Quisquam, voluptatum.
          Lorem ipsum dolor sit amet.
        </p>
        <div>
          <h4 className="text-xl font-bold">Choose the size</h4>
          <div className="flex items-center gap-10">
            <div className="relative w-8 h-8">
              <Image src="/images/size.png" alt="f1" layout="fill" />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Small
              </span>
            </div>
            <div className="relative w-12 h-12">
              <Image src="/images/size.png" alt="f1" layout="fill" />
              <span className="absolute top-0 -right-8 text-xs bg-primary rounded-full px-[5px] font-medium">
                Medium
              </span>
            </div>
            <div className="relative w-16 h-16">
              <Image src="/images/size.png" alt="f1" layout="fill" />
              <span className="absolute top-0 -right-4 text-xs bg-primary rounded-full px-[7px] font-medium">
                Large
              </span>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <h4 className="text-xl font-bold mb-1">
            Choose additional ingredients
          </h4>
          <div className="flex gap-5">
            <label htmlFor="" className="flex items-center gap-1">
              <input type="checkbox" className="w-5 h-5 accent-primary" />
              <span className="text-sm font-semibold">Ketchup</span>
            </label>
            <label htmlFor="" className="flex items-center gap-1">
              <input type="checkbox" className="w-5 h-5 accent-primary" />
              <span className="text-sm font-semibold">Mayonnaise</span>
            </label>
            <label htmlFor="" className="flex items-center gap-1">
              <input type="checkbox" className="w-5 h-5 accent-primary" />
              <span className="text-sm font-semibold">Hot sauce</span>
            </label>
          </div>
        </div>
        <button className="btn-primary my-6">Add to cart</button>
      </div>
    </div>
  );
};

export default Index;
