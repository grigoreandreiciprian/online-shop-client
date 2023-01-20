import React from "react";
import FooterMain from "../Footer/FooterMain";
import JSNavbar from "../Header/JSNavbar";
import OrderMain from "./OrderMain";

const CartMain = () => {
  return (
    <>
      <JSNavbar />
      <OrderMain />
      <FooterMain />
    </>
  );
};

export default CartMain;
