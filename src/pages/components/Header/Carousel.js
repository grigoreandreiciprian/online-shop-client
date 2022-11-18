import React, { useContext } from "react";

import { Alerts } from "../../../Context/Alert";
import run from "../../../imgs/just-run.png";

const Carousel = () => {
  const { alert, setAlert } = useContext(Alerts);

  const closeAlert = () => {
    setAlert("");
  };

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>

      <div className="alerts">
        {alert.length > 0 ? (
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
        )}
      </div>

      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item carouselImg active float-left w-full">
          <img
            src="https://mmasport.7uptheme.net/wp-content/uploads/2019/02/slider01.jpg"
            className="carouselImg"
            alt="Wild Landscape"
          />

          <div className="carousel-caption2 carousel ">
            <h1 className="m-4">Run fast , run slow</h1>
            <h1>Run far, run close</h1>
            <div className="imgContainer">
              <img src={run} alt=""></img>
            </div>
          </div>
        </div>
        <div className="carousel-item float-left w-full">
          <img
            src="https://mmasport.7uptheme.net/wp-content/uploads/2019/02/slider02.jpg"
            className="carouselImg"
            alt="Camera"
          />

          <div className="carousel-caption2 carousel ">
            <div className="sliderContainer2">
              <h1 className="title1 ">New collection</h1>
              <h1 className="title2">Join the the revolution</h1>
              <button className="introBtn">Shop now</button>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
