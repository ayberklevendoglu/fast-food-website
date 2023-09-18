import React from "react";
import Title from "./Title";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Title addClass={"text-4xl"}>Feane</Title>
    </Link>
  );
};

export default Logo;
