import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const PlaceDetailScreen = ({ navigation }) => {
  return (
    <View>
      <Text>PlaceDetailScreen</Text>
      <Button title="Map" onPress={() => navigation.navigate("Map")} />
    </View>
  );
};

export const PlaceDetailOptions = ({ route }) => ({
  headerTitle: route.params.placeTitle,
});

export default PlaceDetailScreen;

const styles = StyleSheet.create({});
