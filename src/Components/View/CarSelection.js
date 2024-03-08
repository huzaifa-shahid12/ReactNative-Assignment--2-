import { View, Text, Button, Image, StyleSheet } from "react-native";
import React from "react";

function CarSelection({ route }) {
  const { pickup, destination } = route.params;

  const fares = {
    bike: 50,
    deliveryBike: 70,
    car: 100,
    premiumCar: 150,
  };

  const calculateFare = (vehicle) => {
    const { latitude: pickupLat, longitude: pickupLong } = pickup.geocodes.main;
    const { latitude: destinationLat, longitude: destinationLong } =
      destination.geocodes.main;

    const distance = calcCrow(
      pickupLat,
      pickupLong,
      destinationLat,
      destinationLong
    );

    const fare = fares[vehicle] * distance;
    alert("Rs. " + fare.toFixed(2));
  };

  function calcCrow(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  }

  function toRad(Value) {
    return (Value * Math.PI) / 180;
  }

  return (
    <View>
      <View style={styles.main}>
        <View style={styles.location}>
          <Text style={styles.pickup}>Your Pickup location is </Text>
          <Text style={styles.pikuplocation}>
            {pickup.name}, {pickup.address}
          </Text>
          <Text style={styles.destination}>Your Destination location is </Text>
          <Text style={styles.destinationlocation}>
            {destination.name} , {destination.address}
          </Text>
        </View>
        <View style={styles.style}>
          <View style={styles.container}>
            {/* First Image */}
            <View style={styles.imageContainer}>
              <Image
                style={styles.logo}
                source={{
                  uri: "data:image/jpeg;base64,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",
                }}
              />
              <Text
                style={styles.imageText}
                onPress={() => calculateFare("car")}
              >
                Car | 100 RS Km
              </Text>
            </View>
            {/* Second Image */}
            <View style={styles.imageContainer}>
              <Image
                style={styles.logo}
                // onPress = {() => calculateFare('car') }
                source={{
                  uri: "data:image/jpeg;base64,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",
                }}
              />
              <Text
                style={styles.imageText}
                onPress={() => calculateFare("premiumCar")}
              >
                Premium Car | 150 RS Km
              </Text>
            </View>
            {/* Third Image */}
            <View style={styles.imageContainer}>
              <Image
                style={styles.bike}
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQowuOTeAIeHZ8dNf2_uba0z1whWYSfYtx7uA&usqp=CAU",
                }}
              />
              <Text
                style={styles.imageText}
                onPress={() => calculateFare("bike")}
              >
                Bike | 50 RS Km
              </Text>
            </View>
            {/* Fourth Image */}
            <View style={styles.imageContainer}>
              <Image
                style={styles.bike}
                source={{
                  uri: "data:image/jpeg;base64,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",
                }}
              />
              <Text
                style={styles.imageText}
                onPress={() => calculateFare("deliveryBike")}
              >
                Delivery | 70 RS Km
              </Text>
            </View>
          </View>
        </View>

        {/* <View style={styles.viewButton}>
        <Button
        style={styles.button}
        title="RideHistory"
        onPress={() => navigation.navigate("RideHistory")}
        />
      </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#fff",
  },
  container: {
    paddingTop: 50,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 50,
    justifyContent: "center",
  },
  logo: {
    width: "100%",
    height: 130,
  },
  bike: {
    width: "100%",
    height: 120,
  },
  imageContainer: {
    width: "40%",
    alignItems: "center",
  },
  imageText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
  },
  location: {
    alignItems: "center",
    paddingTop: 15,
  },
  pickup: {
    padding: 1,
    fontSize: 17,
    fontWeight: "500",
  },
  pikuplocation: {
    fontSize: 20,
    padding: 2,
    fontWeight: "600",
  },
  destination: {
    padding: 2,
    fontSize: 17,
    fontWeight: "500",
  },
  destinationlocation: {
    fontSize: 20,
    padding: 2,
    fontWeight: "600",
  },
});

export default CarSelection;
