import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import LoginScreen from "../../screens/LoginScreen";

export default function PublicScreen() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Login' options={{ headerShown: false }} component={LoginScreen} />
    </Drawer.Navigator>
  );
}
