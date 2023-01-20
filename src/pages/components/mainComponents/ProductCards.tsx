import React, {
  useEffect,
  useState,
  useContext,
  ChangeEventHandler,
} from "react";
import Data from "../../../Api";

import ProductCard from "./ProductCard";
import Product from "../../../models/Product";

import { useDispatch, useSelector } from "react-redux";
import { getProd } from "../../../Actions/GetProductAction";
import { Alerts } from "../../../Context/Alert";
import Pagination from "./Pagination";
export const ProductCards = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState(Object);
  const [testProd, setTest] = useState(Object);
  const [alert, setAlert] = useState(Alerts);
  const [filter, setFilterValue] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(Object);
  const [pages, setPages] = useState(Object);
  const [pageNumber, setPageNumber] = useState(1);
  const [paginatedProducts, setPaginatedProducts] = useState(Object);

  // @ts-ignore
  const prod = useSelector((state) => state.products.products);

  // @ts-ignore
  const loading = useSelector((state) => state.products.loading);

  const Api = new Data();

  const getProducts = async () => {
    const products = await Api.getProducts();
    setProducts(products);
  };

  const closeAlert = () => {
    //@ts-ignore
    setAlert("");
  };

  const filterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let obj = e.target.value;

    setFilterValue(obj);
  };

  const filterProducts = async () => {
    const filterValue = filter;

    if (products.length > 0) {
      const filteredProducts = products.filter(
        (e: Product) => e.category === filterValue
      );
      setFilteredProducts(filteredProducts);
    }
  };

  const paginateProducts = async (e: number) => {
    const prods = await Api.paginateProducts(4, e);

    setPages(prods.pages);
    setPaginatedProducts(prods.products);
  };

  useEffect(() => {
    setTest(prod);
    paginateProducts(pageNumber);
  }, [loading]);

  useEffect(() => {
    getProducts();
  });

  useEffect(() => {
    filterProducts();
  }, [filter]);

  return (
    <>
      <div className="featuredProducts">
        <h1>Our featured products</h1>
        {/* <button onClick={paginateProducts}>Test</button> */}
        <div className="filterBox">
          <select className="filter" onChange={filterChange}>
            <option>All</option>
            <option>Clothing</option>
            <option>Acessories</option>
          </select>
        </div>

        <div className="productCards">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((e: Product) => {
              return <ProductCard key={e.id} product={e} />;
            })
          ) : paginatedProducts.length > 0 ? (
            paginatedProducts.map((e: Product) => {
              return <ProductCard key={e.id} product={e} />;
            })
          ) : (
            <p>We dont have products</p>
          )}
        </div>

        <div className="paginationBox">
          <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px">
              <li></li>
              <li>
                {pages.length > 0 ? (
                  //@ts-ignore
                  pages.map((e) => {
                    return (
                      <p
                        aria-current="page"
                        className="pageNumber"
                        key={e.number}
                        onClick={() => {
                          paginateProducts(e.number);
                        }}
                      >
                        {e.number}
                      </p>
                    );
                  })
                ) : (
                  <></>
                )}
              </li>
              <li></li>
            </ul>
          </nav>
        </div>
        <div className="Productalerts">
          {
            //@ts-ignore
            alert.length > 0 ? (
              //@ts-ignore
              alert.map((e) => {
                return (
                  <div
                    className="alertMsg bg-green-100 border border-red-400 text-green-700 px-4 py-3 rounded relative w-[20%]"
                    role="alert"
                  >
                    <span className="block sm:inline">{e}</span>
                    <span
                      className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer"
                      onClick={closeAlert}
                    >
                      x
                    </span>
                  </div>
                );
              })
            ) : (
              <p className="none"></p>
            )
          }
        </div>
      </div>
    </>
  );
};
