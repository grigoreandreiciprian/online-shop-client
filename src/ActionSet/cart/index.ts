import { ActionType } from "../../ActionTypes/ActionTtype";
import OrderDetails from "../../models/OrderDetails";
import Product from "../../models/Product";


interface AddCartRequest {

    type: ActionType.ADD_TO_CART_REQUEST
}


interface AddCartSucces {
    type: ActionType.ADD_CART_SUCCES
    payload: OrderDetails
}


interface RemoveCartItem {
    type: ActionType.CART_REMOVE_ITEM
    payload: number

}

interface IncreaseQuantity {
    type: ActionType.CART_INCREASE_QUANTITY
    payload: number
}

interface DecreaseQuantity {
    type: ActionType.CART_DECREASE_QUANTITY
    payload: number
}

interface CartReset {
    type: ActionType.CART_RESET
}


export type Action = AddCartRequest | AddCartSucces | RemoveCartItem | IncreaseQuantity | DecreaseQuantity | CartReset