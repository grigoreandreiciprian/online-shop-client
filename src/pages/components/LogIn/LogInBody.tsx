import React from "react";
import { useState, useEffect, useContext } from "react";

import draw2 from "../../../imgs/draw2.png";
import { useNavigate } from "react-router-dom";

interface props {
  handleChanger: (email: string, password: string) => void;
  logIn: () => void;

  err: Array<String>;
}

const LogInBody: React.FC<props> = ({ handleChanger, logIn, err }: props) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState(String);
  const [password, setPassword] = useState(String);

  const onChange = (e: React.FormEvent<HTMLDivElement>) => {
    let obj = e.target as HTMLInputElement;

    if (obj.classList.contains("email")) {
      setEmail(obj.value);
    } else if (obj.classList.contains("password")) {
      setPassword(obj.value);
    }
  };

  useEffect(() => {
    handleChanger(email, password);
  }, [email, password]);

  const toSign = () => {
    navigate("/SignUp");
  };

  return (
    <>
      <div className="formContainer">
        <div className="formBox">
          <div className="logImg">
            <img src={draw2} alt="pic"></img>
          </div>

          <section>
            <div>
              <span className="text-sm text-gray-900">Welcome back</span>
              <h1 className="text-2xl font-bold">Login to your account</h1>
            </div>

            <div className="inputs" onChange={onChange}>
              <div className="my-3">
                <label className=" block text-md mb-2">Email</label>
                <input
                  className="email px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                  type="email"
                  name="password"
                  placeholder="email"
                ></input>
              </div>
              <div className="mt-5">
                <label className=" block text-md mb-2">Password</label>
                <input
                  className="password px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                  type="password"
                  name="password"
                  placeholder="password"
                ></input>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  name="rememberme"
                ></input>
                <span className="text-sm ml-1">Remember Me</span>
              </div>
              <span className="text-sm text-blue-700 hover:underline cursor-pointer">
                Forgot password?
              </span>
            </div>

            {err.length > 0 ? (
              err.map((e) => {
                return (
                  <div
                    className="alertMsg px-4 py-3 rounded relative w-[20%]"
                    role="alert"
                  >
                    <span className="block sm:inline">{e}</span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
                  </div>
                );
              })
            ) : (
              <p className="none"></p>
            )}

            <button
              className="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100"
              onClick={logIn}
            >
              Login now
            </button>
            <div className="flex  space-x-2 justify-center items-end bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100">
              <img
                className=" h-5 cursor-pointer"
                src="https://i.imgur.com/arC60SB.png"
              ></img>
              <button>Or sign-in with google</button>
            </div>
          </section>
          <p className="mt-8">
            {" "}
            Dont have an account?{" "}
            <span
              className="cursor-pointer text-sm text-blue-600"
              onClick={toSign}
            >
              {" "}
              Join free today
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default LogInBody;
