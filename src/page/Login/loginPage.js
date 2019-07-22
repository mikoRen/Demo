// import React, {Component} from 'react';
// import {View,Text,Button,Image}from 'react-native';

// export default class LoginPage extends Component {

//     render() {
//       return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <Text>Login First!</Text>
//         </View>
//       );
//     }
//   }
import React, {Component} from 'react';
import {View,StyleSheet,Text,Button,Image}from 'react-native';


export default class LoginPage extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Image 
          source={require('../../img/logo-m.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})