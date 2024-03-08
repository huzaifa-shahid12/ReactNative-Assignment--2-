import { View, Text, Button, Image, StyleSheet } from "react-native";
import React from "react";

function Dashboard({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Your content goes here */}
      <Image
        style={styles.bike}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjs9YDuBKb3n_bJDP4HiIIzyzFiZtYiA_aVA&usqp=CAU",
        }}
      />
      {/* <Text style={styles.text}>Welcome to Careem</Text> */}
      <Button
        style={styles.button}
        title="Go to Ride "
        onPress={() => navigation.navigate("Pickup")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "flex-end", // align content to the bottom
    backgroundColor: "green",
  },
  bike: {
    width: "100%",
    height: "95%", // adjust the height of the image as needed
  },
  button: {
    marginBottom: 20, // add some margin at the bottom
  },
});

export default Dashboard;
