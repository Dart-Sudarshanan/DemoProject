import React from "react";
import { Provider } from "react-redux";

import renderer from "react-test-renderer";
import { store } from "../src/redux/store";
import CreditScreen from "../src/screens/CreditScreen";

it("Credit screen renders correctly", () => {
  const navigation = { navigate: () => {} };
  spyOn(navigation, "navigate");
  const tree = renderer.create(
    <Provider store={store}>
      <CreditScreen />
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});
