import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreenA from "./src/components/screens/WelcomeScreenA";
import WelcomeScreenB from "./src/components/screens/WelcomeScreenB";
import LoginScreen from "./src/components/screens/LoginScreen";
import RegisterScreen from "./src/components/screens/RegisterScreen";
import MyDetailsScreen from "./src/components/screens/MyDetailsScreen";
import MemberDetailsScreen from "./src/components/screens/MemberDetailsScreen";
import HomeScreen from "./src/components/screens/HomeScreen";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import QRScannerScreen from "./src/components/screens/QRScannerScreen";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

const { width, height } = Dimensions.get("screen");
const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },

  image: {
    height: 0.04 * height,
    width: 0.45 * width,
  },
});
