import React from "react";
import "../src/css/style.css";
import "../src/dist/output.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import AlertProvider from "./Context/Alert";
import LogIn from "./pages/LogIn";
import Details from "./pages/Details";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <AlertProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signUp" element={<Register />}></Route>
          <Route path="/LogIn" element={<LogIn />}></Route>
          <Route path="/Details" element={<Details />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
        </Routes>
      </AlertProvider>
    </BrowserRouter>
  );
}

export default App;
