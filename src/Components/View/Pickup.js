import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

function Pickup({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState([]);
  const [pickup, setPickUp] = useState();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      Location.watchPositionAsync(
        {
          accuracy: 6,
          timeInterval: 1000,
          distanceInterval: 1,
        },
        (location) => {
          setLocation(location);
          setLoading(false);
        }
      );
    })();
  }, []);

  // const { latitude, longitude } = location.coords;

  const searchPlaces = (text) => {
    setPickUp();
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "fsq3eHRqwd82LDTgN1ncWj9Kyu+PQclN9GfbNZCR2MIe+0o=",
      },
    };

    const { latitude, longitude } = location.coords;

    fetch(
      `https://api.foursquare.com/v3/places/search?query=${text}%20&ll=${latitude},${longitude}&radius=3000`,
      options
    )
      .then((response) => response.json())
      .then((response) => setPlaces(response.results))
      .catch((err) => console.error(err));
  };

  const placeSelect = (item) => {
    setPickUp(item);
  };

  if (errorMsg) {
    return <Text>{errorMsg}</Text>;
  }

  if (loading || !location) {
    return <ActivityIndicator style={styles.loadingIndicator} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.input}
          placeholder="Search Any Location ... "
          onChangeText={searchPlaces}
        />
      </View>
      {!pickup && (
        <View>
          {places.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => placeSelect(item)}>
              <Text>
                {item.name}, {item.address}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {pickup && (
        <View>
          <Text>Your Pickup Location is </Text>
          <Text>
            {pickup.name}, {pickup.location.address}
          </Text>
        </View>
      )}

      <MapView
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0223,
          longitudeDelta: 0.0223,
        }}
        style={styles.map}
      >
        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
          title="Your Location"
          description="This is your current position."
        />
      </MapView>

      <Button
        disabled={!pickup}
        title="Destination"
        onPress={() => navigation.navigate("Destination", { pickup })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputcontainer: {
    alignItems: "center",
    paddingTop: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 2,
    width: "80%",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default Pickup;
