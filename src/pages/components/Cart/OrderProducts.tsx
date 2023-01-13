import React from "react";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "../../../models/Product";

import PictureData from "../../../models/PictureData";
import { removeFromCart } from "../../../Actions/CartAction";

interface details {
  detail: {
    id?: number | null;
    price: number;
    quantity: number;
  };
}
const OrderProducts: React.FC<details> = ({ detail }: details) => {
  const distpach = useDispatch();
  const [picture, setPicture] = useState("");
  const [total, setTotal] = useState(detail.price);
  const [quantity, setQuantity] = useState(detail.quantity);
  const [product, setProduct] = useState(Object);

  //@ts-ignore
  const products = useSelector((state) => state.products.products);

  //@ts-ignore
  const loading = useSelector((state) => state.cart.loading);

  const totalPrice = () => {
    setTotal(detail.price * quantity);
  };

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
    }
  };

  const findProduct = () => {
    const prod = products.filter((e: Product) => e.id == detail.id)[0];

    setProduct(prod);

    console.log(product);
  };

  function toBase64(arr: []) {
    return btoa(
      arr.reduce((data, byte) => data + String.fromCharCode(byte), "")
    );
  }

  useEffect(() => {
    if (product.picture != null) {
      setPicture(`data:image/png;base64,${toBase64(product.picture.data)}`);
    }
  }, [product]);

  useEffect(() => {
    if (loading == false) {
      findProduct();
      console.log("cve");
    }
  }, [product]);

  useEffect(() => {
    totalPrice();
  }, [quantity]);

  const remove = () => {
    removeFromCart(product.id, distpach);
  };
  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={picture} alt=""></img>
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{product.name}</span>
          <span className="text-red-500 text-xs">{product.category}</span>
          <a
            className="font-semibold hover:text-red-500 text-gray-500 text-xs"
            onClick={remove}
          >
            Remove
          </a>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <svg
          className="fill-current text-gray-600 w-3"
          viewBox="0 0 448 512"
          onClick={decreaseQuantity}
        >
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>

        <p className="mx-2 border text-center w-8">{quantity}</p>

        <svg
          className="fill-current text-gray-600 w-3"
          viewBox="0 0 448 512"
          onClick={increaseQuantity}
        >
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">
        {detail.price}$
      </span>
      <span className="text-center w-1/5 font-semibold text-sm">{total}$</span>
    </div>
  );
};

export default OrderProducts;
