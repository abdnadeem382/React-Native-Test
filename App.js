import React from 'react';
import { View, StyleSheet  } from 'react-native';
import Constants from 'expo-constants';
import Home from './Screens/Home'
import Employee from './Screens/Employee';

export default  App= ()=> {

  return (
      //<Home/>
      <Employee/>
      
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:Constants.statusBarHeight,
    justifyContent:"center",
    width:"100%",
    height:'100%',
    backgroundColor :"#bfbcb2"
  }
  
    
  
  });
