import Image from "next/image";
import { useState } from "react";
import { MdFoodBank } from "react-icons/md";
import { FaHamburger } from "react-icons/fa";
import { BiLogOut, BiCategory } from "react-icons/bi";
import Products from "@/components/admin/Products";
import Order from "@/components/admin/Order";
import Category from "@/components/admin/Category";
import Footer from "@/components/admin/Footer";

const Profile = () => {
  const [tabs, setTabs] = useState(0);
  return (
    <div className="flex justify-center items-center lg:flex-row flex-col px-10 min-h-[calc(100vh_-_392px)]">
      <div className="border lg:mt-0 mt-10 border-gray-300 h-fit w-64">
        <div className="border-b border-gray-300 flex flex-col items-center gap-4 p-3">
          <Image
            src="/images/admin.png"
            width={100}
            height={100}
            alt="profile_photo"
            className="rounded-full"
          />
          <span className="text-2xl font-bold">Admin</span>
        </div>
        <div className="flex flex-col font-medium">
          <button
            className={`border-b border-gray-300  w-full p-2 text-left flex items-center gap-1 ${
              tabs === 0 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(0)}
          >
            <MdFoodBank className="text-2xl" />
            Products
          </button>

          <button
            className={`border-b border-gray-300  w-full p-2 text-left flex items-center gap-1 ${
              tabs === 1 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(1)}
          >
            <FaHamburger />
            Orders
          </button>

          <button
            className={`border-b border-gray-300  w-full p-2 text-left flex items-center gap-1 ${
              tabs === 2 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(2)}
          >
            <BiCategory />
            Categories
          </button>

          <button
            className={`border-b border-gray-300  w-full p-2 text-left flex items-center gap-1 ${
              tabs === 3 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(3)}
          >
            <BiCategory />
            Footer
          </button>

          <button
            className={`border-b border-gray-300  w-full p-2 text-left flex items-center gap-1 ${
              tabs === 4 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(4)}
          >
            <BiLogOut />
            Logout
          </button>
        </div>
      </div>
      {tabs === 0 && <Products />}
      {tabs === 1 && <Order />}
      {tabs === 2 && <Category />}
      {tabs === 3 && <Footer />}
    </div>
  );
};

export default Profile;
