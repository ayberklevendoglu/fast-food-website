import Image from "next/image";
import React from "react";
import Title from "./ui/Title";
import { BsFillCartFill } from "react-icons/bs";

const CampaignItem = ({ image }) => {
  return (
    <div className="flex bg-secondary p-6 rounded-lg gap-4 w-full">
      <div className="rounded-full border-4 border-primary overflow-hidden hover:bg-primarydark">
        <Image
          src={image ? image : "/images/o1.jpg"}
          alt="campaign"
          width={180}
          height={180}
          objectFit="cover"
          className="hover:scale-110 transition-all"
        />
      </div>
      <div className="flex flex-col justify-center gap-4">
        <Title addClass="text-center text-3xl text-white">Tasty Thursday</Title>
        <div className="flex items-end gap-1">
          <Title addClass="text-center text-5xl text-white">20%</Title>
          <Title addClass="text-center text-xl text-white">Off</Title>
        </div>
        <button className="btn-primary flex justify-center items-center gap-1">
          Order Now <BsFillCartFill className="text-xl" />
        </button>
      </div>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className="flex container gap-8 mx-auto py-20">
      <CampaignItem image={"/images/o1.jpg"} />
      <CampaignItem image={"/images/o2.jpg"} />
    </div>
  );
};

export default Campaigns;
