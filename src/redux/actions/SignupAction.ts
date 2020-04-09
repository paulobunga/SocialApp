
import { Dispatch } from "redux";
import { fetchImageService } from "../services/user";
import { LOGIN_LOADING, SIGNUP_LOADING } from "../../constants/actionConstants";
import { showSimpleMessage } from "../../components/showMessage";
import  axios from "../services/axiosBase";
import { API_SIGN_UP } from "../../constants/apiConstants";
import { LoginWithPhone } from "./loginAction";
import { strings, errorMessages } from "../../constants/Localizations";


export interface UserSignUp  {
    email: string;
    name: string;
    password: string;
    phoneNumber: string;
    photoPath: string;
    userName: string;
}

export function SignUp(user : UserSignUp) {
    return (dispatch: any) => {
      dispatch(loading(true));
      axios().post(API_SIGN_UP,{
        email: user.email,
        name: user.name,
        password: user.password,
        phoneNumber: user.phoneNumber,
        photoPath: user.photoPath,
        userName: user.userName
      }).then(res=> {
        dispatch(loading(false));
              if(res.data.isSuccess) {
                dispatch(LoginWithPhone(user.userName,user.password));

              }else {
                   
          let message = res.data.message
          let errorMessage = errorMessages.find(e => e.key === message)?.value 
          if(errorMessage){
            showSimpleMessage(errorMessage,"danger")
          }
              }
      }).catch(e => {
        dispatch(loading(false));
        showSimpleMessage(strings.generalError,"danger")

      })

    };
  }




  export const loading = (loader: boolean) => ({
    type: SIGNUP_LOADING,
    payload: loader
  });
  