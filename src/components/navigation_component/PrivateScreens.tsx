import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import AboutScreen from "../../screens/AboutScreen";
import CreditScreen from "../../screens/CreditScreen";
import HomeScreen from "../../screens/HomeScreen";

export default function PrivateScreen() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={HomeScreen} />
      <Drawer.Screen name='About' component={AboutScreen} />
      <Drawer.Screen name='Credit' component={CreditScreen} />
    </Drawer.Navigator>
  );
}
