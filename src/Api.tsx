import { Token } from "typescript";
import Costumer from "./models/Costumer";
import LogCredentials from "./models/LogCredentials";
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
        Authentification: `Bearer${token}`,
      },

      body: body == null ? null : JSON.stringify(body),
    };
    return fetch(url, options);
  }

  getProducts = async (): Promise<ResponseImpl<Product[]>> => {
    const response = await this.api("/products", "GET", null, "");

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

  logInn = async (user: LogCredentials): Promise<LogToken> => {
    const response = await this.api<LogToken, LogCredentials>(
      "/users/log",
      "POST",
      user,
      ""
    );

    return response.json();
  };
}
