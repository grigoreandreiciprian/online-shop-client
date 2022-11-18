import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOG_OUT_REQUEST,
    LOG_OUT_FAIL,
    LOG_OUT_SUCCESS,
  } from "../Constants/LogInConstants";


  export const LogInReducer = (state = { user: "" }, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return { loading: true };
  
      case LOGIN_SUCCESS: {
        return {
          loading: false,
          user: action.payload,
        };
      }
  
      case LOGIN_FAIL: {
        return {
          loading: false,
          user: action.payload,
        };
      }
  
      case LOG_OUT_REQUEST:
        return { loading: true };
  
      case LOG_OUT_SUCCESS:
        return {
          loading: false,
          user: action.payload,
        };
  
      case LOG_OUT_FAIL: {
        return {
          loading: false,
          user: action.payload,
        };
      }
  
      default:
        return state;
    }
  };
  