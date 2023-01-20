import AccountUpdate from "./models/AccountUpdate";
import { CartItems } from "./models/Cart";
import Costumer from "./models/Costumer";
import Favorite from "./models/Favorite";
import LogCredentials from "./models/LogCredentials";
import OrderDetails from "./models/OrderDetails";
import Product from "./models/Product";
import ResponseImpl from "./models/Response";
import LogToken from "./models/Token";

export default class Data {
  api<T, U>(
    path: string,
    method = "GET",
    body: U,
    token: string
  ): Promise<ResponseImpl<T>> {
    const url = "http://localhost:5000/api/v1" + path;

    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        authorization: `Bearer ${token}`,
      },

      body: body == null ? null : JSON.stringify(body),
    };

    return fetch(url, options);
  }

  getProducts = async (): Promise<ResponseImpl<Product[]>> => {
    let token = JSON.parse(localStorage.getItem("token")!.toString());

    const response = await this.api("/products", "GET", null, token);

    return response.json();
  };

  paginateProducts = async (limit: number, page: number) => {
    const response = await this.api(
      `/products/paginate/?limit=${limit}&page=${page}`,
      "GET",
      null,
      ""
    );

    return response.json();
  };

  getUsers = async (): Promise<ResponseImpl<Costumer[]>> => {
    const response = await this.api("/users", "GET", null, "");

    return response.json();
  };

  createAcc = async (user: Costumer) => {
    const response = await this.api("/users", "POST", user, "");
    return response;
  };

  updateUser = async (user: AccountUpdate) => {
    const response = await this.api(`/users/${user.id}`, "PUT", user, "");
    return response;
  };

  logInn = async (user: LogCredentials): Promise<LogToken> => {
    const response = await this.api<LogToken, LogCredentials>(
      "/users/log",
      "POST",
      user,
      ""
    );

    return response.json();
  };

  sendCart = async (cart: CartItems) => {
    let token = JSON.parse(localStorage.getItem("token")!.toString());
    const response = await this.api("/orders", "POST", cart, token);

    return response;
  };

  getFavorites = async (): Promise<ResponseImpl<Favorite[]>> => {
    const response = await this.api("/favorite", "GET", null, "");

    return response.json();
  };

  addFavorite = async (item: Favorite) => {
    const response = await this.api("/favorite", "POST", item, "");

    return response;
  };

  deleteFavorite = async (id: number) => {
    const response = await this.api(`/favorite/${id}`, "DELETE", null, "");

    return response;
  };
}
