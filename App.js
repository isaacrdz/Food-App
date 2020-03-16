import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SwitchNavigator from "./src/navigation/SwitchNavigator";

class App extends Component {
  render() {
    return <SwitchNavigator />;
  }
}

export default App;
