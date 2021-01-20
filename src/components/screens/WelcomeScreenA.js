import React from "react";
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("screen");
export default function WelcomeScreenA({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/codetrainlogo.png")}
        />
      </View>

      <View>
        <Text style={styles.codetrainText}>CODETRAIN{"\n"}CONTACTS</Text>
      </View>

      <View>
        <Text
          style={styles.getstartedText}
          onPress={() => {
            navigation.navigate("WelcomeB");
          }}
        >
          GET STARTED
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "column",
    backgroundColor: "#fcefcc",
    alignItems: "center",
  },

  image: {
    height: 0.07 * height,
    width: 0.89 * width,
    // backgroundColor: "black"
  },

  imageContainer: {
    // height: 0.1 * height,
    // width: 0.99 * width,
    //     alignItems: "center",
    //     backgroundColor: "white",
  },

  textContainer: {
    alignItems: "flex-end",
    backgroundColor: "black",
  },

  codetrainText: {
    fontSize: 25,
    textAlign: "center",
  },

  getstartedText: {
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: "red",
  },
});
