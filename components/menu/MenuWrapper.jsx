import React from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuButton = ({ buttonName }) => {
  return (
    <div>
      <button className="btn-secondary">
        {buttonName ? buttonName : "Button"}
      </button>
    </div>
  );
};

const MenuWrapper = () => {
  return (
    <div className="container mx-auto flex flex-col items-center mb-16">
      <div className="">
      <Title addClass="text-slate-800 text-4xl text-center">Our Menu</Title>
      <div className="flex gap-2 mt-10">
        <MenuButton buttonName="All" />
        <MenuButton buttonName="Burger" />
        <MenuButton buttonName="Pizza" />
        <MenuButton buttonName="Pasta" />
        <MenuButton buttonName="Fries" />
      </div>
      </div>
      <div className="mt-8 grid xl:grid-cols-3 lg:grid-cols-2 gap-6">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
      <button className="btn-primary mt-9">View More</button>
    </div>
  );
};

export default MenuWrapper;
