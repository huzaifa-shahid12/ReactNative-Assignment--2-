import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "../Components/View/Dashboard";
import CarSelection from "../Components/View/CarSelection";
import Destination from "../Components/View/Destination";
import Pickup from "../Components/View/Pickup";
import RideHistory from "../Components/View/RideHistory";
import RideHistoryDetail from "../Components/View/RideHistoryDetail";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Dashboard" component={DashboardNavigator} />
        <Drawer.Screen name="RideHistory" component={HistoryNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function DashboardNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Pickup" component={Pickup} />
      <Stack.Screen name="Destination" component={Destination} />
      <Stack.Screen name="CarSelection" component={CarSelection} />
    </Stack.Navigator>
  );
}

function HistoryNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Ride History" component={RideHistory} />
      <Stack.Screen name="RideHistoryDetail" component={RideHistoryDetail} />
    </Stack.Navigator>
  );
}

export default Navigator;
