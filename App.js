import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={require('./assets/bg.jpg')}>
        
        <View style ={styles.overlayContainer}>
          <View style={styles.top}>
            <Text style={styles.heading} onPress={()=>{alert("Home")}}>HOME</Text>
            <Text style={styles.heading} onPress={()=>{alert("Profile")}}>PROFILE</Text>
            <Text style={styles.heading} onPress={()=>{alert("Posts")}}>POSTS</Text>
            <Text style={styles.heading} onPress={()=>{alert("Settings")}}>SETTINGS</Text>
          </View> 
        </View>
      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:Constants.statusBarHeight,
    justifyContent:"center",
    width:"100%",
    height:'100%'
  },
    overlayContainer:{
      flex:1,
      backgroundColor:'rgba(134, 147, 156, .2)'
    },
    header:{
      backgroundColor: "#242424",
      height:50,
      width:"100%"
    },
    background:{
      height:"100%",
      width:"100%",
      resizeMode: 'cover'
    },
    top:{
      justifyContent:"center",
      alignItems:"center",
      height:"90%"
    },
    heading:{
      color:"#fff",
      fontSize:30,
      borderColor:"#fff",
      borderWidth:3,
      backgroundColor:'rgba(255,255,255, .1)',
      padding:20,
      paddingLeft:30,
      paddingRight:30,
      width:210,
      textAlign:"center",
      marginTop:20
    }
  
  });
