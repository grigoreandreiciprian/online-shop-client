import React from "react";
import Data from "../../../Api";
import OrderDetails from "../../../models/OrderDetails";
import { useEffect, useState } from "react";
import Product from "../../../models/Product";

interface cart {
  orderDetails: OrderDetails;
}

export const ProductBox: React.FC<cart> = ({ orderDetails }: cart) => {
  const api = new Data();
  const [product, setProduct] = useState(Object);
  const [picture, setPicture] = useState("");
  const [totalPrice, setTotalPrice] = useState(Number);

  const findProduct = async () => {
    const products = await api.getProducts();

    //@ts-ignore
    const prod = products.filter((e) => e.id === orderDetails.id)[0];

    setProduct(prod);
  };

  function toBase64(arr: []) {
    return btoa(
      arr.reduce((data, byte) => data + String.fromCharCode(byte), "")
    );
  }

  const totalSum = () => {
    const total = orderDetails.price * orderDetails.quantity;

    setTotalPrice(total);
  };

  useEffect(() => {
    if (product.picture != null) {
      setPicture(`data:image/png;base64,${toBase64(product.picture.data)}`);
    }
  }, [product]);

  useEffect(() => {
    findProduct();
    totalSum();
  }, []);
  return (
    <div className="itemBox">
      <div className="item">
        <img src={picture}></img>
        <div className="itemName">
          {(() => {
            if (product) {
              return (
                <>
                  <h1>{product.name}</h1>
                  <p>x{orderDetails.quantity}</p>
                  <p>{product.category}</p>
                </>
              );
            }
          })()}
        </div>
      </div>

      <div className="itemPrice">
        <p>${totalPrice}</p>
      </div>
    </div>
  );
};

export default ProductBox;
