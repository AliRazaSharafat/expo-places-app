import { StyleSheet, Text, View, Image, Platform, Alert } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native-paper";
import Colors from "../constants/Color";

const ImagePickerComponent = () => {
  const [pickedImage, setPickedImage] = useState();

  const imageHandler = async () => {
    try {
      const image = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        // mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      console.log(image);
      setPickedImage(image.uri);
    } catch (error) {
      Alert.alert("Error occured!", "Picking an image failed", [
        { text: "Close" },
      ]);
    }
  };

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {!pickedImage ? (
          <Text>No image selected yet!</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedImage }} />
        )}
      </View>
      <Button
        style={styles.button}
        mode={Platform.OS === "android" ? "contained" : ""}
        color={Colors.primary}
        labelStyle={{
          color: Platform.OS === "android" ? "white" : Colors.primary,
        }}
        onPress={imageHandler}
      >
        Take Image
      </Button>
    </View>
  );
};

export default ImagePickerComponent;

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: "center",
  },
  imagePreview: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 200,
    marginBottom: 10,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  button: {
    marginBottom: 15,
  },
});
