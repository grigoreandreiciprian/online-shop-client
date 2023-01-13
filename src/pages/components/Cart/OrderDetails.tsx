import React from "react";
import OrderProducts from "./OrderProducts";
import OrderDetails from "../../../models/OrderDetails";
import { useSelector, useDispatch } from "react-redux";

const Order: React.FC = () => {
  const distpatch = useDispatch();

  // @ts-ignore
  const products = useSelector((state) => state.cart.cartItems);

  return (
    <div className="flex shadow-md my-10">
      <div className="orderDetailsBox">
        <div className="orderTitle">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          <h2 className="font-semibold text-2xl">{products.length} Items</h2>
        </div>
        <div className="orderColumns">
          <h3 className="longH3">Product Details</h3>
          <h3 className="smallH3">Quantity</h3>
          <h3 className="smallH3 ">Price</h3>
          <h3 className="smallH3">Total</h3>
        </div>

        {products.length > 0 ? (
          products.map((e: OrderDetails) => {
            return <OrderProducts key={e.id} detail={e} />;
          })
        ) : (
          <p>There are no products in the cart</p>
        )}
      </div>
    </div>
  );
};

export default Order;
