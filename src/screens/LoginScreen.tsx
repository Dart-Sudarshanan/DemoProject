import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import UserForm from "../components/forms/UserForm";

function LoginScreen() {
  return (
    <View style={styles.container}>
      <UserForm />
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: "100%",
    borderBottomColor: "#000",
  },
});
