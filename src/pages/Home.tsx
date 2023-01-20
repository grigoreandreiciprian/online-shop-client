import React from "react";
import JSNavbar from "./components/Header/JSNavbar";
import Carousel from "./components/Header/Carousel";
import Intro from "./components/mainComponents/Intro";
import { useEffect } from "react";
import { useSelector } from "react-redux";
// import ProductCard from './components/mainComponents/ProductCard'

import { ProductCards } from "./components/mainComponents/ProductCards";
import FooterMain from "./components/Footer/FooterMain";

const Home: React.FC = () => {
  //@ts-ignore
  const token: string = useSelector((state) => state.logedUser.user.token);

  useEffect(() => {
    if (token != undefined) {
      localStorage.setItem("token", JSON.stringify(token));
    }
  }, [token]);

  return (
    <>
      <JSNavbar />
      <Carousel />
      <Intro />
      <ProductCards />
      <FooterMain />
    </>
  );
};

export default Home;
