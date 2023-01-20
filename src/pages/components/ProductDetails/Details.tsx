import React from "react";
import FooterMain from "../Footer/FooterMain";
import JSNavbar from "../Header/JSNavbar";
import ProductDetailsMain from "./ProductDetailsMain";

const Details: React.FC = () => {
  return (
    <>
      <JSNavbar />
      <ProductDetailsMain />
      <FooterMain />
    </>
  );
};

export default Details;
