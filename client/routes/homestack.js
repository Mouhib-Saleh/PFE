import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Dash from '../screens/Dash';
import React from 'react';
const screens ={
 
  
  Home:{
    screen: Home,
    navigationOptions: {
      header: null,
     
    }
},
Dash:{
  screen: Dash,
  navigationOptions: {
    
    title :'Home'
   
  }
},
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);