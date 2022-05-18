import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";

import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { DrawerStackParams } from "../components/navigation_component/PrivateScreens";

type Props = NativeStackScreenProps<DrawerStackParams, "Credit">;

const CreditScreen = (props: Props) => {
  return (
    <ScrollView>
      <View style={styles.sectionContainer}>
        <View style={styles.contentWrapper}>
          <Text style={styles.text}>Credits</Text>
          <Pressable style={styles.button} onPress={() => props.navigation.navigate("About")}>
            <Text style={styles.buttonTxt}>About</Text>
          </Pressable>
          <Pressable style={[styles.button, { marginTop: 5 }]} onPress={() => props.navigation.navigate("Home")}>
            <Text style={styles.buttonTxt}>Home</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 10,
    paddingHorizontal: 15,
  },
  contentWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "400",
  },
  button: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: "#4c51e6",
  },
  buttonTxt: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
  },
});

export default CreditScreen;
