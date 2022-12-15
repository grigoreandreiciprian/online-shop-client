
import { ActionType } from "../../ActionTypes/ActionTtype";
import Product from "../../models/Product";


interface ProductRequest {

    type: ActionType.PRODUCTS_REQUEST
}

interface GetProductsSucces {

    type: ActionType.GET_PRODUCTS_SUCCES
    payload: Product[]
}


export type Action = ProductRequest | GetProductsSucces