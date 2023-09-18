import Image from "next/image";
import React from "react";
import Title from "./ui/Title";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    customPaging: function () {
      return (
        <div className="w-3 h-3 bg-white rounded-full opacity-70 hover:opacity-100 transition-all sm:m-2 mt-5"></div>
      );
    },
  };
  return (
    <div className="h-screen top-0 left-0 right-0 w-full container mx-auto">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
          <Image
            src="/images/hero-bg.jpg"
            layout="fill"
            alt="hero-bg"
            objectFit="cover"
          />
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className="md:mt-96 mt-48 text-white container flex flex-col md:items-start items-center md:text-start text-center gap-10">
            <Title addClass="text-6xl">Fast Food Restaurant</Title>
            <p className="text-sm font-semibold sm:w-1/2 w-full">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              commodi libero pariatur voluptas vero, consequuntur nostrum totam,
              recusandae rerum possimus enim, veniam facere laborum earum atque.
              Quasi illum delectus molestiae quibusdam totam recusandae nesciunt
              ipsum odio quos distinctio eligendi, iure esse illo fuga enim!
              Vitae?
            </p>
            <button className="btn-primary">
              <span className="p-5">Order Now</span>
            </button>
          </div>
        </div>
        <div>
          <div className="md:mt-96 mt-48 text-white container flex flex-col sm:items-start items-center sm:text-start text-center gap-10">
            <Title addClass="text-6xl">Fast Food Restaurant</Title>
            <p className="text-sm font-semibold sm:w-1/2 w-full">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              commodi libero pariatur voluptas vero, consequuntur nostrum totam,
              recusandae rerum possimus enim, veniam facere laborum earum atque.
              Quasi illum delectus molestiae quibusdam totam recusandae nesciunt
              ipsum odio quos distinctio eligendi, iure esse illo fuga enim!
              Vitae?
            </p>
            <button className="btn-primary">
              <span className="p-5">Order Now</span>
            </button>
          </div>
        </div>
        <div>
          <div className="md:mt-96 mt-48 text-white container flex flex-col sm:items-start items-center sm:text-start text-center gap-10">
            <Title addClass="text-6xl">Fast Food Restaurant</Title>
            <p className="text-sm font-semibold sm:w-1/2 w-full">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              commodi libero pariatur voluptas vero, consequuntur nostrum totam,
              recusandae rerum possimus enim, veniam facere laborum earum atque.
              Quasi illum delectus molestiae quibusdam totam recusandae nesciunt
              ipsum odio quos distinctio eligendi, iure esse illo fuga enim!
              Vitae?
            </p>
            <button className="btn-primary">
              <span className="p-5">Order Now</span>
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
