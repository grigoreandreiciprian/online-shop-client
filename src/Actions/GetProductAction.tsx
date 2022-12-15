import { Action } from "../ActionSet/product/index";
import { ActionType } from "../ActionTypes/ActionTtype";

import { Dispatch } from "redux";
import Data from "../Api";
export const getProd = async (distpatch: Dispatch<Action>) => {
  distpatch({ type: ActionType.PRODUCTS_REQUEST });

  const data = new Data();

  const products = await data.getProducts();

  distpatch({
    type: ActionType.GET_PRODUCTS_SUCCES,
    // @ts-ignore
    payload: products,
  });
};
