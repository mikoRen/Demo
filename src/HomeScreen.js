import React, {Component} from 'react';
import {View,Text,Button,Image,TouchableWithoutFeedback,FlatList}from 'react-native';
import { createStackNavigator } from 'react-navigation';
import store from './store/index';
import {getInitList} from './store/actionCreator';


class LogoTitle extends Component {
  render() {
    return (
      <Image
        source={require('./img/logo.png')}
        style={{ width: 120, height: 25, marginLeft: 30,padding:10 }}
      />
    );
  }
}



export default class HomeScreen extends Component {

    static navigationOptions = ({navigation}) => {
      return {
        // title: 'Home',
        headerTitle: <LogoTitle />,
        // headerLeft:(
          // <Button 
          // onPress={()=>navigation.navigate('MyModal')}
          // title="Info"
          // color="#fff"
          // />
        // ),
      };
        
      };

      constructor(props) {
        super(props);
        this.state=store.getState();
        this.handleStoreChange=this.handleStoreChange.bind(this);
        // this.handleRefrensh=this.handleRefrensh.bind(this);
        store.subscribe(this.handleStoreChange);
      }

    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home!</Text>
          <Text>{this.state.text}</Text>
          <FlatList
            keyExtractor={(item) => {item}}
            style={{width:'100%',backgroundColor:'#989',height:200,height:300}}
            data={this.state.list}
            renderItem={
              ({item}) => (
                <View style={{width:'100%' , justifyContent:"center", alignItems:'center',height:50,backgroundColor:'#789',marginBottom:10}}>
                    <Text >
                      {item}
                    </Text>
                </View> 
              )

            }
            // getItemLayout={(data,index=4)=>({length:60,offset:60*index,index})}
            
            //列表之间的横线
            // ItemSeparatorComponent={
            //   () => (<View style={{height:1, backgroundColor:'#000'}}></View>)
            // }

            // onRefresh={
            //   () =>{this.handleRefrensh()}
            // }
          />
          <Button
          title="Go to Details"
          onPress={() => {this.props.navigation.navigate('Details',{
            itemId: 22,
            otherParam: 'I am beautiful!',
          });
        }}
          />
          <Button
          title="Drawer"
          onPress={()=> {this.props.navigation.openDrawer()}}
          />


          {/* 使用gif做出的button */}
          <TouchableWithoutFeedback
            onPress={()=>{this.props.navigation.navigate('Details')}}
          >
            <Image 
            source={require('./img/bear.gif')}
            />
          </TouchableWithoutFeedback>
          
        </View>
      );
    }

     componentDidMount(){
      const action = getInitList();
      store.dispatch(action);
    }

    // handleRefrensh() {
      
    //   const action = getInitList();
    //   store.dispatch(action);
    // }

    handleStoreChange(){
      this.setState(store.getState());
  }
  }

  

  