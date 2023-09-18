import Image from "next/image";
import React from "react";
import Title from "./ui/Title";

const About = ({ addClass }) => {
  return (
    <div className={`${addClass} bg-secondary py-16 flex items-center text-white`}>
      <div className="container mx-auto  flex justify-center items-center gap-10 flex-wrap-reverse">
        <div className="relative lg:w-[445px] lg:h-[600px] w-[300px] h-[455px]">
          <Image src="/images/about-img.png" alt="about-img" layout="fill" />
        </div>
        <div className=" max-w-xl flex flex-col gap-5 lg:text-start text-center lg:items-start items-center">
          <Title addClass="text-6xl">We are Feane</Title>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All
          </p>
          <button className="btn-primary">
            <span className="p-5">Read More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
