import React, { Component } from "react";
import { View, FlatList, ActivityIndicator,Button,Text, Image, ImageBackground, KeyboardAvoidingView, TextInput, Platform} from "react-native";
import { NavigationScreenProp, NavigationState, SafeAreaView } from "react-navigation";
import { connect } from "react-redux";
// import { Header } from "../../../components";
import styles from "../styles";
import { AvatarItem } from "../../../components";
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

class MessageScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }



  static navigationOptions = ({navigation }) => {

   return {

  //   headerStyle: {
  //     borderBottomWidth: 0,
  //     shadowColor: "#000",
  //     shadowOffset: {
  //       width: 0,
  //       height: 2,
  //     },
  //     shadowOpacity: 0.12,
  //     shadowRadius: 2.46,
  //     elevation: 9,
  // },
  // headerTitleStyle: {
  //   fontWeight: 'bold',
  // },
  header: null, 
  // headerLeft : <TouchableOpacity onPress={()=>navigation.goBack()}><Icon name="ios-arrow-back" style={{color:colors.icon,marginLeft:10}}/></TouchableOpacity>,
  // headerTitle : <View style={{position:'absolute',left:-30,flexDirection:'row'}}>
  //    <View style={{width:35,height:35,backgroundColor:colors.borderColorWhiter,justifyContent:'center',alignItems:'center',borderRadius:17.5}}>
  //   <Image
  //       style={{width:30,height:30,borderRadius:15}}
  //         source={{uri: 'https://eksiup.com/images/11/61/a8z9lfcBHWt06YDOVP.jpg'}}
  //       />
  //   </View>
  //   <View style={{width:35,height:35,backgroundColor:colors.borderColorWhiter,justifyContent:'center',alignItems:'center',borderRadius:17.5,marginLeft:-15}}>
  //   <Image
  //       style={{width:30,height:30,borderRadius:15}}
  //         source={{uri: 'https://eksiup.com/images/11/61/a8z9lfcBHWt06YDOVP.jpg'}}
  //       />
  //   </View>
  //   <View style={{width:35,height:35,backgroundColor:colors.borderColorWhiter,justifyContent:'center',alignItems:'center',borderRadius:17.5,marginLeft:-15}}>
  //   <Image
  //       style={{width:30,height:30,borderRadius:15}}
  //         source={{uri: 'https://eksiup.com/images/11/61/a8z9lfcBHWt06YDOVP.jpg'}}
  //       />
  //   </View>
  //   <View style={{marginLeft:5}}>
  //     <Text style={{fontFamily:fonts.primary,color:colors.textColorInnder}}>Easter Party</Text>
  //     <Text style={{fontFamily:fonts.primary,color:colors.textColorLigther,fontSize:sizes.small}}>You,Median,Micheal</Text>
  //   </View>
  // </View>
//   headerRight: 
//   <TouchableOpacity
//   style={{marginRight:10}}>
//     <Icon name="add-circle-outline" style={{color:colors.icon}} type="MaterialIcons" />
 
//   </TouchableOpacity>

   }
   
   

  };

  renderItems(){

      return(
          <View>
         
            <View style={{width:'80%',backgroundColor:colors.primary,padding:10,borderRadius:5,marginTop:0,marginLeft:5,borderBottomLeftRadius:0,marginBottom:10}}>
            <Text style={{color:'white',fontFamily:fonts.primary,fontWeight:"600",fontSize:sizes.medium}}>Oguz Marifet</Text>
            <Text style={{color:'white'}}>Meraba arkadaşlar</Text>
            <Text style={{position:'absolute',right:0,bottom:0,padding:5,fontFamily:fonts.primary,color:'white',opacity:.95,fontSize:sizes.small}}>19.35</Text>
            </View>
         
            <View style={{width:'80%',backgroundColor:colors.primary,padding:10,borderRadius:5,marginTop:0,marginLeft:5,borderBottomLeftRadius:0,marginBottom:10,paddingBottom:20}}>
            <Text style={{color:'white',fontFamily:fonts.primary,fontWeight:"600",fontSize:sizes.medium}}>Oguz Marifet</Text>
        
           <Text style={{color:'white'}}>As you can see, the images are downloaded once and subsequently fetched from cache. This has the added benefit of not having to deal with slow and unpredictable networks, thus giving you app faster response times and better offline support.Evet napiyorusunuz bence evet</Text>
           <Text style={{position:'absolute',right:0,bottom:0,padding:5,fontFamily:fonts.primary,color:'white',opacity:.95,fontSize:sizes.small}}>19.35</Text>
           
            </View>
         
            <View style={{width:'80%',backgroundColor:colors.primary,padding:10,borderRadius:5,marginTop:0,marginLeft:5,borderBottomLeftRadius:0,marginBottom:10}}>
            <Text style={{color:'white'}}>When both packages are successfully installed, you can import CachedImage and replace any instances of Image or ImageBackground that you want cached.
</Text>
            </View>

            <View style={{width:'80%',alignSelf:'flex-end',backgroundColor:colors.secondary,padding:10,borderRadius:5,marginTop:0,marginRight:5,borderBottomRightRadius:0,marginBottom:10}}>
            <Text style={{color:'white'}}>When both packages are successfully installed, you can import CachedImage and replace any instances of Image or ImageBackground that you want cached.
</Text>
            </View>
         

          </View>
      )
   
  }

  renderHeader(){
    return(
      <View style={{flexDirection:'row',height:44,paddingTop:5,shadowColor: "#000",backgroundColor:'white',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.12,
      shadowRadius: 2.46,
      elevation: 9,}}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}><Icon name="ios-arrow-back" style={{color:colors.icon,marginLeft:10,marginRight:10}}/></TouchableOpacity>
     <TouchableOpacity onPress={()=> this.props.navigation.navigate('GroupInfo')} style={{flexDirection:'row'}}>
     <View style={{width:35,height:35,backgroundColor:colors.borderColorWhiter,justifyContent:'center',alignItems:'center',borderRadius:17.5}}>
    <Image
        style={{width:30,height:30,borderRadius:15}}
          source={{uri: 'https://eksiup.com/images/11/61/a8z9lfcBHWt06YDOVP.jpg'}}
        />
    </View>
    <View style={{width:35,height:35,backgroundColor:colors.borderColorWhiter,justifyContent:'center',alignItems:'center',borderRadius:17.5,marginLeft:-15}}>
    <Image
        style={{width:30,height:30,borderRadius:15}}
          source={{uri: 'https://eksiup.com/images/11/61/a8z9lfcBHWt06YDOVP.jpg'}}
        />
    </View>
    <View style={{width:35,height:35,backgroundColor:colors.borderColorWhiter,justifyContent:'center',alignItems:'center',borderRadius:17.5,marginLeft:-15}}>
    <Image
        style={{width:30,height:30,borderRadius:15}}
          source={{uri: 'https://eksiup.com/images/11/61/a8z9lfcBHWt06YDOVP.jpg'}}
        />
    </View>
    <View style={{marginLeft:5}}>
      <Text style={{fontFamily:fonts.primary,color:colors.textColorInnder}}>Easter Party</Text>
      <Text style={{fontFamily:fonts.primary,color:colors.textColorLigther,fontSize:sizes.small}}>You,Median,Micheal</Text>
    </View>
     </TouchableOpacity>
  </View>

    )
  }
  renderInput(){
    return(
      <View>
       
        <View style={{backgroundColor:colors.inputBg,padding:10,flexDirection:'row',alignItems:'center'}}>
        <Input autoCorrect={false} multiline
          
         placeholder="Write a comment" placeholderTextColor="white" 
         style={{backgroundColor:colors.inputInnerBg,color:'white',borderRadius:20,fontFamily:fonts.primary,fontSize:sizes.medium,paddingLeft:15,alignSelf:'center',minHeight:40,paddingTop:10,paddingBottom:10}} 
         
         />
        <TouchableOpacity style={{backgroundColor:colors.inputIcon,height:35,width:35,justifyContent:'center',alignItems:'center',borderRadius:17.5,marginLeft:5}}>
        <Icon name="send" type="Feather" style={{fontSize:sizes.big,color:'white',marginLeft:-4,marginTop:2}} />
      </TouchableOpacity>
      </View>
      </View>
      
    )
  }
  renderSendIcon() {
    return (
      <TouchableOpacity>
        <Icon name="send" type="Feather" />
      </TouchableOpacity>
    )
  }
  render() {

    return (
      <SafeAreaView style={styles.container} forceInset={{bottom:'never'}}>
   

       
        {this.renderHeader()}
       

        <KeyboardAvoidingView 
         style={{flex:1}} behavior={Platform.OS === 'ios' ? "height" : "padding"}>
 

<View style={{flex:1}}>
<ScrollView

keyboardDismissMode = "on-drag"
 contentContainerStyle={{paddingTop:20}} showsVerticalScrollIndicator={false}>
{this.renderItems()}
{this.renderItems()}
{this.renderItems()}

</ScrollView>

{/* 

<View style={{backgroundColor:colors.accent,height:50,position:'absolute',bottom:60,left:0,right:0}}>
<View style={{height:50,opacity:.2,backgroundColor:'white',borderRadius:20}}> */}

{/* </View>
</View> */}

{this.renderInput()}
</View>



       




</KeyboardAvoidingView>
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
)(MessageScreen);
