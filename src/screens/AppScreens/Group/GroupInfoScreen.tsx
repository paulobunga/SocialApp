import React, { Component } from "react";
import { View, FlatList, ActivityIndicator,Text, Image, ImageBackground, KeyboardAvoidingView, TextInput, Platform} from "react-native";
import { NavigationScreenProp, NavigationState, SafeAreaView } from "react-navigation";
import { connect } from "react-redux";
// import { Header } from "../../../components";
import styles from "../styles";
import { AvatarItem, Button, ButtonSecondary } from "../../../components";
import { logoutUserService } from "../../../redux/services/user";
import {Thumbnail,Icon, Input, Textarea} from 'native-base'
import {
  fetchImageData,
  fetchMoreImageData
} from "../../../redux/actions/fetch";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { showMessage } from "react-native-flash-message";
import { colors, fonts, sizes } from "../../../constants";
import { strings } from "../../../constants/Localizations";
import LinearGradient from 'react-native-linear-gradient'
import { Header } from 'react-navigation-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
  fetchImageData: (page?: number, limit?: number) => void;
  fetchMoreImageData: (page?: number, limit?: number) => void;
  imageData: any;
  loading: boolean;
}



interface State {

}

class GroupInfoScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }



  static navigationOptions = ({navigation }) => {

   return {

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
  headerTintColor: colors.icon,
  headerTitleStyle: {
    fontWeight: 'bold',
    color:colors.icon
  },

//   headerLeft : <TouchableOpacity onPress={()=>navigation.goBack()}><Icon name="ios-arrow-back" style={{color:colors.icon,marginLeft:10}}/></TouchableOpacity>,
  headerTitle : strings.GroupInformation

   }
   
   

  };



renderItems(followed:boolean){
    return(
        <View style={{flexDirection:'row',marginTop:10,marginHorizontal:10,paddingLeft:10,paddingVertical:10,paddingRight:5, shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.12,
        shadowRadius: 2.46,
        elevation: 9,
        backgroundColor:'white'}}>
          <Image
          style={{width:40,height:40,borderRadius:5}}
            source={{uri: 'https://eksiup.com/images/11/61/a8z9lfcBHWt06YDOVP.jpg'}}
          />
          <View style={{marginLeft:10,flex:1}}>
          <Text style={{fontFamily:fonts.primary,fontWeight:"700"}}>
              Mariana Grande
          </Text>
          <Text style={{fontFamily:fonts.primary,color:colors.textColorLigther}}>
              My name is Mariana i love traveling
          </Text>
          
          </View>
          {followed ? <Button   textStyle={{fontSize:sizes.small,marginHorizontal:7}} text={strings.unfollow} style={{marginVertical:0,alignSelf:'center',minWidth:62}} />
   : <ButtonSecondary loading textStyle={{fontSize:sizes.small,marginHorizontal:5}} text={strings.follow} style={{marginVertical:0,alignSelf:'center',borderWidth:2,minWidth:62}} />
}
      
          
  
              </View>
  
    )
}

  render() {

    return (
      <SafeAreaView style={styles.container} forceInset={{bottom:'never'}}>
         <View style={{backgroundColor:colors.inputInnerBg,padding:20}}> 
         <Text style={{color:'white',fontFamily:fonts.primary,fontWeight:"600"}}>Oguz Marifet</Text>
            <Text style={{color:'white',fontFamily:fonts.primary}}>Evet arkadaslar bugun nasilsinzi</Text>
         </View>
         <View style={{backgroundColor:colors.inputInnerBg,padding:10,borderBottomRightRadius:30,borderBottomLeftRadius:30,}}> 

            <Text style={{color:'white',fontFamily:fonts.primary,textAlign:'center'}}>{strings.members}</Text>
         </View>
         
        <Text style={{marginTop:10,marginLeft:5,fontFamily:fonts.primary,color:colors.textColorInnder}}>{strings.groupOwner}</Text>
        {this.renderItems(false)}
        <Text style={{marginTop:10,marginLeft:5,fontFamily:fonts.primary,color:colors.textColorLigther}}>{strings.others}</Text>
        {this.renderItems(true)}
        {this.renderItems(true)}

      </SafeAreaView>
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
)(GroupInfoScreen);
