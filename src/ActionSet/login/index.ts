
import { ActionType } from "../../ActionTypes/ActionTtype";
import LogToken from "../../models/Token";


interface LogInRequest {

    type: ActionType.LOG_IN_REQUEST
}

interface LogInSuccess {

    type: ActionType.LOG_IN_SUCCESS
    payload: LogToken
}

interface LogInFail {

    type: ActionType.LOG_IN_FAIL
    payload: string
}


interface LogOutRequest {
    type: ActionType.LOG_OUT_REQUEST,

}

interface LogOutSuccess {

    type: ActionType.LOG_OUT_SUCCESS
    // payload: ""
}


interface LogOutFail {

    type: ActionType.LOG_OUT_FAIL
    payload: ""
}





export type Action = LogInRequest | LogInSuccess | LogInFail | LogOutRequest | LogOutSuccess | LogOutFail