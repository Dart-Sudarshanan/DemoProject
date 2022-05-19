import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface ButtonProps {
  testID: string;
  title: string;
  onPress: Function;
}

export const ButtonComponent: React.FC<ButtonProps> = ({ title, onPress, testID }) => {
  return (
    <View style={styles.container}>
      <Pressable testID={testID} style={styles.button} onPress={() => onPress()}>
        <Text style={styles.buttonTxt}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
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
