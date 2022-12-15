import React, { useEffect } from "react";
import { useState, useContext } from "react";
import LogInBody from "./LogInBody";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../../Actions/LogInAction";

import { useCookies } from "react-cookie";
import { Alerts } from "../../../Context/Alert";
import { useNavigate } from "react-router-dom";

const LogInMain: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState(String);
  const [password, setPassword] = useState(String);
  const [err, setErr] = useState(Array<string>);
  const { alert, setAlert } = useContext(Alerts);
  const [cookies, setCookie] = useCookies(["authentificatedUser"]);

  // @ts-ignore
  const user = useSelector((state) => state.logedUser.user);
  // @ts-ignore
  const logged = useSelector((state) => state.logedUser.logged);

  function handleChanger(email: string, password: string) {
    setEmail(email);
    setPassword(password);
  }

  const check = () => {
    setErr([]);

    if (logged) {
      console.log("pass");
    } else {
      setErr((prev) => {
        return [...prev, "Nume sau parole incorecte"];
      });
    }
  };

  useEffect(() => {
    if (logged) {
      setCookie("authentificatedUser", user);
      setAlert(["Log in succesful"]);
      navigate("/");
    }
  }, [logged]);

  const logTest = () => {
    check();
    logIn({ email, password }, dispatch);
  };

  return (
    <>
      <LogInBody handleChanger={handleChanger} logIn={logTest} err={err} />
    </>
  );
};

export default LogInMain;
