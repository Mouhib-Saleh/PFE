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
import DeleteIcon from "@material-ui/icons/Delete";
import MoreIcon from "@material-ui/icons/More";

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

  root: {},
}));

export default function Vehicule({ navigation }) {
  const classes = useStyles();
  const [dataSource, setData] = useState("");
  const [res, setRes] = useState("");
  const [visible, setvisible] = useState(false);
  const [mat, setmat] = useState();
  const [brand, setbrand] = useState();
  const [year, setyear] = useState();
  const [add, setadd] = useState();
  const [loading, setloading] = useState(true);
  const [loading2, setloading2] = useState(false);
  const hid = navigation.getParam("type");

  useEffect(() => {
    axios
      .post("http://localhost:3000/api/user/filterMissions", {
        status: hid,
      })
      .then((res) => {
        setData(res.data);
        setloading(false);
      });
  });

  return (
    <React.Fragment>
      <View style={styles.b}>
        <Text style={styles.b}>{navigation.getParam("type")} Missions </Text>
        {loading && <ActivityIndicator />}
      </View>

      <CssBaseline />
      <Paper square className={classes.paper}>
        {dataSource && (
          <FlatList
            style={styles.list}
            data={dataSource}
            renderItem={({ item }) => (
              <View style={{ flexDirection: "row" }}>
                <ListItemText
                  className={classes.list}
                  primary={item.start_Date}
                  secondary={item.end_Date}
                />
                <IconButton color="primary" className={classes.root}>
                  <MoreIcon />
                </IconButton>
                <IconButton
                  onClick={() =>
                    axios
                      .post("http://localhost:3000/api/user/deleteM", {
                        _id: item._id,
                      })
                      .then((res) => {
                        setRes(res.data);
                        alert("Mission Deleted");
                      })
                  }
                  color="secondary"
                  className={classes.root}
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              </View>
            )}
          />
        )}
      </Paper>
      <AppBar position="sticky" color="primary" className={classes.appBar}>
        <Toolbar>
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
