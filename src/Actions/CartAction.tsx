import { Dispatch } from "redux";
import { Action } from "../ActionSet/cart/index";
import { ActionType } from "../ActionTypes/ActionTtype";
import Data from "../Api";
import OrderDetails from "../models/OrderDetails";
import Product from "../models/Product";

export const AddCart = async (
  product: Product,
  distpatch: Dispatch<Action>
) => {
  // distpatch({ type: ActionType.ADD_TO_CART_REQUEST });

  const data = new Data();

  const products = await data.getProducts();

  // @ts-ignore
  const prod = products.filter((e) => e.id == product.id)[0];

  const details: OrderDetails = {
    id: prod.id,
    price: prod.price,
    quantity: 1,
  };

  distpatch({
    type: ActionType.ADD_CART_SUCCES,
    payload: details,
  });
};

export const removeFromCart = (id: number, dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.CART_REMOVE_ITEM,
    payload: id,
  });
};
