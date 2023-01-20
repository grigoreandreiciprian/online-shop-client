import React from "react";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Data from "../../../Api";
import LogToken from "../../../models/Token";
import ProductBox from "./ProductBox";
import OrderDetails from "../../../models/OrderDetails";
import JSNavbar from "../Header/JSNavbar";
import FooterMain from "../Footer/FooterMain";

const OrderConfirmed: React.FC = () => {
  const [cookies, setCookie] = useCookies(["authentificatedUser"]);
  const [user, setUser] = useState(cookies.authentificatedUser);
  const [totalPrice, setTotalPrice] = useState(Number);

  //@ts-ignore
  const cart = useSelector((state) => state.cart.cartItems);

  const api = new Data();

  const findUser = async () => {
    const users = await api.getUsers();

    //@ts-ignore
    const client = users.filter((e: LogToken) => e.id === user.id)[0];

    setUser(client);
  };

  const sumTotal = () => {
    let total = 5;

    cart.forEach((e: OrderDetails) => {
      total += e.price * e.quantity;
    });

    setTotalPrice(total);
  };

  useEffect(() => {
    findUser();
    sumTotal();
  }, []);
  return (
    <>
      <JSNavbar />
      <div className="OrderConfirmed">
        <div className="orderBox">
          <div className="title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h1>We recived your order !</h1>
            <p>Your order #2939993 is completed and ready to ship</p>
          </div>

          <div className="orderContainer">
            <h1>Shipping details</h1>
            <p>Name: {user.fullName}</p>
            <p>Country: {user.country}</p>
            <p>Province: {user.province}</p>
            <p>City: {user.city}</p>
            <p>Adress: {user.streetAdress}</p>
            {/* <p>Strada sebesului nr 678, Turnu Rosu , Romania</p> */}
          </div>

          <div className="orderContainer">
            <h1>Order items</h1>

            {cart.length > 0 ? (
              cart.map((e: OrderDetails) => {
                return <ProductBox orderDetails={e} key={e.id} />;
              })
            ) : (
              <p>No products</p>
            )}

            <div className="totalBox">
              <div className="itemName">
                <h1>Shipping cost</h1>
              </div>

              <div className="itemPrice">
                <p>$5</p>
              </div>
            </div>

            <div className="totalBox">
              <div className="itemName">
                <h1>Total</h1>
              </div>

              <div className="itemPrice">
                <p>${totalPrice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterMain />
    </>
  );
};

export default OrderConfirmed;
