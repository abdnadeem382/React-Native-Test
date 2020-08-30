import React, { useState } from 'react'
import { View, StyleSheet, Modal, Alert } from 'react-native';
import {TextInput, Button} from 'react-native-paper'
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';


export default Employee = () =>{
    const [Name, setName] = useState("");
    const [Phone, setPhone] = useState("");
    const [Email, setEmail]= useState("")
   // const [Salary, setSalary] = useState("");
    const [picture, setPicture]= useState("")
    const [modal, setModal]= useState(false)

    const pickFromGallery = async ()=>{
        const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if (granted){
            let data = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                quality:0.5,
                aspect:[1,1],
                mediaTypes:ImagePicker.MediaTypeOptions.Images

            })
            if(!data.cancelled){
                let newFile = {
                    uri: data.uri,
                    type: `test/${data.uri.split(".")[1]}`,
                    name: `test.${data.uri.split(".")[1]}`
                }
                handleUpload(newFile);
            }

        }
        else{
            Alert.alert("Please grant permission to access photos")
        }
    }

    const handleUpload = (image)=>{
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "EmployeeApp");
        data.append("cloud_name", "abdnadeem");
        fetch("https://api.cloudinary.com/v1_1/abdnadeem/image/upload", {
            method: "post",
            body: data
        }).then(res=>res.json()).
        then(data=>{
            console.log(data)
            setPicture(data.url);
            setModal(false);
        });

        
    }

    const pickFromCamera = async ()=>{
        const {granted} = await Permissions.askAsync(Permissions.CAMERA)
        if(granted){
            let data = await ImagePicker.launchCameraAsync({
                allowsEditing:true,
                aspect:[1,1],
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                quality:1
            })
            if(!data.cancelled){
                let newFile = {
                    uri: data.uri,
                    type: `test/${data.uri.split(".")[1]}`,
                    name: `test.${data.uri.split(".")[1]}`
                }
                handleUpload(newFile);
            }
        }
        else{
            Alert.alert("Please grant permission to access camera")
        }
    }

    return (
        <View style = {styles.container}>
            <View >
            <TextInput
                style = {styles.inputs}
                label='Name'
                theme = {theme}
                mode="outlined"
                onChangeText={text => setName( text )}/>

            <TextInput
                style = {styles.inputs}
                label='Email'
                mode="outlined"
                theme = {theme}
                onChangeText={text => setEmail( text )}/>

            <TextInput
                style = {styles.inputs}
                label='Phone'
                mode="outlined"
                keyboardType="number-pad"
                theme = {theme}
                onChangeText={text => setPhone({ text })}/>

            
            </View>

            <Button 
                style={styles.uploadBtn}
                icon={(picture === "")? "upload" : "check" }
                mode="contained"
                theme = {theme}
                onPress={()=>setModal(true)}>
                Upload Image
            </Button>

            <Button 
                style={styles.uploadBtn}
                icon="content-save"
                mode="contained"
                theme = {theme}
                onPress={()=>alert("save")}>
                Save
            </Button>

            <Modal 
            animationType="slide"
            transparent={true}
            visible={modal}
            onRequestClose={()=>{setModal(false)}}
            >
            <View style = {styles.modalView}>
                <View style={styles.modalBtn}>
                    <Button icon="camera"
                        mode="contained"
                        theme = {theme}
                        onPress={()=>{pickFromCamera()}}>
                        Camera
                    </Button>

                    <Button icon="image-area"
                        mode="contained"
                        theme = {theme}
                        onPress={()=> {pickFromGallery()}}>
                        Gallery
                    </Button>

                </View>

                <Button 
                    theme = {theme}
                    onPress={()=>setModal(false)}>
                    Cancel
                </Button>
            
            </View>
            </Modal>
        </View>
    )
}

// <TextInput
//                 style = {styles.inputs}
//                 label='Salary'
//                 mode="outlined"
//                 keyboardType="number-pad"
//                 theme = {theme}
//                 onChangeText={text => setSalary({ text })}/>

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
        backgroundColor:"#c8ccc9"
      },  
      text:{
        margin:6,
        marginTop: 30
      },
      inputs:{
         margin:6
      },
      modalView:{
          backgroundColor:"white",
          position:"absolute",
          width:"100%",
          bottom:10,
          paddingTop:20
         
      },
      modalBtn:{
          flexDirection:"row",
          justifyContent:"space-around",
          marginTop:10
      },
      uploadBtn:{
          margin: 10,
          marginLeft: 40,
          marginRight:40,
          paddingTop:7,
          paddingBottom:7
      }
    
    })