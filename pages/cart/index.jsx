import Title from "@/components/ui/Title";
import Image from "next/image";
import React from "react";

const Cart = () => {
  return (
    <div className="min-h-[calc(100vh_-_392px)]">
      <div className="flex justify-between min-h-[calc(100vh_-_392px)]">
        <div className="flex items-center mx-auto overflow-x-auto">
          <table className="w-full min-w-[900px] text-center text-gray-500">
            <thead className="text-xs text-gray-400 uppercase bg-slate-600">
              <tr>
                <th scope="col" className="py-3 px-6">Product</th>
                <th scope="col" className="py-3 px-6">Extras</th>
                <th scope="col" className="py-3 px-6">Price</th>
                <th scope="col" className="py-3 px-6">Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2 border-b-slate-600 bg-secondary hover:bg-primary transition-all">
                <td className="flex justify-around items-center px-6 py-4 font-medium whitespace-nowrap hover:text-white hover:cursor-pointer">
                  <Image src="/images/f1.png" width={50} height={50} alt="" />
                  <span>Good Pizza</span>
                </td>
                <td className="px-6 py-4 font-medium whitespace-nowrap hover:text-white hover:cursor-pointer">
                  <span>Extra Cheese,Mayonnaise,Ketchup</span>
                </td>
                <td className="px-6 py-4 font-medium whitespace-nowrap hover:text-white hover:cursor-pointer">$20</td>
                <td className="px-6 py-4 font-medium whitespace-nowrap hover:text-white hover:cursor-pointer">1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-secondary text-white min-h-[calc(100vh_-_392px)] flex flex-col justify-center items-center px-8">
          <Title addClass="text-4xl uppercase">Cart Total</Title>
          <div className="text-left w-full flex flex-col gap-1 my-6">
            <span>
              <strong>Subtotal: </strong>$20
            </span>
            <span>
              <strong>Discount: </strong>$0
            </span>
            <span>
              <strong>Total: </strong>$20
            </span>
          </div>
          <button className="btn-primary uppercase w-full">Checkout now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
