import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AwesomeTextInput } from 'react-native-awesome-text-input';
import Login from '../comp/Login';
const width_proportion = '60%';
const height_proportion = '20%';




export default function App({navigation}) {
  const pressHandler = () =>{
    setlogin(true);
    /* navigation.navigate('Dash',{id:id}); */
  }

  const [id, setid] = useState();
  const [pwd, setpwd] = useState();
  const [login, setlogin] = useState(false);
    return (  <View style={styles.container}>
     
     
   <View style={styles.b}>
   <Text style={{fontWeight: "bold" ,fontSize:30}}>NGI GPS</Text>
        <Text >v1.0</Text>
        <StatusBar style="auto" />
        <Image
          style={styles.logo}
          source={require('../assets/logo.png')}
          
        />
   <View styles={styles.body}>
<Card >
  <Card.Title>Welcome to our services</Card.Title>
  <Card.Divider/>
 <View style={{ flexDirection: 'row'}}>
    <Text style={{marginTop:20,marginRight:12, alignItems: 'center', textAlign:'center'}}>
     User ID
    </Text>
    <TextInput style={styles.input}

placeholder='e.g HG45'
 onChangeText={(val) => setid(val)}
/>


</View>
<View style={{ flexDirection: 'row'}}>
<Text style={{marginTop:20, alignItems: 'center', textAlign:'center'}}>
      User Pass
    </Text>
<TextInput style={styles.input}

placeholder='*****'
onChangeText={(val) => setpwd(val)}
/>

</View>

    <Button
      icon={<Icon name='user' color='#ffffff' />}
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,marginTop:20}}
      title='Login'  onPress={pressHandler}/>
  
</Card>
<View >
   { login &&  <Login  mail={id} password={pwd} id={id} navigation={navigation} />  }
  
     
</View>




</View>
      </View >
      </View>
   
    )
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
     
     
    },
    logo: {
      margin:20 ,
      width: width_proportion,
      height:height_proportion ,
    },
    b: {
      flex: 1,
     
      alignItems: 'center',
     
     marginTop:50,
    },
    input:{
 borderWidth:1,
 borderColor: '#777',
 padding:8,
 margin:10,
 width:200,
 borderRadius:10,

    }
  });
  