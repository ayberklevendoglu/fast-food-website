import React from "react";
import Image from "next/image";
import Title from "../ui/Title";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const Products = () => {
  return (
    <div className="p-8 w-full self-start">
      <Title addClass="text-4xl mb-8 text-center">Products</Title>
      <div className="flex items-center mx-auto overflow-x-auto">
        <table className="w-full min-w-[900px] text-center text-gray-500">
          <thead className="text-xs text-gray-400 uppercase bg-slate-600">
            <tr>
              <th scope="col" className="py-3 px-6">
                Image
              </th>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                Title
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2 border-b-slate-600 bg-secondary hover:bg-primary transition-all">
              <td className="flex justify-around items-center px-6 py-4 font-medium whitespace-nowrap hover:text-white hover:cursor-pointer">
                <Image
                  src="/images/f1.png"
                  width={50}
                  height={50}
                  alt="food1"
                />
              </td>
              <td className="px-6 py-4 font-medium whitespace-nowrap hover:text-white hover:cursor-pointer">
                <span>5464637</span>
              </td>
              <td className="px-6 py-4 font-medium whitespace-nowrap hover:text-white hover:cursor-pointer">
                Good Pizza
              </td>
              <td className="px-6 py-4 font-medium whitespace-nowrap hover:text-white hover:cursor-pointer">
                $29
              </td>
              <td className="px-6 py-4 font-medium whitespace-nowrap hover:text-white">
                <div>
                  <button className="bg-green-500 hover:bg-green-600 px-2 py-2 rounded-md text-white">
                    <FaEdit />
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 px-2 py-2 rounded-md text-white mx-2">
                    <FaTrashAlt />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
