import React from "react";
import Title from "./ui/Title";
import {
  FaLocationDot,
  FaPhone,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="bg-secondary w-full text-white pt-10">
      <div className="container mx-auto flex lg:flex-row flex-col justify-around items-center">
        <div className="flex flex-col justify-center items-center gap-2 text-center">
          <Title addClass="text-3xl mb-4">Contact Us</Title>
          <div className="flex gap-2 items-center cursor-pointer hover:text-primary">
            <FaLocationDot className="text-xl" />
            Location
          </div>
          <div className="flex gap-2 items-center cursor-pointer hover:text-primary">
            <FaPhone className="text-xl" />
            Call +01 123456789
          </div>
          <div className="flex gap-2 items-center cursor-pointer hover:text-primary">
            <HiMail className="text-xl" />
            demo@gmail.com
          </div>
        </div>
        <span className="lg:invisible visible lg:w-0 w-[400px] border-b lg:my-0 my-8"></span>

        <div className="flex flex-col justify-center items-center gap-2 w-[400px] text-center">
          <Title addClass="text-5xl mb-4">Feane</Title>
          <div>
            Necessary, making this the first true generator on the Internet. It
            uses a dictionary of over 200 Latin words, combined with
          </div>
          <div className="flex gap-2 text-secondary">
            <div className="w-8 h-8 bg-white flex justify-center items-center rounded-full">
              <FaFacebookF className="text-xl hover:text-primary cursor-pointer" />
            </div>
            <div className="w-8 h-8 bg-white flex justify-center items-center rounded-full">
              <FaXTwitter className="text-xl hover:text-primary cursor-pointer" />
            </div>
            <div className="w-8 h-8 bg-white flex justify-center items-center rounded-full">
              <FaLinkedinIn className="text-xl hover:text-primary cursor-pointer" />
            </div>
            <div className="w-8 h-8 bg-white flex justify-center items-center rounded-full">
              <FaDiscord className="text-xl hover:text-primary cursor-pointer" />
            </div>
            <div className="w-8 h-8 bg-white flex justify-center items-center rounded-full">
              <FaInstagram className="text-xl hover:text-primary cursor-pointer" />
            </div>
          </div>
        </div>
        <span className="lg:invisible visible lg:w-0 w-[400px] border-b lg:my-0 my-8"></span>
        <div className="flex flex-col justify-center items-center gap-2">
          <Title addClass="text-3xl mb-4">Opening Hours</Title>
          <p>Everyday</p>
          <p>14.00 Am - 12.00 Pm</p>
        </div>
      </div>
      <p className="text-center mt-10 pb-2">
        © 2023 All Rights Reserved By Bolthorn
      </p>
    </div>
  );
};

export default Footer;
