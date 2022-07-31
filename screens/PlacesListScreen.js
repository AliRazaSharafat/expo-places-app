import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const PlacesListScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Places List Screen</Text>
      <Button title="Next" onPress={() => navigation.navigate("PlaceDetail")} />
      <Button title="New" onPress={() => navigation.navigate("AddingPlace")} />
    </View>
  );
};

export default PlacesListScreen;

const styles = StyleSheet.create({});
