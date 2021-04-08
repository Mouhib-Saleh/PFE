import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Dash from "../screens/Dash";
import Admin from "../screens/Admin";
import Profile from "../screens/Profile";
import Vehicule from "../screens/Vehicule";
import Missions from "../screens/Missions";
import Addm from "../screens/Addm";
import MissionsTp from "../screens/MissionsTp";
import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
function ActionBarIcon() {
  return (
    <Image
      source={require("./logo.png")}
      style={{ width: 62, height: 62, borderRadius: 40 / 2, marginRight: 30 }}
    />
  );
}
const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  Admin: {
    screen: Admin,
    navigationOptions: {
      title: "Admin",
      headerRight: (props) => <ActionBarIcon {...props} />,
    },
  },

  Profile: {
    screen: Profile,
    navigationOptions: {
      title: "Profile",
      headerRight: (props) => <ActionBarIcon {...props} />,
    },
  },
  Dash: {
    screen: Dash,
    navigationOptions: {
      title: "Drivers",
      headerRight: (props) => <ActionBarIcon {...props} />,
    },
  },
  Vehicule: {
    screen: Vehicule,
    navigationOptions: {
      title: "Vehicule",
      headerRight: (props) => <ActionBarIcon {...props} />,
    },
  },
  MissionsTp: {
    screen: MissionsTp,
    navigationOptions: {
      title: "category",
      headerRight: (props) => <ActionBarIcon {...props} />,
    },
  },
  Missions: {
    screen: Missions,
    navigationOptions: {
      title: "Missions",
      headerRight: (props) => <ActionBarIcon {...props} />,
    },
  },
  Admin: {
    screen: Admin,
    navigationOptions: {
      title: "Admin",
      headerRight: (props) => <ActionBarIcon {...props} />,
    },
  },
  Addm: {
    screen: Addm,
    navigationOptions: {
      title: "Missions",
      headerRight: (props) => <ActionBarIcon {...props} />,
    },
  },
};
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
