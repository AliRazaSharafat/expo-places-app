import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const MapScreen = ({ navigation }) => {
  return (
    <View>
      <Text>MapScreen</Text>
      <Button title="Go to Top" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
