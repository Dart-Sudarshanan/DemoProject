import React from "react";

import renderer from "react-test-renderer";
import TextInputField from "../src/components/input_component/TextInputField";

describe("Text Input Component", () => {
  it("With no params", () => {
    const tree = renderer.create(<TextInputField />);
    expect(tree).toMatchSnapshot();
  });
});
