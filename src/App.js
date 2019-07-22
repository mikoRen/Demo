import React, {Component} from 'react';
import {View, Text,Button, StyleSheet,TextInput} from 'react-native';
import { createStackNavigator,createSwitchNavigator, createAppContainer, NavigationActions,createBottomTabNavigator,createDrawerNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import LoginPage from './page/Login/loginPage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// export default class App extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         text: ''
//       };
//     }


//     render(){
//       return(
//         <View style={{
//           flex: 1,
//           justifyContent: 'center',
//           alignItems: 'center',
//           backgroundColor:this.state.text,
//           }}>
//           <TextInput 
//           style={{width:200,height: 40, borderColor:'gray', borderWidth: 1}}
//           ref="username"
//           placeholder={'用户名'}
//           onChangeText={(text) => this.setState({text})}
//           value={this.state.text}
//           />
//         </View>
//       );
//     }
// }

// class ModalScreen extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text style={{ fontSize: 30 }}>This is a modal!</Text>
//         <Button
//           onPress={() => this.props.navigation.goBack()}
//           title="Dismiss"
//         />
//       </View>
//     );
//   }
// }




    

  // const RootStack = createStackNavigator(
  //   {
  //     Main:{
  //       screen:MainStack,
  //     },
  //     MyModal: {
  //       screen:ModalScreen,
  //     },
  //   },
  //   {
  //     mode:'modal',
  //     headerMode:'none',
  //   }
  // )



// const TabNavigator = createBottomTabNavigator(
//   {
//   Home: {
//     screen: HomeScreen,
//     navigationOptions: {
//       tabBarLabel:"主页",
//       tabBarIcon:({tintColor,focused}) =>(
//         <Ionicons 
//         name={"ios-add"}
//         size={26}
//         style={{color: tintColor}}
//         />
//       )
//     }
//   },
//   Details: { 
//     screen: DetailsScreen,
//     navigationOptions: {
//       tabBarLabel:"更多",
//       tabBarIcon:({tintColor,focused}) =>(
//         <FontAwesome 
//         name={"user"}
//         size={26}
//         style={{color: tintColor}}
//         />
//       )
//     }
//   },
//   },
//   {
//     tabBarOptions:{
//       activeTintColor:'tomato',
//       inactiveTintColor:'gray',
//     }
//   }
  
//   );

// const MyDrawerNavigator = createDrawerNavigator({
//   Home:{
//     screen: HomeScreen,
//   },
//   Details:{
//     screen:DetailsScreen,
//   },
// });


const MainStack = createStackNavigator(
  {
  Home: HomeScreen,
  Details:DetailsScreen
  },
  {
    initialRouteName:"Home",
    defaultNavigationOptions:{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
  );

  const LoginStack = createStackNavigator(
    {
      UserLogin: LoginPage
    },
    {
      initialRouteName:'UserLogin',
    }
    );

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    Main:MainStack,
    Login:LoginStack,
  },
  {
    initialRouteName:'Login',
  }
));


export default class App extends Component{
      
      render(){
        return <AppContainer />;
      }
}

