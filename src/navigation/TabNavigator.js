import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { HomeNavigator, AboutNavigator } from "./StackNavigator";

import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: () => (
        <Icon name="home" type="font-awesome" color="#232323" size={28} />
      )
    }
  },
  About: {
    screen: AboutNavigator,
    navigationOptions: {
      tabBarLabel: "About",
      tabBarIcon: () => (
        <Icon name="car" type="font-awesome" color="#232323" size={28} />
      )
    }
  }
});

export default createAppContainer(TabNavigator);
