import React from "react";
import Title from "../ui/Title";

const Orders = () => {
  return (
    <div className="p-8 w-full self-start">
      <Title addClass="text-4xl mb-8 text-center">Orders</Title>
      <div className="flex items-center mx-auto overflow-x-auto">
        <table className="w-full min-w-[900px] text-center text-gray-500">
          <thead className="text-xs text-gray-400 uppercase bg-slate-600">
            <tr>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                Adress
              </th>
              <th scope="col" className="py-3 px-6">
                date
              </th>
              <th scope="col" className="py-3 px-6">
                total
              </th>
              <th scope="col" className="py-3 px-6">
                status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2 border-b-slate-600 bg-secondary hover:bg-primary transition-all">
              <td className="flex justify-around items-center px-6 py-4 font-medium whitespace-nowrap hover:text-white hover:cursor-pointer">
                <span>345345</span>
              </td>
              <td className="px-6 py-4 font-medium whitespace-nowrap hover:text-white hover:cursor-pointer">
                <span>Ankara</span>
              </td>
              <td className="px-6 py-4 font-medium whitespace-nowrap hover:text-white hover:cursor-pointer">
                15-08-2023
              </td>
              <td className="px-6 py-4 font-medium whitespace-nowrap hover:text-white hover:cursor-pointer">
                $29
              </td>
              <td className="px-6 py-4 font-medium whitespace-nowrap hover:text-white hover:cursor-pointer">
                Delivered
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
