import React, { useEffect, useState } from "react";
import Data from "../../../Api";

import ProductCard from "./ProductCard";
import Product from "../../../models/Product";

import { useDispatch, useSelector } from "react-redux";
import { getProd } from "../../../Actions/GetProductAction";
export const ProductCards = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState(Object);
  const [testProd, setTest] = useState(Object);

  // @ts-ignore
  const prod = useSelector((state) => state.products.products);

  // @ts-ignore
  const loading = useSelector((state) => state.products.loading);

  const Api = new Data();

  const getProducts = async () => {
    const products = await Api.getProducts();
    setProducts(products);
  };

  const testProducts = () => {
    getProd(dispatch);
  };

  useEffect(() => {
    setTest(prod);
  }, [loading]);

  useEffect(() => {
    testProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="productCards">
      {products.length > 0 ? (
        products.map((e: Product) => {
          return <ProductCard key={e.id} product={e} />;
        })
      ) : (
        <p>We dont have products</p>
      )}
    </div>
  );
};
