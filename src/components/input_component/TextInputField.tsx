import React from "react";

import { StyleSheet, Text, TextInput, View } from "react-native";

const TextInputField = (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labels}>{props.label}</Text>
      <View>
        <TextInput
          style={styles.textInput}
          {...props}
          value={props.input.value}
          onChangeText={props.input.onChange}
          onBlur={props.input.onBlur}
          onFocus={props.input.onFocus}
        />
      </View>
    </View>
  );
};

export default TextInputField;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  labels: {
    fontSize: 18,
    fontWeight: "400",
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#a39d9d",
    padding: 10,
  },
});
