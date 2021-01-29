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

const { width, height } = Dimensions.get("screen");
const Stack = createStackNavigator();
export default function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#d91139" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="WelcomeA"
          component={WelcomeScreenA}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="WelcomeB"
          component={WelcomeScreenB}
        />
        <Stack.Screen name="Sign In" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="My Profile" component={MyDetailsScreen} />
        <Stack.Screen name="Member Profile" component={MemberDetailsScreen} />

        <Stack.Screen
          options={{ headerShown: false }}
          name="QR Scanner"
          component={QRScannerScreen}
        />
        <Stack.Screen
          options={({ navigation }) => ({
            headerTitle: (
              <Image
                style={styles.image}
                source={require("./assets/codetrainlogo.png")}
              />
            ),
            headerRight: () => (
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("My Profile");
                  }}
                >
                  <AntDesign
                    name="user"
                    size={24}
                    color="#fff"
                    style={{ paddingRight: 25 }}
                  />
                </TouchableOpacity>
              </View>
            ),
          })}
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>

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
