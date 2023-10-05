import { useState } from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

// const MenuButton = ({ buttonName, className }) => {
//   return (
//     <div>
//       <button className="btn-secondary">
//         {buttonName ? buttonName : "Button"}
//       </button>
//     </div>
//   );
// };

const MenuWrapper = () => {
  const [activeButton, setActiveButton] = useState(0);
  return (
    <div className="container mx-auto flex flex-col items-center mb-16">
      <div className="">
        <Title addClass="text-slate-800 text-4xl text-center">Our Menu</Title>
        <div className="flex gap-2 mt-10">
          <button
            className={`btn-secondary ${activeButton === 0 && "bg-slate-900 text-white"}`}
            onClick={() => setActiveButton(0)}
          >
            All
          </button>
          <button
            className={`btn-secondary ${activeButton === 1 && "bg-slate-900 text-white"}`}
            onClick={() => setActiveButton(1)}
          >
            Pizza
          </button>
          <button
            className={`btn-secondary ${activeButton === 2 && "bg-slate-900 text-white"}`}
            onClick={() => setActiveButton(2)}
          >
            Hamburger
          </button>
          <button
            className={`btn-secondary ${activeButton === 3 && "bg-slate-900 text-white"}`}
            onClick={() => setActiveButton(3)}
          >
            Drinks
          </button>
          <button
            className={`btn-secondary ${activeButton === 4 && "bg-slate-900 text-white"}`}
            onClick={() => setActiveButton(4)}
          >
            All
          </button>
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
