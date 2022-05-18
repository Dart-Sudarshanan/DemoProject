import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import LoginScreen from "../../screens/LoginScreen";

export type AuthNavigatorParams = {
  Login: undefined;
};

export default function PublicScreen() {
  const authStackNavigator = createNativeStackNavigator<AuthNavigatorParams>();

  return (
    <authStackNavigator.Navigator>
      <authStackNavigator.Screen name='Login' options={{ headerShown: false }} component={LoginScreen} />
    </authStackNavigator.Navigator>
  );
}
