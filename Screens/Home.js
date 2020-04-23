import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import Constants from 'expo-constants';
import {Card, FAB} from 'react-native-paper'


export default class Home extends Component {
     data = [
        {id:1, name: "Abdullah", age:22},
        {id:2, name: "Moeez", age:20},
        {id:3, name: "Hammad", age:20},
        {id:4, name: "Abrar", age:21},
        {id:1, name: "Abdullah", age:22},
        {id:2, name: "Moeez", age:20},
        {id:3, name: "Hammad", age:20},
        {id:4, name: "Abrar", age:21},
        {id:1, name: "Abdullah", age:22},
        {id:2, name: "Moeez", age:20},
        {id:3, name: "Hammad", age:20},
        {id:4, name: "Abrar", age:21}
      ];

       renderData = ((item)=>{
        return(
          <Card style={styles.card} >
            <View style={styles.cardView}>
                <Image source={require('../assets/abd.jpeg')} style={styles.img}></Image>
                <View style={styles.heading}>
                    <Text style={styles.cardText}>{`name: ${item.name}   `}</Text>
                    <Text style={{fontSize:12}}>{`age: ${item.age} `}</Text>
                </View>
            
            </View>
          </Card>)
      })


    render() {
        return (
            <View style={styles.container}>
                <FlatList data ={this.data}
                renderItem={({item})=>{return this.renderData(item)}}
                keyExtractor={(item)=>{`${item.id}`}}
                > 
                </FlatList>
                <FAB
                    style={styles.fab}
                    small ={false}
                    icon="plus"
                    color="#fafafa"
                    onPress={() => alert('Pressed')}
                />
      </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:Constants.statusBarHeight,
        justifyContent:"center",
        width:"100%",
        height:'100%',
        backgroundColor :"#bfbcb2"
      },  
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor:"#242424",
        padding:5
        
      },
      heading:{
          marginLeft: 10

      },
      card:{
        margin:8,
        padding: 12
      },
      cardView:{
        flexDirection: "row"
      },
      cardText:{
        fontSize:20
      },
      img:{
          width:60,
          height:60,
          borderRadius:30
      }
    
    });
