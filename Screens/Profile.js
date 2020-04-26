import React from 'react'
import { View, StyleSheet, Image,Text, Linking, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import {Title, Card, Button} from 'react-native-paper'
import { MaterialIcons} from '@expo/vector-icons';

export default Profile =(props) =>{
    const {id, name, email, position, phone} = props.route.params.item;

    const Dial =()=>{
        if(Platform.OS === "android"){
            Linking.openURL(`tel:${phone}`)
        }
        else{
            Linking.openURL(`telprompt:${phone}`)
        }
    }
    return (
        <View style= {styles.container}>
        <LinearGradient
            colors={["#0a33a3", "#4e91f5"]}
            style={styles.gradient} 
        />
        <View style = {styles.imgView}>
            <Image style = {styles.img} source = {require('../assets/abd.jpeg')}/>
        </View>
        
        <View style = {styles.headings}>
            <Title>{name}</Title>
            <Text>{position}</Text>
        </View>
        
        <Card style= {styles.card} onPress={()=>{Linking.openURL(`mailto:${email}`)}}>
            <View style ={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                <MaterialIcons name="email" size={32} color="#4e91f5" />
                <Text style={{fontSize:17}}>{email}</Text>
            </View>
        </Card>

        <Card style= {styles.card} onPress={()=>{Dial()}}>
            <View style ={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                <MaterialIcons name="phone" size={32} color="#4e91f5" />
                <Text style={{fontSize:17}}>{phone}</Text>
            </View>
        </Card>

        <View style={styles.buttonsView}>
                    <Button icon="account-edit"
                        style={{width:"48%"}}
                        mode="contained"
                        compact={true}
                        theme = {theme}
                        onPress={()=>alert("Edit")}>
                        Edit
                    </Button>

                    <Button icon="delete"
                        mode="contained"
                        compact={true}
                        style={{width:"48%"}}
                        theme = {theme}
                        onPress={()=> alert("Delete")}>
                        Delete 
                    </Button>

                </View>
        

        </View>
    )
}

const theme = {
    colors:{
        primary: "#3e5af7",
        accent: "#3e5af7"
    }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      width:"100%",
      height:'100%',
      backgroundColor:"#e8e7e6"
      
    },
    gradient:{
        height:"20%"
    },
    img:{
        width:140,
        height:140,
        borderRadius:70,
        marginTop:-50,
        
    },
    imgView:{
        alignItems:"center"
    },
    headings:{
        alignItems:"center"
    },
    card:{
        margin:4,
        padding:3
    },
    buttonsView:{
        marginTop:10,
        flexDirection:"row",
        justifyContent:"space-around",

    }
    
      
    
    });