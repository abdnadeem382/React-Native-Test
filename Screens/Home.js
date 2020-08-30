import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import {Card, FAB} from 'react-native-paper'


export default class Home extends Component {
     data = [
        {id:'1', name: "Abdullah", age:22, email: "abdnadeem382@gmail.com", phone: "03345009516", position:"react native"},
        {id:'2', name: "Moeez", age:20, email: "moeezatlas@hotmail.com", phone: "03341234567", position :"Node JS"},
        {id:'3', name: "Hammad", age:20, email: "hammadahmad@gmail.com", phone: "03311234567", position:"Machine Learning"},
        {id:'4', name: "Abrar", age:21, email: "abrar123@gmail.com", phone: "03001234567", position:"Mongo DB"},
      ];

       renderData = ((item)=>{
        return(
          <Card style={styles.card} onPress={()=>this.props.navigation.navigate("Profile",{item})} >
            <View style={styles.cardView}>
                <Image source={require('../assets/abd.jpeg')} style={styles.img}></Image>
                <View style={styles.heading}>
                    <Text style={styles.cardText}>{`${item.name}   `}</Text>
                    <Text style={{fontSize:14}}>{`${item.position} `}</Text>
                </View>
            
            </View>
          </Card>)
      })


    render() {
        return (
            <View style={styles.container}>
                <FlatList data ={this.data}
                renderItem={({item})=>{return this.renderData(item)}}
                keyExtractor={(item)=>{ return item.id}}
                > 
                </FlatList>
                <FAB onPress={()=>{this.props.navigation.navigate("Add Employee")}}
                    style={styles.fab}
                    small ={false}
                    icon="plus"
                    color="#fafafa"
                />
      </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
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
        fontSize:23
      },
      img:{
          width:60,
          height:60,
          borderRadius:30
      }
    
    });
