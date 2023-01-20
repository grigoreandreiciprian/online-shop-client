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

      let items = [...state.cartItems, item];
      localStorage.setItem("items", JSON.stringify(items));

      if (existItem) {
        let items = [...state.cartItems];

        items.forEach((e) => {
          if ((e as OrderDetails).id === (existItem as OrderDetails).id) {
            (e as OrderDetails).quantity += 1;
          }
        });

        localStorage.setItem("items", JSON.stringify(items));
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

    case ActionType.CART_INCREASE_QUANTITY:
      const id = action.payload;

      const prod = state.cartItems.find((e: OrderDetails) => e.id === id);

      if (prod) {
        let items = [...state.cartItems];

        items.forEach((e) => {
          if ((e as OrderDetails).id === (prod as OrderDetails).id) {
            (e as OrderDetails).quantity += 1;
          }
        });
      }

      return {
        ...state,
        loading: false,
      };

    case ActionType.CART_DECREASE_QUANTITY:
      const prodId = action.payload;

      const product = state.cartItems.find(
        (e: OrderDetails) => e.id === prodId
      );

      if (product) {
        let items = [...state.cartItems];

        items.forEach((e) => {
          if ((e as OrderDetails).id === (product as OrderDetails).id) {
            if ((e as OrderDetails).quantity > 0)
              (e as OrderDetails).quantity -= 1;
          }
        });
      }

      return {
        ...state,
        loading: false,
      };

    case ActionType.CART_RESET:
      return {
        cartItems: [],
        loading: false,
      };
    default:
      return state;
  }
};
