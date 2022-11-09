import React, { useEffect, useState } from "react";
import Data from "../../../Api";

import ProductCard from "./ProductCard";
import Product from "../../../models/Product";

export const ProductCards = () => {
  const [products, setProducts] = useState(Object);

  const Api = new Data();

  const getProducts = async () => {
    const products = await Api.getProducts();

    setProducts(products)


  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="productCards">
       
       {
        products.length>0?(
          products.map( (e:Product) =>{
            return  <ProductCard key={e.id}  product={e} />
          })
        )

        :
        <p>We dont have products</p>
       }
     
    </div>
  );
};
