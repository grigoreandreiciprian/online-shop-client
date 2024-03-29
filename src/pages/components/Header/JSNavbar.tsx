import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import logoBlack from "../../../imgs/logo-black.png";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../Actions/LogInAction";
import { useCookies } from "react-cookie";

const JSNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(["authentificatedUser"]);

  // @ts-ignore
  const user = cookies.authentificatedUser;

  const Out = () => {
    setCookie("authentificatedUser", "");
    logOut(dispatch);
    navigate("/LogIn");
  };

  const toCart = () => {
    navigate("/cart");
  };

  const home = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-wrap place-items-top h-20 ">
      <section className="relative mx-auto">
        {/* <!-- navbar --> */}
        <nav className="flex justify-center  bg-white-900 text-black w-screen">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            <img className="h-9" src={logoBlack} alt=""></img>
            {/* <!-- Nav Links --> */}
            <ul className="nav">
              <li>
                <a className="hover:text-red-500" href="#" onClick={home}>
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-red-500" href="#">
                  Catagory
                </a>
              </li>
              <li>
                <a className="hover:text-red-500" href="#">
                  Collections
                </a>
              </li>
              <li>
                <a className="hover:text-red-500" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            {/* <!-- Header Icons --> */}

            {(() => {
              if (user) {
                return (
                  <div className="hidden xl:flex items-center space-x-5 items-center">
                    <a className="hover:text-red-600" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </a>
                    <a
                      className="flex items-center hover:text-red-500"
                      onClick={toCart}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="flex absolute -mt-5 ml-4">
                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                      </span>
                    </a>
                    {/* <!-- Sign In / Register      --> */}
                    <a
                      className="flex items-center hover:text-red-500"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 hover:text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </a>

                    <a
                      className="flex items-center hover:text-red-500"
                      href="#"
                      onClick={Out}
                    >
                      <i className="fa-solid fa-right-to-bracket"></i>
                    </a>
                  </div>
                );
              } else {
                return (
                  <div className="logOut">
                    <p
                      onClick={() => {
                        navigate("/LogIn");
                      }}
                    >
                      Log in
                    </p>
                    <p
                      onClick={() => {
                        navigate("/SignUp");
                      }}
                    >
                      Sign in
                    </p>
                  </div>
                );
              }
            })()}
          </div>
          {/* <!-- Responsive navbar --> */}
          <a className="xl:hidden flex mr-6 items-center" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="flex absolute -mt-5 ml-4">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
          </a>
          <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </a>
        </nav>
      </section>
    </div>
  );
};

export default JSNavbar;
