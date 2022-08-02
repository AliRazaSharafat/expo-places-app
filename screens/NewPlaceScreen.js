import { Platform, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import Colors from "../constants/Color";
import { useDispatch } from "react-redux";
import * as Actions from "../store/actions";
import ImagePicker from "../component/ImagePicker";

const NewPlaceScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const titleHandler = (text) => setTitle(text);

  const saveHandler = () => {
    dispatch(Actions.addPlace(title));
    navigation.navigate("Places");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        mode="outlined"
        activeOutlineColor={Colors.primary}
        label="Title"
        value={title}
        onChangeText={titleHandler}
      />
      <ImagePicker />
      <Button
        mode={Platform.OS === "android" ? "contained" : ""}
        color={Colors.primary}
        labelStyle={{
          color: Platform.OS === "android" ? "white" : Colors.primary,
        }}
        onPress={saveHandler}
      >
        Save
      </Button>
    </View>
  );
};

export const NewPlaceScreenOptions = (navData) => ({
  headerTitle: "Add new place",
});

export default NewPlaceScreen;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  input: {
    backgroundColor: "white",
    marginBottom: 15,
  },
});
