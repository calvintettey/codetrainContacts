import React from "react";
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("screen");
export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require("../../../assets/loginscreen.jpg")}
        />
      </View>

      <View style={styles.textinputBox}>
        <View style={styles.textOnRow}>
          <Text>Email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="john.smith@mail.com"
            placeholderTextColor="#aaaaaa"
          />
        </View>
        <View style={styles.divider}></View>
        <View style={styles.textOnRow}>
          <Text>Password</Text>
          <TextInput
            style={styles.textInput}
            placeholder="12345sacsvf"
            placeholderTextColor="#aaaaaa"
            secureTextEntry={true}
          />
        </View>
      </View>

      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resetPasswordBox}>
        <Text>Forget? </Text>
        <Text style={styles.resetPassword}>Reset Password</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fcefcc",
    alignItems: "center",
  },

  image: {
    height: 0.38 * height,
    width: 1 * width,
  },

  textinputBox: {
    marginTop: 0.1 * height,
    height: 0.07 * height,
    width: 0.9 * width,
  },

  divider: {
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
    marginVertical: 0.01 * height,
  },

  textInput: {
    textAlign: "right",
    fontSize: 16,
  },

  textOnRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  button: {
    height: 0.07 * height,
    width: 0.9 * width,
    backgroundColor: "#d91139",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginVertical: 80,
  },

  buttonText: {
    color: "white",
    fontSize: 20,
  },

  resetPasswordBox:{
    width: 0.9 * width,
    flexDirection: "row",
    alignItems: "center",
  },

  resetPassword:{
    borderBottomWidth: 1,
    borderBottomColor:"red",
  },
});
