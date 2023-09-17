import React from "react";
import Title from "./ui/Title";
import Input from "./form/Input";

const Reservation = () => {
  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
    },
    {
      id: 4,
      name: "persons",
      type: "number",
      placeholder: "How Many Persons?",
    },
    {
      id: 5,
      name: "persons",
      type: "datetime-local",
      placeholder: "",
    },
  ];
  return (
    <div className="container mx-auto py-12">
      <Title addClass={"text-4xl font-bold mb-4 lg:block flex justify-center"}>
        Book A Table
      </Title>
      <div className="flex lg:flex-row flex-col-reverse flex-1 justify-center gap-10">
        <div className="flex flex-col items-start justify-between w-full h-inherit lg:gap-0 gap-3">
          {inputs.map((input) => (
            <Input key={input.id} {...input} />
          ))}
          <div className="w-full lg:block flex justify-center">
            <button className="btn-primary">
              <span className="p-5">BOOK NOW</span>
            </button>
          </div>
        </div>

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
