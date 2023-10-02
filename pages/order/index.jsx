import Title from "@/components/ui/Title";
import Image from "next/image";
import React from "react";

const Order = () => {
  return (
    <div className="flex flex-col justify-center gap-10 min-h-[calc(100vh_-_392px)] overflow-auto">
      <div className="flex items-center mx-auto overflow-x-auto">
        <table className="w-full min-w-[900px] text-center text-gray-500">
          <thead className="text-xs text-gray-400 uppercase bg-slate-600">
            <tr>
              <th scope="col" className="py-3 px-6">
                Order id
              </th>
              <th scope="col" className="py-3 px-6">
                Customer
              </th>
              <th scope="col" className="py-3 px-6">
                Adress
              </th>
              <th scope="col" className="py-3 px-6">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2 border-b-slate-600 bg-secondary hover:bg-primary transition-all text-sm">
              <td className="flex justify-around items-center px-6 py-4 font-medium whitespace-nowrap hover:text-white hover:cursor-pointer">
                6304745FA9S..
              </td>
              <td className="px-6 py-4 font-medium whitespace-nowrap hover:text-white hover:cursor-pointer">
                <span>Ayberk Levendoğlu</span>
              </td>
              <td className="px-6 py-4 font-medium whitespace-nowrap hover:text-white hover:cursor-pointer">
                Ankara
              </td>
              <td className="px-6 py-4 font-medium whitespace-nowrap hover:text-white hover:cursor-pointer">
                $20
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-around items-center max-w-4xl min-w-4xl w-full mx-auto overflow-x-auto bg-primary py-6 rounded-lg">
        <div className="flex flex-col justify-center items-center">
          <Image src="/images/paid.png" width={50} height={50} alt="payment" />
          <p>Payment</p>
        </div>
        <div className="flex flex-col justify-center items-center animate-pulse">
          <Image src="/images/bake.png" width={50} height={50} alt="cooking" />
          <p>Preparing..</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src="/images/bike.png" width={50} height={50} alt="ontheway" />
          <p>On the way</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/delivered.png"
            width={50}
            height={50}
            alt="delivered"
          />
          <p>Delivered</p>
        </div>
      </div>
    </div>
  );
};

export default Order;
