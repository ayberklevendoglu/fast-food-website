import React from "react";
import Title from "../ui/Title";

const Order = () => {
  return (
    <div className="p-8 w-full self-start">
      <Title addClass="text-4xl mb-8 text-center">Products</Title>
      <div className="flex items-center mx-auto overflow-x-auto">
        <table className="w-full min-w-[900px] text-center text-gray-500">
          <thead className="text-xs text-gray-400 uppercase bg-slate-600">
            <tr>
              <th scope="col" className="py-3 px-6">
                Product id
              </th>

              <th scope="col" className="py-3 px-6">
                Customer
              </th>

              <th scope="col" className="py-3 px-6">
                Payment
              </th>

              <th scope="col" className="py-3 px-6">
                Status
              </th>

              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2 border-b-slate-600 bg-secondary hover:bg-primary transition-all">
              <td className="px-6 py-4 font-medium whitespace-nowrap hover:text-white hover:cursor-pointer">
                34587345
              </td>

              <td className="px-6 py-4 font-medium whitespace-nowrap hover:text-white hover:cursor-pointer">
                Ayberk Levendoglu
              </td>

              <td className="px-6 py-4 font-medium whitespace-nowrap hover:text-white hover:cursor-pointer">
                Cash
              </td>

              <td className="px-6 py-4 font-medium whitespace-nowrap hover:text-white hover:cursor-pointer">
                Preparing
              </td>

              <td className="px-6 py-4 font-medium whitespace-nowrap hover:text-white">
                <button className="bg-green-500 hover:bg-green-600 px-2 py-2 rounded-md text-white">
                  Approve
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
