import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import React from "react";

const layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default layout;
