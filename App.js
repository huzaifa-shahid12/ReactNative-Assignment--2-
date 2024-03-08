import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./src/config/Navigation";
// import Navigator from "./src/Components/View/config/Navigation";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

// fsq3eHRqwd82LDTgN1ncWj9Kyu+PQclN9GfbNZCR2MIe+0o=
