import React, { Component } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { NavigationScreenProp, NavigationState, SafeAreaView } from "react-navigation";
import { Formik } from "formik";
import * as Yup from "yup";
// import Icon from "react-native-vector-icons/SimpleLineIcons";
import { loginUserService } from "../../../redux/services/user";
import { Input, Button,ButtonSecondary } from "../../../components";
import styles from "./styles";
import { strings } from "../../../constants/Localizations";
import { connect } from "react-redux";
import { AppState } from "../../../redux/store";
import { LoginWithPhone } from "../../../redux/actions/loginAction";
import { Icon } from "native-base";
import { fonts, colors, sizes } from "../../../constants";



interface Props {
  navigation: NavigationScreenProp<NavigationState>;
  loading: boolean;
  LoginWithPhone : (username: string,password : string) => void;
}
interface userData {
  username: string;
  password: string;
}

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(6,strings.usernameErrorMin)
    .required(strings.usernameErrorNull),
  password: Yup.string()
    .min(6,strings.passwordErrorMin)
    .required(strings.passwordErrorNull)
});

class Login extends Component<Props, {}> {
  handleLogin = (values: userData) => {
    const { navigation,LoginWithPhone } = this.props;
    LoginWithPhone(values.username,values.password)
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView bounces={false}>
          <View style={styles.headStyle}>
                <Text style={styles.headText}>{strings.Login}</Text>

            </View>
            <Formik
            
              initialValues={{ username: "", password: "" }}
              validationSchema={loginSchema}
              onSubmit={values => this.handleLogin(values)}
            >
              {props => {
                console.log(props, "fdsfsdfdsf");
                return (
                  <View >
                    
                    <View style={styles.inputContainer}>
                      <Input
                        placeholder={strings.username}


                        value={props.values.username}
                        onChangeText={e => {
                          props.setFieldValue('username',e.replace(/\W+/g, '_')); 
                        }}
                        onBlur={props.handleBlur("username")}
                        error={props.touched.username && props.errors.username}
                      />
                      {props.touched.username && props.errors.username &&
                        <View style={{ flexDirection: 'row' }}>
                          <Icon name="info" type="MaterialIcons" style={{ color: colors.accent, fontSize: sizes.iconSmall }} />
                          <Text style={{ fontFamily: fonts.primary, color: colors.accent, marginLeft: 5, fontSize: sizes.small }}>
                            {props.errors.username}</Text>
                        </View>
                      }
                      <Input
                        placeholder={strings.Password}
                        value={props.values.password}
                        onChangeText={props.handleChange("password")}
                        onBlur={props.handleBlur("password")}
                        secureTextEntry
                        error={props.touched.password && props.errors.password}
                      />
                       {props.touched.password && props.errors.password &&
                        <View style={{ flexDirection: 'row' }}>
                          <Icon name="info" type="MaterialIcons" style={{ color: colors.accent, fontSize: sizes.iconSmall }} />
                          <Text style={{ fontFamily: fonts.primary, color: colors.accent, marginLeft: 5, fontSize: sizes.small }}>
                            {props.errors.password}</Text>
                        </View>
                      }
                      <Button  loading={this.props.loading} text={strings.Login} onPress={props.handleSubmit} />
                      <ButtonSecondary text={strings.SignUp} onPress={()=>this.props.navigation.navigate('SignUp')} />
                    </View>
                  </View>
                );
              }}
            </Formik>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}


const mapStateToProps = (state: AppState) => ({
 loading : state.login.loading
});

function bindToAction(dispatch: any) {
  return {
    LoginWithPhone : (username: string,password : string) => 
      dispatch(LoginWithPhone(username,password))
  };
}

export default connect(
  mapStateToProps,
  bindToAction
)(Login);

