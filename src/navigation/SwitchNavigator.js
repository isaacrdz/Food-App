import React from "react";
import TabNavigator from "./TabNavigator";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

const SwitchNavigator = createSwitchNavigator(
  {
    Home: {
      screen: TabNavigator
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(SwitchNavigator);
