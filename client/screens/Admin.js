import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DnsIcon from "@material-ui/icons/Dns";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import CommuteIcon from "@material-ui/icons/Commute";
import GroupIcon from "@material-ui/icons/Group";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 15,
    height: 40,

    alignItems: theme.center,
  },
  butto: {
    margin: theme.spacing(1),

    marginLeft: 40,
    marginRight: 40,
    marginBottom: 15,
    marginTop: 70,
    alignItems: theme.center,
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
}));

export default function Admin({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Dash");
  };
  const pressHandler2 = () => {
    navigation.navigate("Profile", { id: navigation.getParam("id") });
  };
  const pressV = () => {
    navigation.navigate("Vehicule");
  };
  const pressV2 = () => {
    navigation.navigate("Missions");
  };

  const classes = useStyles();
  return (
    <View>
      <Text style={styles.b}>Services </Text>

      <Button
        variant="contained"
        color="primary"
        startIcon={<DnsIcon />}
        onClick={pressV2}
        className={classes.butto}
      >
        Missions
      </Button>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddCircleOutlineIcon />}
        className={classes.button}
      >
        Add New
      </Button>

      <Button
        variant="contained"
        color="default"
        startIcon={<CommuteIcon />}
        className={classes.button}
        onClick={pressV}
      >
        vehicules
      </Button>
      <Button
        variant="contained"
        color="default"
        startIcon={<GroupIcon />}
        className={classes.button}
        onClick={pressHandler}
      >
        Drivers
      </Button>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<AccountBoxIcon />}
        className={classes.button}
        onClick={pressHandler2}
      >
        Profile
      </Button>
      <View position="fixed" style={styles.headerFooterStyle}>
        <Text style={styles.textStyle}> Copyright© NGI 2021</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  b: {
    backgroundColor: "#fff",

    fontWeight: "bold",
    fontSize: 30,
  },
  bt: {
    marginTop: "50",
  },
  headerFooterStyle: {
    width: "100%",

    bottom: 0,
  },
  textStyle: {
    textAlign: "center",
    color: "#0f0f0f",
    fontSize: 12,
    marginTop: 120,
  },
  b: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    fontSize: 27,
    textAlign: "center",
  },
});
