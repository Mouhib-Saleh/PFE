import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

const width_proportion = '60%';
const height_proportion = '60%';


const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      marginLeft: 40,
      marginRight: 40,
      marginBottom: 15,
      height:40,

      alignItems : theme.center,
    },
    butto: {
        margin: theme.spacing(1),
        
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 15,
        marginTop:70,
        alignItems : theme.center,
      },
      appBar: {
        top: 'auto',
        bottom: 0,
      },
      root: {
     marginTop: -60,
        
      },
      root2: {
        maxWidth: 345,
      },
      g: {
        fontWeight: "bold" ,
        fontSize:15,
        textAlign:"left",
        alignItems:"left",
        justifyContent:"left"


      },
    
  }));
  


export default function Profile({navigation}) {

    const [data, setData] = useState({ hits: [] });
    const hid = navigation.getParam('id');
    useEffect(() => {
        axios.post('http://localhost:3000/api/User/data',{
            mail: hid,
         
            }).then(res => setData(res.data))
    
      },)
   
    const classes = useStyles();
    return (
   
        <View style={styles.c} >
         <Image
          style={styles.logo}
          source={require('../assets/pp.png')}
          
        />
         <div className={classes.root}><Fab color="primary" aria-label="edit">
        <EditIcon />
      </Fab></div>
          <Text  style={styles.b} >{data.name}</Text>  
       <View>
       <Card className={classes.root2}>
      <CardActionArea>
        <CardMedia
          component="img"
         
          height="70"
          image={require('../assets/bbb.jpg')}
          
        />
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p"   className={classes.g} >
        Mail: {data.mail}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p"  className={classes.g}>
          ID: {data._id}
          </Typography>
         
         
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         Edit
        </Button>
     
      </CardActions>
    </Card>
    
      <View  position= "fixed" style={styles.headerFooterStyle}>
     <Text style={styles.textStyle}>    Copyright© NGI 2021</Text>
      </View>
      </View>
     </View>
 
  );
}

const styles = StyleSheet.create({
  b: {
   
   
   
    fontWeight: "bold" ,
    fontSize:26,
    marginBottom: 30
  },
  bt: {
   marginTop:"50",
   
  },
  headerFooterStyle: {
    width: '100%',
  
    bottom:0,
   
  },
  textStyle: {
    textAlign: 'center',
    color: '#0f0f0f',
    fontSize: 12,
    marginTop:25,
    padding: 35,
  },
  
  c: {
   
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:120,
    fontSize:27,
    textAlign: 'center',
   
  },

  
  logo: {
    
    
    width: width_proportion,
    height:height_proportion ,
  },

  g: {
   
 
    fontWeight: "bold" ,
    fontSize:15

  },



});