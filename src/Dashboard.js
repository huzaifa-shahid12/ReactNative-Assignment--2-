import React from "react";
import { View, Text, ImageBackground, StyleSheet, Button } from "react-native";

function Dashboard({ navigation }) {
  const image = {
    uri: "https://myauctionsheet.com/blog/wp-content/uploads/2020/10/Overview-8-1140x641.jpg",
  };
  return (
    <View style={styles.View}>
      {/* <Text style={styles.text}>Welcome </Text> */}
      <ImageBackground
        source={image}
        style={styles.ImageBackground}
        resizeMode="stretch"
      />
      <Button
        style={styles.Button}
        title="PickUp"
        onPress={() => navigation.navigate("PickUp")}
      />
    </View>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  View: {
    flex: 1,
    justifyContent: "space-between",
    // paddingVertical: 10,
    // alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
  ImageBackground: {
    flex: 1,
    width: null,
    height: "auto",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    // width: "100%",
    // height: "100%",
    // objectFit: "cover",
  },
  Button: {
    width: "40%",
    height: "40%",
  },
});
