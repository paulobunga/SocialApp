import { IMAGE_DATA_FETCHED, DATA_LOADING, FETCH_MORE } from "../actions/fetch";
import { LOGIN_LOADING, GET_POSTS, GET_POSTS_LOADING, CREATE_POST } from "../../constants/actionConstants";
import { Action } from "./LoginReducers";
import { IPOST } from "../actions/postActions";
interface State {
  posts: IPOST[]
  loading : boolean;
  loadingCreatePost : boolean;
}

const intialState = {
  posts :[],
  loading: false,
  loadingCreatePost : true
};

export default (state: State = intialState, action: Action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        // posts : [...action.payload,...state.posts]
        posts : action.payload,
        loading : false
      };
    case GET_POSTS_LOADING:
        return {
            ...state,
            loading : true,
            loadingCreatePost :false
        }
    case CREATE_POST :
      return {
        ...state,
        loadingCreatePost :action.payload
      }
    default:
    
      return state;
  }
};
