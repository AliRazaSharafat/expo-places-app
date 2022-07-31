import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const NewPlaceScreen = ({ navigation }) => {
  return (
    <View>
      <Text>NewPlaceScreen</Text>
      <Button title="Go to Map" onPress={() => navigation.navigate("Map")} />
    </View>
  );
};

export default NewPlaceScreen;

const styles = StyleSheet.create({});
