import React from 'react'
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
  import { Entypo } from "@expo/vector-icons";
  import { Feather } from "@expo/vector-icons";
  import { SimpleLineIcons } from "@expo/vector-icons";
  
const { width, height } = Dimensions.get("screen");

export default function MemberDetailsScreen() {
    return (
        <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image
          style={styles.image}
          source={require("../../../assets/memberdetails.jpg")}
        />

        <View style={styles.nameroleBox}>
          <Text style={styles.nameText}>Joan Shay</Text>
          <Text style={styles.roleText}>Head of Marketing</Text>
        </View>
      </View>

      <View style={styles.social}>
        <Entypo name="twitter-with-circle" size={40} color="#454545" />
        <Entypo name="linkedin-with-circle" size={40} color="#454545" />
      </View>

      <View style={styles.infoBox}>
        <View style={styles.info}>
          <Feather name="phone" size={22} color="black" />
          <Text style={styles.infoText}>+233 (630) 572 395</Text>
        </View>

        <View style={styles.info}>
          <Feather name="mail" size={22} color="black" />
          <Text style={styles.infoText}>joan@codetrain.com</Text>
        </View>

        <View style={styles.info}>
          <SimpleLineIcons name="location-pin" size={22} color="black" />
          <Text style={styles.infoText}>Accra, Ghana</Text>
        </View>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "#fcefcc",
      paddingHorizontal: 0.06 * width,
    },
  
    imageBox: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 0.1 * height,
    },
  
    image: {
      height: 0.11 * height,
      width: 0.24 * width,
      borderRadius: 100,
    },
  
    nameroleBox: {
      marginLeft: 0.06 * width,
    },
  
    nameText: {
      fontSize: 18,
    },
  
    roleText: {
      fontSize: 18,
      color: "grey",
    },
  
    social: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: 0.24 * width,
  
      marginVertical: 0.03 * height,
    },
  
    infoBox: {
      justifyContent: "space-around",
      alignItems: "flex-start",
      height: 0.2 * height,
      width: 0.9 * width,
    },
  
    info: {
      flexDirection: "row",
      justifyContent: "flex-start",
    },
  
    infoText: {
      marginLeft: 0.05 * width,
      textAlign: "left",
      fontSize: 16,
    },
  });
