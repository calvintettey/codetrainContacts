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

  const { width, height } = Dimensions.get("screen");
  export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.textBox}>
                <Text style={styles.headText}>Exchange Contact Information</Text>
                <Text style={styles.subText}>Scan this QR below to share your contacts</Text>
            </View>

            <View style={styles.qrBox}></View>

            <View style={styles.imageBox}>
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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fcefcc",
        paddingHorizontal: 0.06 * width,
    },

    textBox:{
        
        marginTop: 0.1 * height,
    },

    headText:{
        fontSize: 16
    },

    subText:{
        fontSize:16,
        color:"grey"
    },

    qrBox:{
        marginVertical: 0.08 * height,
    },

    imageBox: {
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


})