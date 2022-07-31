import React from "react";
import { Platform, Image } from "react-native";
// navigation libraries
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
// screens
import PlacesListScreen from "../screens/PlacesListScreen";
import PlacesDetailScreen from "../screens/PlaceDetailScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import MapScreen from "../screens/MapScreen";
import Colors from "../constants/Color";
import HeaderButton from "../component/HeaderButton";

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 40, height: 40 }}
      source={require("../assets/icon.png")}
    />
  );
}

const PlacesViewStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Places"
      screenOptions={(navData) => ({
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
      })}
    >
      <Stack.Screen
        name="Places"
        component={PlacesListScreen}
        options={(navData) => ({
          headerTitle: "All Places",
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="add place"
                iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
                onPress={() => navData.navigation.navigate("NewPlace")}
              />
            </HeaderButtons>
          ),
        })}
      />
      <Stack.Screen
        name="PlaceDetail"
        component={PlacesDetailScreen}
        options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
      />
      <Stack.Screen name="NewPlace" component={NewPlaceScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
};

const AddPlaceStack = () => {
  return (
    <Stack.Navigator initialRouteName="AddPlace">
      <Stack.Screen name="AddPlace" component={NewPlaceScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PlacesView"
          component={PlacesViewStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddingPlace"
          component={AddPlaceStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
