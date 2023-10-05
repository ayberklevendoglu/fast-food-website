import React from "react";
import Title from "../ui/Title";
import Input from "../form/Input";

const Category = () => {
  const [category, setCategory] = React.useState([
    "Pizza",
    "Hamburger",
    "Drink",
  ]);

  const [inputText, setInputText] = React.useState("");

  return (
    <div className="p-8 w-full self-start">
      <Title addClass="text-4xl mb-8 text-center">Categories</Title>
      <div>
        <div className="flex gap-10 flex-1 items-center">
          <Input
            placeholder="Category name"
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          />
          <button
            className="btn-primary w-20"
            onClick={() => {
              if (inputText === "") return;
              setCategory([...category, inputText]);
              setInputText("");
            }}
          >
            Add
          </button>
        </div>
        <div className="mt-10">
          {category.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-2">
              <p className="capitalize font-medium">{item}</p>
              <button
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white mx-2"
                onClick={() => {
                  const newCategory = category.filter((item, i) => i !== index);
                  setCategory(newCategory);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
