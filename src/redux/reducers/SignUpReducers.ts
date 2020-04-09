import {  SIGNUP_LOADING } from "../../constants/actionConstants";
import { Action } from "./LoginReducers";

interface State {
  loading: boolean
}

const intialState = {
  loading:false
};

export default (state: State = intialState, action: Action) => {
  switch (action.type) {
    case SIGNUP_LOADING:
      return {
        ...state,
        loading:action.payload
      };
    default:
      return state;
  }
};
