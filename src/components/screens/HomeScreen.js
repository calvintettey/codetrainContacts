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
  Button,
} from "react-native";
import { QRCode } from "react-native-custom-qr-codes-expo";

const { width, height } = Dimensions.get("screen");
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.textBox}>
          <Text style={styles.headText}>Exchange Contact Information</Text>
          <Text style={styles.subText}>
            Scan this QR below to share your contacts
          </Text>
        </View>

        <View style={styles.qrBox}>
          <QRCode codeStyle="square" content="https://reactnative.com" />
        </View>

        <View style={styles.profileBox}>
          <Image
            style={styles.image}
            source={require("../../../assets/mydetails.jpg")}
          />

          <View style={styles.nameroleBox}>
            <Text style={styles.nameText}>Larry Hutchson</Text>
            <Text style={styles.roleText}>Sales Executive</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerBar}></View>
        <Text style={{ fontSize: 16, color:"black" }}>Want to add a new connection?</Text>
        <TouchableOpacity style={styles.scanBtn}>
          <Text style={{ fontSize: 16, color:"#d91139" }}>Scan QR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fcefcc",
    justifyContent: "space-between",
  },

  body: {
    paddingHorizontal: 0.06 * width,
  },

  textBox: {
    marginTop: 0.1 * height,
  },

  headText: {
    fontSize: 16,
  },

  subText: {
    fontSize: 16,
    color: "grey",
  },

  qrBox: {
    marginVertical: 0.08 * height,
    alignSelf: "center",
  },

  profileBox: {
    flexDirection: "row",
    alignItems: "center",
    // marginTop: 0.1 * height,
  },

  image: {
    height: 0.08 * height,
    width: 0.17 * width,
    borderRadius: 100,
  },

  nameroleBox: {
    marginLeft: 0.04 * width,
  },

  nameText: {
    fontSize: 16,
  },

  roleText: {
    fontSize: 16,
    color: "grey",
  },

  footer: {
    width: 1 * width,
    flexDirection: "row",
    height: 0.12 * height,
    alignItems: "flex-start",
    // justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 0.06 * width,
    borderColor: "#adadad",
    borderTopWidth: 1,
    // backgroundColor: "red",
  },

  scanBtn:{
    marginLeft: 0.03 * width,
    borderColor:"#d91139",
    borderRadius:3,
    borderWidth:1,
    height: 0.04 * height,
    width: 0.3 * width,
    justifyContent: "center",
    alignItems: "center",
  }
});
