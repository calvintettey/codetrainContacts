import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

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
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        <Text>Place QR Code Within Frame</Text>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },

  body: {
    paddingHorizontal: 0.06 * width,
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
