import React , { useState,useEffect  } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import { StyleSheet, Text, View, Image, TextInput, ActivityIndicator} from 'react-native';
import Modal from 'modal-enhanced-react-native-web';
import { Card, Button } from 'react-native-elements';
import { FAB } from 'react-native-paper';


const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

export default function Appbar({navigation}) {
  const classes = useStyles();
  const [dataSource, setData] = useState('');
  const [val, setval] = useState(false);
  const [id, setid] = useState();
  const [pwd, setpwd] = useState();
  const [mail, setmail] = useState();
  const [addd, setaddd] = useState();
  const [vl, setvl] = useState(true);

  const pressAdd = () =>{   
   setval(true) ;
    }
    
    const pressC = () =>{   
    setval(false) ;
    axios.get('http://localhost:3000/api/User/list').then(res => setData(res.data))
    
     }
     
      
      useEffect(() => {
      axios.get('http://localhost:3000/api/User/list').then(res => setData(res.data))
      setvl(false);
           }, [])


  return (
    <React.Fragment>
     <View style={styles.b}><Text  style={styles.b} >Registered Vehicules </Text> 
        { vl && <ActivityIndicator /> } 
        </View>
      
      <View>
   
   <Modal 
        isVisible={val}
        onBackdropPress={() => setval(false)} >
        
              <View style={{flex: 1, justifyContent: 'center'}}>
               <Card >
                 <Card.Title>Add Vehicule</Card.Title>
              <Card.Divider/>
            <View style={{flexDirection: 'row'}}>
            <Text style={{marginTop:20, alignItems: 'center', textAlign:'center'}}>
            Vehicule 
            </Text>
         <TextInput style={styles.input}
placeholder='e.g HG45'
onChangeText={(val) => setid(val)}/>
</View>
<View style={{ flexDirection: 'row'}}>
<Text style={{marginTop:20, alignItems: 'center', textAlign:'center'}}>
      Mail
    </Text>
<TextInput style={styles.input}
placeholder='xyz@gmail.com'
onChangeText={(val) => setmail(val)}/>
</View>
<View style={{ flexDirection: 'row'}}>
<Text style={{marginTop:20, alignItems: 'center', textAlign:'center'}}>
      Pass
    </Text>
<TextInput style={styles.input}

placeholder='*****'
onChangeText={(val) => setpwd(val)}/>
</View>
         <Button
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,marginTop:20}}
            title='Add'  />
         </Card>   
      <Button
       buttonStyle={{borderRadius: 0,width:50, marginLeft: 20, marginBottom: 0,marginTop:20,backgroundColor:'none'}}
          title='close' onPress={pressC} />
     </View>
      </Modal>





      </View>
      <CssBaseline />
      <Paper square className={classes.paper}>
      
        {dataSource && 
        <List className={classes.list}> 
          {dataSource.map(({ id, name, mail}) => (
            <React.Fragment key={name}>
            
              <ListItem button>
               
                <ListItemText primary={name} secondary={mail} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>  }
      </Paper>
      <AppBar position="sticky" color="primary" className={classes.appBar}>
        <Toolbar>
         
          <FAB    style={styles.fab} icon="plus" onPress={pressAdd} >
          
          </FAB>
          
          <div className={classes.grow} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
         
        </Toolbar>
      </AppBar>
    </React.Fragment>
    
  );
}

const styles = StyleSheet.create({
  b: {
    marginTop:20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
   
    fontWeight: "bold" ,
    fontSize:25
   
  },
  c :{
    backgroundColor: '#fff',
  },
 fab:{
 
  position: 'absolute',
  margin: 20,
  right: 140,
  bottom: 0,
  zIndex: 1,
  
  
 
 },
input:{
borderWidth:1,
borderColor: '#777',
padding:8,
margin:10,
width:200,
borderRadius:10,

},
t: {
  
  
   
}



});
