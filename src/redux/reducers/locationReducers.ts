import { IMAGE_DATA_FETCHED, DATA_LOADING, FETCH_MORE } from "../actions/fetch";
import { LOGIN_LOADING, UPDATE_LOCATION } from "../../constants/actionConstants";
import { Action } from "./LoginReducers";

interface State {
    lat : string;
    long:string;
}

const intialState = {
    lat  : "",
    long : ""
};

export default (state: State = intialState, action: Action) => {
  switch (action.type) {
    case UPDATE_LOCATION:
      return {
        ...state,
        lat : action.payload[0],
        long : action.payload[1]
      };
    default:
      return state;
  }
};
