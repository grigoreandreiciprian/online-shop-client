import { Action } from "../ActionSet/cart";
import { ActionType } from "../ActionTypes/ActionTtype";
import OrderDetails from "../models/OrderDetails";

export const cartReducer = (state = { cartItems: [] }, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_TO_CART_REQUEST:
      return { loading: true };

    case ActionType.ADD_CART_SUCCES:
      const item = action.payload;

      const existItem = state.cartItems.find(
        (e: OrderDetails) => e.id === item.id
      );

      if (existItem) {
        let items = [...state.cartItems];

        items.forEach((e) => {
          if ((e as OrderDetails).id === (existItem as OrderDetails).id) {
            (e as OrderDetails).quantity += 1;
          }
        });

        // console.log(items);

        return {
          ...state,
          cartItems: items,
          loading: false,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
          loading: false,
        };
      }

    case ActionType.CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (x: OrderDetails) => x.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
