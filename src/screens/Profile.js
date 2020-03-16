import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button title="Ir a Home" />
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
export default Profile;
