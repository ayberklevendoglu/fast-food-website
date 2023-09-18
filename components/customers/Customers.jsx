import React from "react";
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Customers = () => {
  function NextBtn({ onClick }) {
    return (
      <button
        className="absolute -bottom-12 left-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full text-white"
        onClick={onClick}
      >
        <AiOutlineArrowRight />
      </button>
    );
  }

  function PrevBtn({ onClick }) {
    return (
      <button
        className="absolute -bottom-12 right-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full text-white mr-2"
        onClick={onClick}
      >
        <AiOutlineArrowLeft />
      </button>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto my-40">
      <Title addClass={"text-4xl text-center"}>What Says Our Customers</Title>
      <Slider {...settings}>
        <CustomerItem image={"/images/client1.jpg"} />

        <CustomerItem image={"/images/client2.jpg"} />

        <CustomerItem image={"/images/client2.jpg"} />

        <CustomerItem image={"/images/client2.jpg"} />

        <CustomerItem image={"/images/client2.jpg"} />

        <CustomerItem image={"/images/client2.jpg"} />
      </Slider>
    </div>
  );
};

export default Customers;
