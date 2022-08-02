import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import PlaceItem from "../component/PlaceItem";

const PlacesListScreen = ({ navigation }) => {
  const places = useSelector((state) => state.places.places);
  return (
    <View style={styles.container}>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <PlaceItem
            image={null}
            title={itemData.item.title}
            address={null}
            onSelect={() => {
              navigation.navigate("PlaceDetail", {
                placeTitle: itemData.item.title,
                placeId: itemData.item.id,
              });
            }}
          />
        )}
      />
    </View>
  );
};

export default PlacesListScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
});
