import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Ir a Profile"
        onPress={() => navigation.navigate("Profile")}
      />
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
export default withNavigation(Home);
