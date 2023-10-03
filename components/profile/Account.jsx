import React from "react";
import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";
import { useFormik } from "formik";
import { profileSchema } from "@/schema/profile";

const Account = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((r) => setTimeout(r, 1000));
    actions.resetForm();
  };
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        phoneNumber: "",
        email: "",
        address: "",
        birthday: "",
        bio: "",
      },
      onSubmit,
      validationSchema: profileSchema,
    });
  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
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
      name: "address",
      type: "text",
      placeholder: "Your Address",
      value: values.address,
      errorMessage: errors.address,
      touched: touched.address,
    },
    {
      id: 5,
      name: "birthday",
      type: "datetime-local",
      placeholder: "Your birthday",
      value: values.birthday,
      errorMessage: errors.birthday,
      touched: touched.birthday,
    },
    {
      id: 6,
      name: "bio",
      type: "text",
      placeholder: "Bio",
      value: values.bio,
      errorMessage: errors.bio,
      touched: touched.bio,
    },
  ];
  return (
    <form className="p-8 w-full">
      <Title addClass="text-4xl mb-8">Account Settings</Title>
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
      <button className="btn-primary w-32 mt-8">Update</button>
    </form>
  );
};

export default Account;
