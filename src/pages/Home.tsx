import React from "react";
import JSNavbar from "./components/Header/JSNavbar";
import Carousel from "./components/Header/Carousel";
import Intro from "./components/mainComponents/Intro";
// import ProductCard from './components/mainComponents/ProductCard'

import { ProductCards } from "./components/mainComponents/ProductCards";
import FooterMain from "./components/Footer/FooterMain";

const Home: React.FC = () => {
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
