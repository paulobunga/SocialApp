import React, { useState ,Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
    Image,
} from 'react-native';

import { SwipeListView } from 'react-native-swipe-list-view';
import { fonts, colors } from '../../../constants';
import { Icon } from 'native-base';

export default class NotificationScreen extends Component {
   

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
       headerTitleStyle: {
         fontWeight: 'bold',
       },
       headerTitle : "Notifications", 
     
        }
        
        
     
       };

       
    constructor(props) {
        super(props);
        this.state = {
            listData :[{key: 1,text:"asd"},{key:2,text:"asdasdas"},{key: 3,text:"asd"},{key:4,text:"asdasdas"},{key: 5,text:"asd"},{key:6,text:"asdasdas"},{key: 7,text:"asd"},{key:8,text:"asdasdas"}]
        };
      }

    closeRow (rowMap, rowKey){
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    deleteRow (rowMap, rowKey){
        this.closeRow(rowMap, rowKey);
        const newData = [...this.state.listData];
        const prevIndex = this.state.listData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        this.setState({listData : newData});
    };

        onRowDidOpen(rowKey) {
        console.log('This row opened', rowKey);
    };

        renderItem(data){
       return(
        <TouchableHighlight
        onPress={() => console.log('You touched me')}
        style={styles.rowFront}
        underlayColor={'#AAA'}
    >
        <View style={{flexDirection:'row'}}>
        <Image
        style={{width:40,height:40,borderRadius:20}}
          source={{uri: 'https://eksiup.com/images/11/61/a8z9lfcBHWt06YDOVP.jpg'}}
        />
        <View style={{marginLeft:10,borderBottomWidth:1,flex:1,marginBottom:-10,paddingBottom:10,marginTop:10,borderBottomColor:colors.borderColorWhiter}}>
        <Text style={{fontFamily:fonts.primary,color:colors.textColor,fontWeight:"bold"}}>Mary <Text style={{fontWeight:"400",color:colors.textColorLigther}}>comment on your group</Text></Text>
        <Text style={{fontFamily:fonts.primary,color:colors.textColorLigther,marginTop:5}}>40 mins ago</Text>
        </View>
        </View>
    </TouchableHighlight>
       )
        };

        renderHiddenItem(data, rowMap){
       return(
        <View style={styles.rowBack}>
        <Text>Left</Text>
        {/* <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnLeft]}
            onPress={() => this.closeRow(rowMap, data.item.key)}
        >
            <Text style={styles.backTextWhite}>Close</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnRight]}
            onPress={() => this.deleteRow(rowMap, data.item.key)}
        >
            <Text style={styles.backTextWhite}>Delete</Text>
            <Icon name="trash" style={{color:'white'}} />
        </TouchableOpacity>
    </View>
       )
}
    render() {

        return (
        <View style={styles.container}>
            <SwipeListView
                // contentContainerStyle={{paddingTop:10}}
                data={this.state.listData}
                renderItem={(data)=>this.renderItem(data)}
                renderHiddenItem={(data,rowMap)=> this.renderHiddenItem(data,rowMap)}
                leftOpenValue={75}
                rightOpenValue={-75}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onRowDidOpen={(rowKey)=>this.onRowDidOpen(rowKey)}
            />
        </View>
    );

        }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,

    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {

        backgroundColor: 'white',


        // borderBottomColor: 'black',
        // borderBottomWidth: 1,
        padding:10
        // height: 50,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
});
