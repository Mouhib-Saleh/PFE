import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import CancelScheduleSendIcon from "@material-ui/icons/CancelScheduleSend";
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

export default function Missions({ navigation }) {
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
      <Text style={styles.b}>category</Text>²
      <Button
        variant="outlined"
        color="primary"
        startIcon={<CheckCircleOutlineIcon />}
        className={classes.butto}
        onClick={pressF}
      >
        Finished
      </Button>
      <Button
        variant="outlined"
        color="default"
        startIcon={<HourglassEmptyIcon />}
        className={classes.button}
        onClick={pressP}
      >
        Pending
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<CancelScheduleSendIcon />}
        className={classes.button}
        onClick={pressA}
      >
        Aborted
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
    marginTop: 80,

    bottom: 0,
  },
  textStyle: {
    textAlign: "center",
    color: "#0f0f0f",
    fontSize: 12,
    marginTop: 15,
    padding: 115,
  },
  b: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    fontSize: 27,
    textAlign: "center",
  },
});
