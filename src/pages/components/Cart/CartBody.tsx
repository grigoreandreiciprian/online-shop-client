import React from "react";

import { useNavigate } from "react-router-dom";
import OrderDetails from "./OrderMain";
import Sumary from "./Sumary";

const CartBody = () => {
  const navigate = useNavigate();

  const home = () => {
    navigate("/");
  };
  return (
    <div className="cartContainer">
      <OrderDetails />
    </div>
  );
};

export default CartBody;
