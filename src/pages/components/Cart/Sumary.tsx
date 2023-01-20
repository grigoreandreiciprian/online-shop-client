import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Product from "../../../models/Product";
import OrderDetails from "../../../models/OrderDetails";
import Data from "../../../Api";
import { CartItems } from "../../../models/Cart";

interface props {
  quantity: number;

  product: CartItems;
}

const Sumary: React.FC<props> = ({ quantity, product }: props) => {
  const navigate = useNavigate();
  const distpach = useDispatch();
  const home = () => {
    navigate("/");
  };

  //@ts-ignore
  const products = useSelector((state) => state.cart.cartItems);
  const [total, setTotal] = useState(Number);

  const [items, setItems] = useState();

  const api = new Data();

  const totalCost = () => {
    let total: number = 5;

    products.forEach((e: OrderDetails) => {
      total += e.price * e.quantity;
    });

    setTotal(total);
  };

  const checkout = async () => {
    if (products.length != 0) {
      navigate("/confirm");
      await api.sendCart(product);
    } else {
      console.log("NU exista produse in cos");
    }
  };

  //@ts-ignore
  const prods = JSON.parse(localStorage.getItem("items"));

  useEffect(() => {
    if (products.length == 0) {
      console.log("null");
    }
  });

  useEffect(() => {
    totalCost();
  }, [quantity]);

  return (
    <div className="summary">
      <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">
          Items {products.length}
        </span>
        <span className="font-semibold text-sm">{total}$</span>
      </div>
      <div>
        <label className="font-medium inline-block mb-3 text-sm uppercase">
          Shipping
        </label>
        <select className="block p-2 text-gray-600 w-full text-sm mb-4">
          <option className="standard">Standard shipping - $5.00</option>
          {/* <option className="premium">Premium shipping - $15.00</option> */}
        </select>
      </div>
      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase ">
          <span>Total cost</span>
          <span>${total}</span>
        </div>
        <button
          className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
          onClick={checkout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Sumary;
