import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="Ir a login" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});
export default Login;
