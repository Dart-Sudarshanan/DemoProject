import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface TextInputFieldProps{
    label: string,
    placeholder: string,
    isSecure: boolean,
    onTextChange: Function
}

export const TextInputField: React.FC<TextInputFieldProps> =({label="",placeholder,isSecure=false,onTextChange}) =>{
    return(
            <View style={styles.container}>
                {label?
                    <Text style={styles.labels}>{label}</Text>:""
                }
                <TextInput 
                    style={styles.textInput}
                    placeholder={placeholder}
                    secureTextEntry={isSecure}
                    onChangeText={(text) => onTextChange(text)}
                />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    labels: {
        fontSize: 18,
        fontWeight: '400'
    },
    textInput: {
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#a39d9d',
        padding:10
    }
})