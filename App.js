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

const { width, height } = Dimensions.get("screen");
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#d91139" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      >
        {/* <Stack.Screen
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
        <Stack.Screen name="MyDetails" component={MyDetailsScreen} />
        <Stack.Screen name="MemberDetails" component={MemberDetailsScreen} /> */}
        <Stack.Screen
          options={{
            headerTitle: (
              <Image
                style={styles.image}
                source={require("./assets/codetrainlogo.png")}
              />
            ),
            headerRight: () => (
              <View style={{ flexDirection: "row" }}>
                <AntDesign
                  name="user"
                  size={24}
                  color="#fff"
                  style={{ paddingRight: 25 }}
                />
              </View>
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>

    // <View style={styles.container}>
    //   {/* <WelcomeScreenA /> */}

    //   {/* <WelcomeScreenB /> */}

    //   {/* <LoginScreen /> */}

    //   {/* <RegisterScreen /> */}

    //   {/* <MyDetailsScreen /> */}

    //   {/* <MemberDetailsScreen /> */}

    //   {/* <HomeScreen /> */}

    //   {/* <StatusBar style="auto" /> */}
    // </View>
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
