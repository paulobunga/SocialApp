import { StyleSheet, Dimensions } from "react-native";
import { colors, fonts } from "../../../constants";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.containerBg,
    // justifyContent: "center",

  },

  headStyle: {
    padding:20,paddingBottom:Dimensions.get('window').height/15,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor
  },
  headText: {
    fontSize: 40,
    fontWeight: "700",
    fontFamily:fonts.primary,
    color:colors.secondary
  },
  inputContainer: {
    justifyContent: "center",
    padding: 20
  },
  signupLink: {
    flexDirection: "row",
    justifyContent: "center"
  },
  linkText: {
    color: colors.primary,
    fontWeight: "700"
  }
});

export default styles;
