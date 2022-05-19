/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
/**
 * Redux methods
 */
import { store } from "./src/redux/store";

import { Provider } from "react-redux";
import Navigations from "./src/components/navigation_component/Navigations";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigations />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
