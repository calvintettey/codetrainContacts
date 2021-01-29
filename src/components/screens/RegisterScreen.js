import React from "react";
import {
  StatusBar,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
class RegisterScreen extends Component {
  render() {
    const { navigation, auth } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.iconBox}>
          <AntDesign name="user" size={70} color="#d91139" />
          <Text style={styles.iconText}>ADD PROFILE PHOTO</Text>
        </View>

        <View style={styles.textinputBox}>
          <View style={styles.textOnRow}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Joan Shay"
              placeholderTextColor="#aaaaaa"
            />
          </View>

          <View style={styles.divider}></View>

          <View style={styles.textOnRow}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.textInput}
              placeholder="john.smith@mail.com"
              placeholderTextColor="#aaaaaa"
            />
          </View>

          <View style={styles.divider}></View>

          <View style={styles.textOnRow}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.textInput}
              placeholder="+233 (244) 245 190"
              placeholderTextColor="#aaaaaa"
            />
          </View>

          <View style={styles.divider}></View>

          <View style={styles.textOnRow}>
            <Text style={styles.label}>Role</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Director of Marketing"
              placeholderTextColor="#aaaaaa"
            />
          </View>

          <View style={styles.divider}></View>

          <View style={styles.textOnRow}>
            <Text style={styles.label}>Twitter</Text>
            <TextInput
              style={styles.textInput}
              placeholder="@joansays"
              placeholderTextColor="#aaaaaa"
            />
          </View>

          <View style={styles.divider}></View>

          <View style={styles.textOnRow}>
            <Text style={styles.label}>LinkedIn</Text>
            <TextInput
              style={styles.textInput}
              placeholder="/joan.shay"
              placeholderTextColor="#aaaaaa"
            />
          </View>

          <View style={styles.divider}></View>

          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Home");
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>R E G I S T E R</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>
      </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fcefcc",
    alignItems: "center",
  },

  iconBox: {
    marginBottom: 0.04 * height,
    height: 0.22 * height,
    width: 1 * width,
    backgroundColor: "#ebdfbe",
    alignItems: "center",
    justifyContent: "center",
  },

  iconText: {
    fontSize: 14,
    color: "#d91139",
  },

  textinputBox: {
    height: 0.07 * height,
    width: 0.9 * width,
  },

  label: {
    fontSize: 16,
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
    marginVertical: 0.01 * height,
  },

  button: {
    height: 0.07 * height,
    width: 0.9 * width,
    backgroundColor: "#d91139",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginVertical: 0.07 * height,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default connect(mapStateToProp, { loginEmailAccount })(RegisterScreen);
