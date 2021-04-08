import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import ListItemText from "@material-ui/core/ListItemText";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Modal from "modal-enhanced-react-native-web";
import { Card, Button } from "react-native-elements";
import { FAB } from "react-native-paper";

import DeleteIcon from "@material-ui/icons/Delete";
import MoreIcon from "@material-ui/icons/More";

const currencies = [
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
];
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
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  container2: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 10,
    marginBottom: 250,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  textField2: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "44%",
  },

  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "45%",
    },
  },
  root2: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Vehicule({ navigation }) {
  const classes = useStyles();
  const [dataSource, setData] = useState("");
  const [res, setRes] = useState("");
  const [visible, setvisible] = useState(false);
  const [id, setid] = useState();
  const [pwd, setpwd] = useState();
  const [mail, setmail] = useState();
  const [mat, setmat] = useState();
  const [brand, setbrand] = useState();
  const [year, setyear] = useState();
  const [add, setadd] = useState();
  const [loading, setloading] = useState(true);
  const [loading2, setloading2] = useState(false);
  const [prrior, setPrrior] = useState("1");
  const handleChangep = (event) => {
    setPrrior(event.target.value);
  };
  const pressbutton = () => {
    setvisible(true);
  };

  const pressclose = () => {
    setvisible(false);
  };

  const pressadd = () => {
    return axios
      .post("http://localhost:3000/api/user/addVehicule", {
        matricule: mat,
        brand: brand,
        year: year,
      })
      .then((res) => {
        setadd(res.data);
        setloading2(true);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/user/listV")
      .then((res) => setData(res.data));
    setloading(false);
    if (loading2) {
      alert(add);
      setloading2(false);
    }
  });
  const [name, setName] = React.useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <React.Fragment>
      <View style={styles.b}>
        <Text style={styles.b}>Create New </Text>

        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              id="standard-name"
              label="Contact"
              value={name}
              onChange={handleChange}
            />
            <TextField
              id="standard-select-prrior"
              select
              label="Select"
              value={prrior}
              onChange={handleChangep}
              helperText="Please select prriority"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>{" "}
        </form>
        <form className={classes.container} noValidate>
          <TextField
            id="datetime-local"
            label="Start Date"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.textField2}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="datetime-local"
            label="End Date"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.textField2}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
        {loading && <ActivityIndicator />}

        <form className={classes.container2} noValidate></form>
      </View>

      <AppBar position="sticky" color="primary" className={classes.appBar}>
        <Toolbar>
          <FAB style={styles.fab} icon="plus" onPress={pressbutton}></FAB>

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
    marginTop: 20,
    marginBottom: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",

    fontWeight: "bold",
    fontSize: 25,
  },
  c: {
    backgroundColor: "#fff",
  },
  fab: {
    position: "absolute",
    margin: 20,
    right: 140,
    bottom: 0,
    zIndex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
    borderRadius: 10,
  },
  list: {
    marginLeft: 20,
    marginRight: 20,
  },
});
