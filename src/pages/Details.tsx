import React from "react";
import FooterMain from "./components/Footer/FooterMain";
import JSNavbar from "./components/Header/JSNavbar";
import ProductDetailsMain from "./components/ProductDetails/ProductDetailsMain";

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
