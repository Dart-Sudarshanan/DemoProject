/**
 * @format
 */

import "react-native";
import React from "react";

import { cleanup, fireEvent, render, waitFor } from "@testing-library/react-native";

// Note: test renderer must be required after react-native.
import LoginScreen from "../src/screens/LoginScreen";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";

describe("Login Form", () => {
  it("it should render text correctly", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    );
    const text = getByTestId("login-header");
    expect(text).toBeTruthy();
  });
});
