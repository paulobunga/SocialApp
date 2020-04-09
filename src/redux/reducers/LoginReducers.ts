import { IMAGE_DATA_FETCHED, DATA_LOADING, FETCH_MORE } from "../actions/fetch";
import { LOGIN_LOADING } from "../../constants/actionConstants";
export interface Action {
  type: string;
  payload: any;
}
interface State {
  loading: boolean
}

const intialState = {
  loading:false
};

export default (state: State = intialState, action: Action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading:action.payload
      };
    default:
      return state;
  }
};
