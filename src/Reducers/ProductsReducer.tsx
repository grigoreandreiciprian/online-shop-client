import { Action } from "../ActionSet/product/index";
import { ActionType } from "../ActionTypes/ActionTtype";

export const ProductReducer = (state = { products: [] }, action: Action) => {
  switch (action.type) {
    case ActionType.PRODUCTS_REQUEST:
      return { loading: true };

    case ActionType.GET_PRODUCTS_SUCCES:
      return { loading: false, products: action.payload };

    default:
      return state;
  }
};
