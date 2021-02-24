import { setRef, StylesProvider } from '@material-ui/core';
import React, { useState,useEffect  } from 'react';
import {StyleSheet, Text, View, ActivityIndicator, ScrollView} from 'react-native';
import axios from 'axios';



 export default function Add (props) {
 
    const [name, setname] = useState(props.name);
    const [password, setpwd] = useState(props.password);
    const [mail, setmail] = useState(props.mail);
    const [dataS, setD] = useState(null);
    const [vall, setvall] = useState(true);
   
   if(vall){

      axios.post('http://localhost:3000/api/user/register',{
        name: name,
          password: password,
          mail: mail,
        }).then(res => {
         
          setD(res.data)
         
    
        })
        
} 

    
   
 
   
       return(null)
    
  
    };



    
   
    


const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:30,
        alignItems: 'center',
        paddingTop:15,
        backgroundColor:'#fff',
    },
    item:{
        flex:1,
        marginTop:10,
        padding: 15,
        alignSelf:'stretch',
        margin:10,
        alignItems:'left',
        justifyContent:'center',
        borderBottomWidth:1,
        backgroundColor:'steelblue',
        borderBottomColor:'#eee',

    }
});
