import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { LogInReducer } from "./Reducers/LogInReducers";
import LogCredentials from "./models/LogCredentials";
import { cartReducer } from "./Reducers/CartReducer";
import { ProductReducer } from "./Reducers/ProductsReducer";

const reducer = combineReducers({
  logedUser: LogInReducer,
  cart: cartReducer,
  products: ProductReducer,
});

const midl = [thunk];

const initialState = {
  logedUser: {
    user: "undefined",
    logged: false,
  },

  cart: {
    cartItems: [],
  },

  products: {
    productsList: "",
  },
};

export const store = createStore(
  reducer,
  //@ts-ignore
  initialState,
  //@ts-ignore
  composeWithDevTools(applyMiddleware(...midl))
);
