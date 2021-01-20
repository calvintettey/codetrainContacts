import React, { useState, useEffect } from "react";
import {
  StatusBar,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
export default function QRScannerScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    navigation.navigate("Member Profile");
    // setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.body}>
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        <View style={styles.iconBox}>
          <Ionicons name="flash-sharp" size={20} color="grey" />
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name="close-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.scanText}>Place QR Code Within Frame</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerBar}></View>
        <Text style={{ fontSize: 16, color: "black" }}>
          Want to share your contact?
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={styles.scanBtn}
        >
          <Text style={{ fontSize: 16, color: "#d91139" }}>Send QR</Text>
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
  },

  iconBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 0.06 * width,
  },

  body: {
    paddingHorizontal: 0.06 * width,
    backgroundColor: "#000",
    justifyContent: "space-around",
    height: 0.88 * height,
  },

  scanText: {
    color: "#fff",
    paddingHorizontal: 0.1 * width,
    textAlign: "center",
  },

  footer: {
    width: 1 * width,
    flexDirection: "row",
    height: 0.12 * height,
    alignItems: "flex-start",
    alignItems: "center",
    paddingHorizontal: 0.06 * width,
    borderColor: "#adadad",
    borderTopWidth: 1,
  },

  scanBtn: {
    marginLeft: 0.03 * width,
    borderColor: "#d91139",
    borderRadius: 3,
    borderWidth: 1,
    height: 0.04 * height,
    width: 0.3 * width,
    justifyContent: "center",
    alignItems: "center",
  },
});
