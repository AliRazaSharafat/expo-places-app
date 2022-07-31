import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Color from "../constants/Color";

const CustomHeaderButton = (props) => (
  <HeaderButton
    IconComponent={Ionicons}
    iconSize={23}
    color={Platform.OS === "android" ? "white" : Color.primary}
    {...props}
  />
);

export default CustomHeaderButton;
