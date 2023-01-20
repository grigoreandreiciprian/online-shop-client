import React from "react";
import ProductDetailsBody from "./ProductDetailsBody";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Data from "../../../Api";
import Product from "../../../models/Product";

const ProductDetailsMain: React.FC = () => {
  let id = useParams().productId;
  const [product, setProduct] = useState(Object);
  const findProduct = async () => {
    const data = new Data();

    const products = await data.getProducts();

    //@ts-ignore
    const product = products.filter((e: Product) => e.id == id)[0];

    setProduct(product);
  };

  useEffect(() => {
    findProduct();
  }, []);

  return <ProductDetailsBody product={product} key={product.id} />;
};

export default ProductDetailsMain;
