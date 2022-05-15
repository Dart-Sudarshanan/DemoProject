import React from "react";

import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AboutScreen = ({ navigation }:{navigation:any}):React.ReactElement => {
    return (
        <ScrollView>
            <View style={styles.sectionContainer}>
                <View style={styles.contentWrapper}>
                    <Text style={styles.text}>About</Text>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('Credit')}><Text style={styles.buttonTxt}>CreditScreen</Text></Pressable>
                    <Pressable style={[styles.button, { marginTop: 5 }]} onPress={() => navigation.navigate('Home')}><Text style={styles.buttonTxt}>Home</Text></Pressable>
                </View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 10,
        paddingHorizontal: 15,
    },
    contentWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: '400'
    },
    button: {
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 4,
        backgroundColor: '#4c51e6',
    },
    buttonTxt: {
        fontSize: 18,
        fontWeight: '500',
        color: '#fff'
    }
})

export default AboutScreen;