import React, { Component } from "react";
import { View, FlatList, ActivityIndicator,Button,Text, Image} from "react-native";
import { NavigationScreenProp, NavigationState, SafeAreaView } from "react-navigation";
import { connect } from "react-redux";
import { Header } from "../../../components";
import styles from "../styles";
import { AvatarItem } from "../../../components";
import { logoutUserService } from "../../../redux/services/user";
import {Thumbnail,Icon} from 'native-base'
import {
  fetchImageData,
  fetchMoreImageData
} from "../../../redux/actions/fetch";
import { TouchableOpacity, ScrollView, TouchableHighlight } from "react-native-gesture-handler";
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

class DirectMessageScreen extends Component<Props, State> {
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
  renderItems(){
    return(
      <TouchableOpacity style={{flexDirection:'row',marginHorizontal:10,marginTop:10}}>
        <Image
        style={{width:40,height:40,borderRadius:20}}
          source={{uri: 'https://eksiup.com/images/11/61/a8z9lfcBHWt06YDOVP.jpg'}}
        />
        <View style={{flexDirection:'row',flex:1,borderBottomWidth:1,borderBottomColor:colors.borderColorWhiter,marginLeft:10,paddingBottom:5}}>
        <View style={{flex:1}}>
          <Text style={{color:"#deb0a6"}}>
            Mandy Portman 
          </Text>
          <Text style={{color:colors.textColor,marginTop:5}}>
            sure .. I will send you tonight
          </Text>
        </View>
        <View style={{}}>
          <Text style={{fontSize:sizes.small,color:colors.textColorLigther}}>
            23 mins
          </Text>
          <View style={{backgroundColor:colors.accent,height:20,width:20,borderRadius:10,justifyContent:'center',alignItems:'center',alignSelf:'center',marginTop:5}}>
        <Text style={{color:'white'}}>
          5
        </Text>
          </View>
        </View>
        </View>
        
      </TouchableOpacity>
    )
  }


  render() {

    return (
      <View style={styles.container}>

{this.renderItems()}
      {this.renderItems()}
      {this.renderItems()}
      {this.renderItems()}
      {this.renderItems()}
      {this.renderItems()}
      {this.renderItems()}
      {this.renderItems()}
      {this.renderItems()}
      {this.renderItems()}
      {this.renderItems()}
      {this.renderItems()}

      </View>
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
)(DirectMessageScreen);
