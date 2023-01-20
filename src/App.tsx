import React from "react";
import "../src/css/style.css";
import "../src/dist/output.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/components/Register/Register";
import AlertProvider from "./Context/Alert";
import LogIn from "./pages/components/LogIn/LogIn";
import Details from "./pages/components/ProductDetails/Details";
import Cart from "./pages/components/Cart/Cart";
import OrderConfirmed from "./pages/components/OrderConfirmed/OrderConfirmed";
import AccountSettings from "./pages/components/AccountSettings/AccountSettings";
import Favorite from "./pages/components/Favorite/Favorite";

function App() {
  return (
    <BrowserRouter>
      <AlertProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signUp" element={<Register />}></Route>
          <Route path="/LogIn" element={<LogIn />}></Route>
          <Route path="/Details/:productId" element={<Details />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/confirm" element={<OrderConfirmed />}></Route>
          <Route path="/accSetings" element={<AccountSettings />}></Route>
          <Route path="/favorite" element={<Favorite />}></Route>
        </Routes>
      </AlertProvider>
    </BrowserRouter>
  );
}

export default App;
