import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import CancelScheduleSendIcon from "@material-ui/icons/CancelScheduleSend";
import EventIcon from "@material-ui/icons/Event";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
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
    marginTop: 90,
    alignItems: theme.center,
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
}));

export default function Missions(props) {
  const pressA = () => {
    navigation.navigate("MissionsTp", { type: "Aborted" });
  };
  const pressF = () => {
    navigation.navigate("MissionsTp", { type: "Finished" });
  };
  const pressP = () => {
    navigation.navigate("MissionsTp", { type: "Pending" });
  };

  const classes = useStyles();
  return (
    <View>
      <Text style={styles.b}>Welcome {props.name}</Text>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<EventIcon />}
        className={classes.butto}
      >
        Missions
      </Button>
      <Button
        variant="outlined"
        color="default"
        startIcon={<HourglassEmptyIcon />}
        className={classes.button}
      >
        Pending
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<AccountBoxIcon />}
        className={classes.button}
      >
        Profile
      </Button>
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
    marginTop: 80,

    bottom: 0,
  },
  textStyle: {
    textAlign: "center",
    color: "#0f0f0f",
    fontSize: 12,
    marginTop: 140,
  },
  b: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    fontSize: 27,
    textAlign: "center",
  },
});
