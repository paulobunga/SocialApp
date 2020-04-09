import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DirectMessageScreen from "./DirectMessageScreen";
import GroupMessageScreen from "./GroupMessageScreen";

const Tab = createMaterialTopTabNavigator();

import React, { Component } from "react";
import { View, FlatList, ActivityIndicator,Button,Text, Image} from "react-native";
import { NavigationScreenProp, NavigationState, SafeAreaView } from "react-navigation";
import { connect } from "react-redux";
import { Header } from "../../../components";
import styles from "../styles";
import { AvatarItem } from "../../../components";
import { logoutUserService } from "../../../redux/services/user";
import {Thumbnail,Icon} from 'native-base'
import { NavigationContainer } from '@react-navigation/native';
import {
  fetchImageData,
  fetchMoreImageData
} from "../../../redux/actions/fetch";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { showMessage } from "react-native-flash-message";
import { colors, fonts, sizes } from "../../../constants";
import { strings } from "../../../constants/Localizations";
import LinearGradient from 'react-native-linear-gradient'
interface Props {
  navigation: NavigationScreenProp<NavigationState>;
  fetchImageData: (page?: number, limit?: number) => void;
  fetchMoreImageData: (page?: number, limit?: number) => void;
  imageData: any;
  loading: boolean;
}



interface State {

}

class navigationTopBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }



  static navigationOptions = ({navigation }) => {

   return {
    title: strings.homeScreen,
    headerStyle: {
      borderBottomWidth: 0,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.12,
      shadowRadius: 2.46,
      elevation: 9,
  },
  headerBackTitleVisible:false,
  headerRight: 
  <TouchableOpacity onPress={()=> navigation.navigate('Message')}
  style={{marginRight:10}}>
    <Icon name="add-circle-outline" style={{color:colors.icon}} type="MaterialIcons" />
 
  </TouchableOpacity>

   }
   
   

  };



  render() {

    return (
        <NavigationContainer>

            <SafeAreaView style={{flex:1}}>

           
        <MyTabs />
        </SafeAreaView>
    </NavigationContainer>
    );
  }
}

const mapStateToProps = (state: any) => ({

});

function bindToAction(dispatch: any) {
  return {

  };
}

export default connect(
  mapStateToProps,
  bindToAction
)(navigationTopBar);



function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: colors.icon,
        labelStyle: { fontSize: 12 ,fontFamily:fonts.primary,fontWeight:'600'},
        style: { backgroundColor: 'white',shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.12,
        shadowRadius: 2.46,
        elevation: 9, },
      }}
    >
         <Tab.Screen
        name="GroupMessageScreen"
        component={GroupMessageScreen}
        options={{ tabBarLabel: 'Groups' }}
      />
      <Tab.Screen
        name="DirectMessage"
        component={DirectMessageScreen}
        options={{ tabBarLabel: 'DM' }}
        
      />
     
      
    </Tab.Navigator>
    
  );
}


