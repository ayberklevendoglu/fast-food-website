import React from "react";
import Title from "./ui/Title";
import Input from "./form/Input";
import { useFormik } from "formik";

const Reservation = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((r) => setTimeout(r, 1000));
    actions.resetForm();
  };
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      persons: "",
      date: "",
    },
    onSubmit,
  });
  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: values.fullName,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
    },
    {
      id: 4,
      name: "persons",
      type: "number",
      placeholder: "How Many Persons?",
      value: values.persons,
    },
    {
      id: 5,
      name: "date",
      type: "datetime-local",
      placeholder: "",
      value: values.date,
    },
  ];
  return (
    <div className="container mx-auto py-12">
      <Title addClass={"text-4xl font-bold mb-4 lg:block flex justify-center"}>
        Book A Table
      </Title>
      <div className="flex lg:flex-row flex-col-reverse flex-1 justify-center gap-10">
        <form
          className="flex flex-col items-start justify-between w-full h-inherit lg:gap-0 gap-3"
          onSubmit={handleSubmit}
        >
          {inputs.map((input) => (
            <Input key={input.id} {...input} onChange={handleChange} />
          ))}
          <div className="w-full lg:block flex justify-center">
            <button className="btn-primary" type="submit">
              <span className="p-5">BOOK NOW</span>
            </button>
          </div>
        </form>

        <div className="w-full lg:block flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19431.764587414593!2d13.402165056808537!3d52.49777225259531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1694982876352!5m2!1str!2str"
            width="600"
            height="450"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
