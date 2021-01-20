import React from 'react'
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
export default function WelcomeScreenB() {
    return (
        <View style={styles.container}> 
            <View>
                <Image
                style={styles.image}
                source={require("../../../assets/welcomescreenb.jpg")}
                />
            </View>

            <View style={styles.titlesBox}>
                <Text style={styles.titleText} >KEEP IN TOUCH WITH THE PEOPLE OF CODETRAIN</Text>
                <Text style={styles.subtitleText}>Sign in or register with your Codetrain email</Text>
            </View>

            <View style={styles.loginButtons}>
                <Text style={styles.registerButton}>REGISTER</Text>
                <Text style={styles.signinButton}>SIGN IN</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fcefcc",
        alignItems: "center"
        
    },

    image: {
        height: 0.55 * height,
        width: 1 * width,
    },

    titlesBox:{
        marginHorizontal:0.05 * width,
        marginTop:0.02 * height,
    },

    titleText:{
        fontSize:20
    },

    subtitleText:{
        marginTop:10,
        fontSize:14,
        color:"grey"
    },

    loginButtons:{
        marginTop:0.23 * height,
        width: 0.75 * width,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    registerButton:{
        fontSize:20,
        borderBottomWidth: 2,
        borderBottomColor:"red",
    },

    signinButton:{
        fontSize:20,
        borderBottomWidth: 2,
        borderBottomColor:"red",
    }

})