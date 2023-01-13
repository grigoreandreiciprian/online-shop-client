import { ActionType } from "../ActionTypes/ActionTtype";
import { Action } from "../ActionSet/login/index";

export const LogInReducer = (state = { user: "" }, action: Action) => {
  switch (action.type) {
    case ActionType.LOG_IN_REQUEST:
      return { loading: true };

    case ActionType.LOG_IN_SUCCESS: {
      return {
        loading: false,
        user: action.payload,
        logged: true,
      };
    }

    case ActionType.LOG_IN_FAIL: {
      return {
        loading: false,
        user: action.payload,
      };
    }

    case ActionType.LOG_OUT_REQUEST:
      return { loading: true };

    case ActionType.LOG_OUT_SUCCESS:
      return {
        loading: false,
        user: "",
      };

    case ActionType.LOG_OUT_FAIL: {
      return {
        loading: false,
        user: action.payload,
      };
    }

    default:
      return state;
  }
};
