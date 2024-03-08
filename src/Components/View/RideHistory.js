import { View, Text, Button } from "react-native";
import React from "react";

function RideHistory({ navigation }) {
  return (
    <View>
      <Text>RideHistory Page </Text>
      <Button
        title="RideHistoryDetail"
        onPress={() => navigation.navigate("RideHistoryDetail")}
      />
    </View>
  );
}

export default RideHistory;
