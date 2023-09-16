import Campaigns from "@/components/Campaigns";
import Carousel from "@/components/Carousel";
import Header from "@/components/layout/Header";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Carousel/>
      <Campaigns />
    </React.Fragment>
  );
}
