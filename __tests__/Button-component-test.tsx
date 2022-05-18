import React from "react";

import renderer from "react-test-renderer";
import { ButtonComponent } from "../src/components/input_component/ButtonComponent";

it("Button Component", () => {
  const tree = renderer.create(<ButtonComponent title='Test label' onPress={() => {}} />);
  expect(tree).toMatchSnapshot();
});
