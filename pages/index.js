import About from "@/components/About";
import Campaigns from "@/components/Campaigns";
import Carousel from "@/components/Carousel";
import Reservation from "@/components/Reservation";
import Customers from "@/components/customers/Customers";
import Header from "@/components/layout/Header";
import MenuWrapper from "@/components/menu/MenuWrapper";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation />
      <Customers />
    </React.Fragment>
  );
}
