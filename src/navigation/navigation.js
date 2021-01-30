import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreenA from "../components/screens/WelcomeScreenA";
import WelcomeScreenB from "../components/screens/WelcomeScreenB";
import LoginScreen from "../components/screens/LoginScreen";
import RegisterScreen from "../components/screens/RegisterScreen";
import MyDetailsScreen from "../components/screens/MyDetailsScreen";
import MemberDetailsScreen from "../components/screens/MemberDetailsScreen";
import HomeScreen from "../components/screens/HomeScreen";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import QRScannerScreen from "../components/screens/QRScannerScreen";
import { connect } from "react-redux";
import { logout } from "../redux/actions/authActions";

const { width, height } = Dimensions.get("screen");
const Stack = createStackNavigator();
function AppContainer({ auth, logout }) {
  return (
    <NavigationContainer>
      {auth.login ? (
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#d91139" },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              headerTitle: (
                <Image
                  style={styles.image}
                  source={require("../../assets/codetrainlogo.png")}
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
                      size={22}
                      color="#fff"
                      style={{ paddingRight: 10 }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{ marginRight: 10 }}
                    onPress={logout}
                  >
                    <Text>Log Out</Text>
                  </TouchableOpacity>
                </View>
              ),
            })}
          />

          <Stack.Screen
            options={{ headerShown: false }}
            name="QR Scanner"
            component={QRScannerScreen}
          />
          <Stack.Screen name="My Profile" component={MyDetailsScreen} />
          <Stack.Screen name="Member Profile" component={MemberDetailsScreen} />
        </Stack.Navigator>
      ) : (
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
        </Stack.Navigator>
      )}
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

const mapStateToProp = (state) => {
  return { auth: state };
};

export default connect(mapStateToProp, { logout })(AppContainer);
