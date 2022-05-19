/**
 * @format
 */

import "react-native";
import React from "react";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import HomeScreen from "../src/screens/HomeScreen";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";

describe("Home screen", () => {
  it("should returns no data found", async () => {
    jest.useFakeTimers();
    const tree = renderer.create(
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
