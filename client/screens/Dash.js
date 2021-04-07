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
import { FAB } from "react-native-paper";

import DeleteIcon from "@material-ui/icons/Delete";

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

export default function Dash({ navigation }) {
  const classes = useStyles();
  const [dataSource, setData] = useState("");
  const [res, setRes] = useState("");
  const [visible, setvisible] = useState(false);
  const [id, setid] = useState();
  const [pwd, setpwd] = useState();
  const [mail, setmail] = useState();
  const [add, setadd] = useState();
  const [loading, setloading] = useState(true);
  const [loading2, setloading2] = useState(false);

  const pressbutton = () => {
    setvisible(true);
  };

  const pressclose = () => {
    setvisible(false);
  };

  const pressadd = () => {
    return axios
      .post("http://localhost:3000/api/user/register", {
        name: id,
        password: pwd,
        mail: mail,
      })
      .then((res) => {
        setadd(res.data);
        setloading2(true);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/User/list")
      .then((res) => setData(res.data));
    setloading(false);
    if (loading2) {
      alert(add);
      setloading2(false);
    }
  });

  return (
    <React.Fragment>
      <View style={styles.b}>
        <Modal isVisible={visible} onBackdropPress={() => setvisible(false)}>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Card>
              <Card.Title>Add Driver</Card.Title>
              <Card.Divider />
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    marginTop: 20,
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  Driver
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="e.g HG45"
                  onChangeText={(visible) => setid(visible)}
                />
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    marginTop: 20,
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  Mail
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="xyz@gmail.com"
                  onChangeText={(visible) => setmail(visible)}
                />
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    marginTop: 20,
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  Pass
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="*****"
                  onChangeText={(visible) => setpwd(visible)}
                />
              </View>

              <Button
                buttonStyle={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                  marginTop: 20,
                }}
                title="Add"
                onPress={pressadd}
              />
            </Card>

            <Button
              buttonStyle={{
                borderRadius: 0,
                width: 50,
                marginLeft: 20,
                marginBottom: 0,
                marginTop: 20,
                backgroundColor: "none",
              }}
              title="close"
              onPress={pressclose}
            />
          </View>
        </Modal>
        <Text style={styles.b}>Enlisted drivers </Text>

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
                  primary={item.name}
                  secondary={item.mail}
                />
                <IconButton
                  onClick={() =>
                    axios
                      .post("http://localhost:3000/api/User/delete", {
                        mail: item.mail,
                      })
                      .then((res) => {
                        setRes(res.data);
                        alert("User Deleted");
                      })
                  }
                  color="secondary"
                  className={classes.root}
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
                <div></div>
              </View>
            )}
          />
        )}
      </Paper>
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 10,
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
