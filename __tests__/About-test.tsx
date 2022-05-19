/**
 * @format
 */

import "react-native";
import React from "react";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import AboutScreen from "../src/screens/AboutScreen";

describe("About screen", () => {
  it("should returns no data found", async () => {
    jest.useFakeTimers();
    const tree = renderer.create(
      <Provider store={store}>
        <AboutScreen />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
