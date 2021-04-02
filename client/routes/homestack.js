import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Dash from '../screens/Dash';
import Admin from '../screens/Admin';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
function ActionBarIcon() {
  return (
    <Image
    source={require('./logo.png')}
    style={{ width:62, height: 62, borderRadius: 40/2, marginRight :30 }} />
  );
}
const screens ={
 


  Home:{
    screen: Home,
    navigationOptions: {
      header: null,
     
    }
},
Admin:{
  screen: Admin,
  navigationOptions: {
    
    title :'Admin',
    headerRight : props => <ActionBarIcon {...props} /> 
  }
},
  

Dash:{
  screen: Dash,
  navigationOptions: {
    
    title :'Drivers'
   
  }
},
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);