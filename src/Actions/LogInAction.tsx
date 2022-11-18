import Data from "../Api";
import Costumer from "../models/Costumer";
import { ActionType } from "../ActionTypes/ActionTtype";
import { Action } from "../ActionSet/index";
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

  distpatch({
    type: ActionType.LOG_IN_SUCCESS,
    payload: response.data as LogToken,
  });
};
