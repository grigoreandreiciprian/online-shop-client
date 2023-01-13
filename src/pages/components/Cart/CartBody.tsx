import React from "react";

import { useNavigate } from "react-router-dom";
import OrderDetails from "./OrderDetails";
import Sumary from "./Sumary";

const CartBody = () => {
  const navigate = useNavigate();

  const home = () => {
    navigate("/");
  };
  return (
    <div className="cartContainer">
      <OrderDetails />

      <Sumary />
    </div>
  );
};

export default CartBody;
