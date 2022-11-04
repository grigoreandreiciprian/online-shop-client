import React, { useEffect, useState } from "react";
import Data from "../../../Api";

import ProductCard from "./ProductCard";
import Product from "../../../models/Product";

export const ProductCards = () => {
  const [products, setProducts] = useState([]);

  const Api = new Data();

  const getProducts = async () => {
    const products = await Api.getProducts();

  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="productCards">

      <ProductCard />
    </div>
  );
};
