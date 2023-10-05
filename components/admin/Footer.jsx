import React, { useState } from "react";
import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";
import { useFormik } from "formik";
import { footerSchema } from "@/schema/footer";
import { FaTrash } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const [linkAdress, setLinkAdress] = useState("https:// ");
  const [iconName, setIconName] = useState("");
  const [icons, setIcons] = useState([
    "facebook",
    "twitter",
    "linkedin",
    "discord",
    "instagram",
  ]);

  const onSubmit = async (values, actions) => {
    await new Promise((r) => setTimeout(r, 1000));
    actions.resetForm();
  };
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        location: "",
        phoneNumber: "",
        email: "",
        desc: "",
        day: "",
        time: "",
      },
      onSubmit,
      validationSchema: footerSchema,
    });
  const inputs = [
    {
      id: 1,
      name: "location",
      type: "text",
      placeholder: "Your location",
      value: values.location,
      errorMessage: errors.location,
      touched: touched.location,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "text",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 4,
      name: "desc",
      type: "text",
      placeholder: "Your description",
      value: values.desc,
      errorMessage: errors.desc,
      touched: touched.desc,
    },
    {
      id: 5,
      name: "day",
      type: "text",
      placeholder: "Working day",
      value: values.day,
      errorMessage: errors.day,
      touched: touched.day,
    },
    {
      id: 6,
      name: "time",
      type: "text",
      placeholder: "Working time",
      value: values.time,
      errorMessage: errors.time,
      touched: touched.time,
    },
  ];
  return (
    <form className="p-8 w-full">
      <Title addClass="text-4xl mb-8">Footer Settings</Title>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        ))}
      </div>
      <div className="flex items-center md:flex-row flex-col md:gap-0 gap-6 justify-between mt-8">
        <div className="flex gap-4 items-center">
          <Input placeholder="Link adress" value="https://" onChange="" />
          <Input
            placeholder="Icon"
            value={iconName}
            onChange={(e) => setIconName(e.target.value)}
          />
          <button
            className="btn-primary w-20"
            type="button"
            onClick={() => {
              if (iconName) {
                setIcons([...icons, iconName]);
                setIconName("");
              }
            }}
          >
            Add
          </button>
        </div>
        <ul className="flex gap-8 md:justify-self-end">
          {icons.map((icon, index) => (
            <li
              key={index}
              className="w-10 h-10 flex justify-center items-center gap-2"
            >
              <FontAwesomeIcon
                className="text-xl"
                icon={["fab", icon]}
                onClick={() => setIconName(icon)}
              />
              <button type="button" className="text-red-700 hover:text-red-800">
                <FaTrash
                  onClick={() => setIcons(icons.filter((i) => i !== icon))}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button className="btn-primary w-32 mt-8">Update</button>
    </form>
  );
};

export default Footer;
