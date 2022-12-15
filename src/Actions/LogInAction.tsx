import Data from "../Api";
import Costumer from "../models/Costumer";
import { ActionType } from "../ActionTypes/ActionTtype";
import { Action } from "../ActionSet/login/index";
import { Dispatch } from "redux";
import LogCredentials from "../models/LogCredentials";
import LogToken from "../models/Token";

export const logIn = async (
  user: LogCredentials,
  distpatch: Dispatch<Action>
) => {
  distpatch({ type: ActionType.LOG_IN_REQUEST });

  const api = new Data();

  const response = await api.logInn(user);

  if (response.id !== undefined) {
    distpatch({
      type: ActionType.LOG_IN_SUCCESS,
      payload: {
        id: response.id,
        token: response.token,
      },
    });
  } else {
    distpatch({
      type: ActionType.LOG_IN_FAIL,
      payload: "Email or password are incorect",
    });
  }
};

export const logOut = async (distpatch: Dispatch<Action>) => {
  distpatch({ type: ActionType.LOG_OUT_REQUEST });

  distpatch({
    type: ActionType.LOG_OUT_SUCCESS,
    payload: "",
  });
};
