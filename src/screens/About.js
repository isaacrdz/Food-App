import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const About = () => {
  return (
    <View style={styles.container}>
      <Text>About</Text>
      <Button title="Ir a Profile" />
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
export default About;
