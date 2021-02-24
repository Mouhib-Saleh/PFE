import { StylesProvider } from '@material-ui/core';
import React, { useState,useEffect  } from 'react';
import {StyleSheet, Text, View, ActivityIndicator, ScrollView} from 'react-native';
import axios from 'axios';



 export default function Login (props) {
 
    const [id, setid] = useState(props.id);
    const [password, setpwd] = useState(props.password);
    const [mail, setmail] = useState(props.mail);
    const [navigation, setnavigation] = useState(props.navigation);
    const [dataSource, setData] = useState(null);
    const [isLoading, setL] = useState(true);
    
    
    useEffect(() => {


        axios.post('http://localhost:3000/api/user/login',{
            mail: mail,
            password: password,
            }).then(res => {
             
              setData(res.data)
              setL(false)
           
            })

    

   
   
}, );

   
    
    if (dataSource == 'invalid password') {
      alert('invalid password')
     
      return (null);
      }
     else{
        if (dataSource == 'mail doesnt exist') {
            alert('mail doesnt exist')
            return (null);
            }
        
            else{
                if (dataSource == 'Connected') {
                     navigation.navigate('Dash',{id:id}) 
                    return (null);
                    }
                  
                
                    return (null);
              }
           

      }

      
      

  
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
