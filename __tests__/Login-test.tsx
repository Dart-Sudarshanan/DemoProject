/**
 * @format
 */

import "react-native";
import React from "react";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import LoginScreen from "../src/screens/LoginScreen";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";

it("Login Form", () => {
  const email = "test@gmail.com";
  const tree = renderer.create(
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});
