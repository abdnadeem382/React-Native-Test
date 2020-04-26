import React from 'react';
import { View, StyleSheet  } from 'react-native';
import Constants from 'expo-constants';
import Home from './Screens/Home'
import Employee from './Screens/Employee';
import Profile from './Screens/Profile';
import {NavigationContainer} from'@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Options = {
    title:"HOME",
    headerTintColor:"white",
    headerStyle:{
    backgroundColor:"#3e5af7"
  }
}

App= ()=> {

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={Home}
        options = {Options} 
        />
      <Stack.Screen 
        name="Add Employee" 
        component={Employee} 
        options = {{...Options, title:"Add Employee"}}
        />
      <Stack.Screen 
        name="Profile" 
        component={Profile} 
        options = {{...Options, title:"Profile"}}
        />
    </Stack.Navigator>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    width:"100%",
    height:'100%',
    backgroundColor :"#bfbcb2"
  },
  
  
    
  
  });
  export default  ()=>{
    return(
      <NavigationContainer>
        <App/>
      </NavigationContainer>
    )
  }
