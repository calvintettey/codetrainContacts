import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreenA from "./src/components/screens/WelcomeScreenA";
import WelcomeScreenB from "./src/components/screens/WelcomeScreenB";
import LoginScreen from "./src/components/screens/LoginScreen";
import RegisterScreen from "./src/components/screens/RegisterScreen";
import MyDetailsScreen from "./src/components/screens/MyDetailsScreen";
import MemberDetailsScreen from "./src/components/screens/MemberDetailsScreen";
import HomeScreen from "./src/components/screens/HomeScreen";


const Stack = createStackNavigator();
export default function App() {
  return (
            <NavigationContainer>
              <StackActions.Navigator>
                <Stack.Screen name="WelcomeA" component={WelcomeScreenA}/>
                <Stack.Screen name="WelcomB" component={WelcomeScreenB}/>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Register" component={RegisterScreen}/>
                <Stack.Screen name="MyDetails" component={MyDetailsScreen}/>
                <Stack.Screen name="MemberDetails" component={MemberDetailsScreen}/>
                <Stack.Screen name="Home" component={HomeScreen}/>



              </StackActions.Navigator>
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
});
