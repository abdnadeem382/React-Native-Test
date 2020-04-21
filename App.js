import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import Constants from expo-constants;

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style = {styles.statusBar}>Header</Text>
      <Text>Open up App.js to start working on your app!</Text>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBar:{
    backgroundColor:"#242424",
    height: Constants.statusBarHeight
  }
});
