import React, { Component, useRef } from "react";
import { View, FlatList, ActivityIndicator,Text, Image,Keyboard} from "react-native";
// import {Button} from 'native-base'
import { NavigationScreenProp, NavigationState, SafeAreaView } from "react-navigation";
import { connect } from "react-redux";
import { Header, Button } from "../../../components";
import styles from "../styles";
import { AvatarItem } from "../../../components";
import { logoutUserService } from "../../../redux/services/user";
import {Thumbnail,Icon, Textarea, Spinner} from 'native-base'
import {
  fetchImageData,
  fetchMoreImageData
} from "../../../redux/actions/fetch";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { showMessage } from "react-native-flash-message";
import { colors, fonts, sizes } from "../../../constants";
import { strings } from "../../../constants/Localizations";
import LinearGradient from 'react-native-linear-gradient'
import { Formik } from "formik";
import * as Yup from 'yup'; 
import ImagePicker from 'react-native-image-picker';
import { createPost } from "../../../redux/actions/postActions";
import { AppState } from "../../../redux/store";

// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};



interface Props {
  navigation: NavigationScreenProp<NavigationState>;
  createPost : (lat : number , long :number ,title: string) => void;
  lat : number;
  long : number;
  loading : boolean;
}



interface State {

}
interface UserData {
  textArea : string
}
// const bagRef = useRef();

const girdiler = Yup.object().shape({
    textArea: Yup.string()
    .min(3,strings.createPostErrorMin)
      .required(strings.createPostErrorNull),
  

  })

  const MyTitle = ({ navigation, loading, onPress}) =>  <Button onPress={onPress}
  loading={loading} style={{height:35,paddingHorizontal:5,marginRight:5,minWidth:70,maxHeight:70}} text="Share"/>;
  const MyConnectedTitle = connect((storeState:AppState) => ({ loading: storeState.posts.loadingCreatePost}))(MyTitle);

  

class createPostScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loadingImage : false
    };

  }
  componentDidMount() {
    this.props.navigation.setParams({ _createPostAction: this._createPostAction });
  }


  _increaseCount = () => {
  console.log("asdasd")
  };


  _createPostAction = ()=> {
    this.formik.handleSubmit()

  };

  static navigationOptions = ({navigation }) => {

   return {
    title: strings.createPost,
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

  headerRight: 
          // <Button text="asd"  onPress={navigation.getParam('increaseCount')} />
    () => <MyConnectedTitle onPress={navigation.getParam('_createPostAction')} navigation={navigation} />

   }
   
   

  };
  handlePost(values : UserData) {
    Keyboard.dismiss()
   this.props.createPost(this.props.lat,this.props.long,values.textArea);


  }
  showImagePicker() {

    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
        this.setState({
          loadingImage: true,
        })
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
        //   const source = { uri: response.uri };
      
          // You can also display the image using data:
          const source = { uri: 'data:image/jpeg;base64,' + response.data };
      
          this.setState({
           
            avatarSource: source,
          });
        }
        this.setState({
          loadingImage: false,
        })

      });

  }
  renderInside() {
   if(this.state.loadingImage) {
     return (
       <Spinner color={colors.icon} size="small" />
     )

   }else if (this.state.avatarSource) {
      return(
        <Image source={this.state.avatarSource} style={{flex:1,width:100,height:100,borderRadius:5}} width={100} height={100}  /> 
      )
   } else {
   return(
   <Icon name="ios-add" style={{fontSize:50,color:colors.inputIcon}} />)}
  }


  render() {
    
    return (
      <View style={styles.container}>
          
          <Formik
          // innerRef={formRef}
          innerRef={p => (this.formik = p)} 
initialValues={{textArea : ""}}
validationSchema={girdiler}
onSubmit={values => this.handlePost(values)}
>

{({ values, errors, handleChange, handleBlur, handleSubmit, resetForm,touched,setFieldValue }) => {

const propsNew = { trackColor: { true: "#2069F3", false: null } }


  return (
    <View style={{margin:20}}>
     
     <Textarea 
     maxLength={250}
      value={values.textArea}
      onChangeText={handleChange("textArea")}
      onBlur={handleBlur("textArea")}
     style={{borderBottomWidth:1,borderBottomColor:errors.textArea ? colors.inputIcon : colors.borderColorWhiter}} rowSpan={3} placeholder={strings.createPostText}/>
       {values.textArea.length > 200 &&  <Text style={{textAlign:'right',color : values.textArea.length > 240 ? colors.icon : colors.textColor,marginTop:10}}>{values.textArea.length}/<Text style={{fontWeight:"600"}}>250</Text></Text>
}
{touched.textArea && errors.textArea &&
                        <View style={{ flexDirection: 'row',marginTop:10 }}>
                          <Icon name="info" type="MaterialIcons" style={{ color: colors.accent, fontSize: sizes.iconSmall }} />
                          <Text style={{ fontFamily: fonts.primary, color: colors.accent, marginLeft: 5, fontSize: sizes.small }}>
                            {errors.textArea}</Text>
                        </View>
                      }


   <View style={{width:100,height:100}}>
   <TouchableOpacity  
    onPress={ ()=> this.showImagePicker()}
    style={{width:100,height:100,backgroundColor:colors.borderColorWhiter,marginTop:20,borderRadius:5,justifyContent:'center',alignItems:'center'}} >
     
       {this.renderInside()}
    </TouchableOpacity>
   </View>
    </View>
  );
}}
</Formik>


        
      </View>
     
    );
  }
}

const mapStateToProps = (state: AppState) => ({
lat : state.location.lat,
long : state.location.long,
loading : state.posts.loadingCreatePost
});

function bindToAction(dispatch: any) {
  return {
    createPost : (lat : number , long :number ,title: string) => 
      dispatch(createPost(lat,long,title))

  };
}

export default connect(
  mapStateToProps,
  bindToAction
)(createPostScreen);
