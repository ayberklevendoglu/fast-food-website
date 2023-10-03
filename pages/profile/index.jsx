import Image from "next/image";
import { useState } from "react";
import { AiFillHome, AiOutlineKey } from "react-icons/ai";
import { FaBowlFood } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import Account from "@/components/profile/Account";
import Password from "@/components/profile/Password";
import Orders from "@/components/profile/Orders";

const Profile = () => {
  const [tabs, setTabs] = useState(0);
  return (
    <div className="flex justify-center items-center lg:flex-row flex-col px-10 min-h-[calc(100vh_-_392px)]">
      <div className="border lg:mt-0 mt-10 border-gray-300 h-fit w-64">
        <div className="border-b border-gray-300 flex flex-col items-center gap-4 p-3">
          <Image
            src="/images/client1.jpg"
            width={100}
            height={100}
            alt="profile_photo"
            className="rounded-full"
          />
          <span className="text-2xl font-bold">Username</span>
        </div>
        <div className="flex flex-col font-medium">
          <button
            className={`border-b border-gray-300  w-full p-2 text-left flex items-center gap-1 ${
              tabs === 0 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(0)}
          >
            <AiFillHome />
            Account
          </button>
          <button
            className={`border-b border-gray-300  w-full p-2 text-left flex items-center gap-1 ${
              tabs === 1 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(1)}
          >
            <AiOutlineKey />
            Password
          </button>
          <button
            className={`border-b border-gray-300  w-full p-2 text-left flex items-center gap-1 ${
              tabs === 2 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(2)}
          >
            <FaBowlFood />
            Orders
          </button>
          <button
            className={`border-b border-gray-300  w-full p-2 text-left flex items-center gap-1 ${
              tabs === 3 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(3)}
          >
            <BiLogOut />
            Logout
          </button>
        </div>
      </div>
      {tabs === 0 && <Account />}
      {tabs === 1 && <Password />}
      {tabs === 2 && <Orders/>}
    </div>
  );
};

export default Profile;
