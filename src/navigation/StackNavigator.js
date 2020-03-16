import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import About from "../screens/About";

export const HomeNavigator = createAppContainer(
  createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "Home"
      })
    },
    Profile: {
      screen: Profile
    }
  })
);

export const AboutNavigator = createAppContainer(
  createStackNavigator({
    Location: {
      screen: About
    }
  })
);
