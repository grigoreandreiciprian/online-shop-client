import {
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOG_OUT_FAIL,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
  } from "../Constants/LogInConstants";

  import Data from "../Api";
import Costumer from "../models/Costumer";



  const logIn =  async (user:Costumer) =>{

    try{

        const api = new Data()

        const response = await api.logInn(user)

        if(response.status == 200){

        }


    }catch(e){
        throw new Error(e)
    }

      
  }