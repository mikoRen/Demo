import React, {Component} from 'react';
import {View,Text,Button}from 'react-native';

export default class DetailsScreen extends Component {

    // static navigationOptions = ({navigation}) => {
    //   // return{
    //   //     title:navigation.getParam('otherParam', 'A Nested Details Screen'),
    //   // };
    //     title: 'Details'
    //   };
      
    render() {
      const {navigation} = this.props;
      const itemID = navigation.getParam('itemId','NO-ID');
      const otherParam = navigation.getParam('otherParam','some default value');
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Details!</Text>
          <Text>Details is Perfect!</Text>
          <Text>itemID: {JSON.stringify(itemID)}</Text>
          <Text>otherParam: {JSON.stringify(otherParam)}</Text>
          <Button
          title="Back"
          onPress={()=> this.props.navigation.goBack()}
          />
          <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
          />
          <Button
          title="Push to Details"
          onPress={() => this.props.navigation.push('Details')}
          />
          <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
          />
        </View>
      );
    }
  }