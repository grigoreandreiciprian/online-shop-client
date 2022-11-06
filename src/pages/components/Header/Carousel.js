import React from "react";

import "tw-elements";
import run from "../../../imgs/just-run.png";

const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
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
      <div class="carousel-inner relative w-full overflow-hidden">
        <div class="carousel-item carouselImg active float-left w-full">
          <img
            src="https://mmasport.7uptheme.net/wp-content/uploads/2019/02/slider01.jpg"
            class="carouselImg"
            alt="Wild Landscape"
          />

          <div class="carousel-caption2 carousel ">
            <h1 className="m-4">Run fast , run slow</h1>
            <h1>Run far, run close</h1>
            <div className="imgContainer">
              <img src={run} alt=""></img>
            </div>
          </div>
        </div>
        <div class="carousel-item float-left w-full">
          <img
            src="https://mmasport.7uptheme.net/wp-content/uploads/2019/02/slider02.jpg"
            class="carouselImg"
            alt="Camera"
          />

          <div class="carousel-caption2 carousel ">
            <div className="sliderContainer2">
              <h1 className="title1 ">New collection</h1>
              <h1 className="title2">Join the the revolution</h1>
              <button className="introBtn">Shop now</button>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
