/**
 * @format
 */

import "react-native";
import React from "react";

// import Enzyme, { shallow } from "enzyme";
// import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { cleanup, fireEvent, render } from "@testing-library/react-native";

// Note: test renderer must be required after react-native.
import LoginScreen from "../src/screens/LoginScreen";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";

describe("Login Form", () => {
  it("form rendered correctly", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    );
    const text = getByTestId("form-wrapper");
    expect(text).toBeTruthy();
  });

  it("Fields are empty", () => {
    const onSubmit = jest.fn();
    const { getByTestId, getAllByTestId, queryAllByText } = render(
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    );

    const button = getByTestId("button");
    fireEvent.press(button);
    expect(queryAllByText("Both fields are required").length).toBe(1);
  });

  it("User is empty", () => {
    const onSubmit = jest.fn();
    const { getByTestId, getAllByTestId, queryAllByText } = render(
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    );
    const input = getAllByTestId("login-input");
    expect(input).toHaveLength(2);
    fireEvent.changeText(input[1], "aa112");
    const button = getByTestId("button");
    fireEvent.press(button);
    expect(queryAllByText("Username is required").length).toBe(1);
  });

  it("Password is empty", () => {
    const onSubmit = jest.fn();
    const { getByTestId, getAllByTestId, queryAllByText } = render(
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    );
    const input = getAllByTestId("login-input");
    expect(input).toHaveLength(2);
    fireEvent.changeText(input[0], "suda@gmail.com");
    const button = getByTestId("button");
    fireEvent.press(button);
    expect(queryAllByText("Password is required").length).toBe(1);
  });

  it("User not found", () => {
    const onSubmit = jest.fn();
    const { getByTestId, getAllByTestId, queryAllByText } = render(
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    );

    const input = getAllByTestId("login-input");
    const button = getByTestId("button");
    expect(input).toHaveLength(2);
    fireEvent.changeText(input[0], "suda@gmail.com");
    fireEvent.changeText(input[1], "aa112");
    fireEvent.press(button);

    expect(queryAllByText("User not found").length).toBe(1);
  });

  it("Password incorrect", () => {
    const onSubmit = jest.fn();
    const navigationMock = jest.fn();
    const { getByTestId, getAllByTestId, queryAllByText } = render(
      <Provider store={store}>
        <LoginScreen navigation={{ push: navigationMock }} />
      </Provider>
    );

    const input = getAllByTestId("login-input");
    const button = getByTestId("button");
    expect(input).toHaveLength(2);
    fireEvent.changeText(input[0], "sudar@gmail.com");
    fireEvent.changeText(input[1], "aa112");
    fireEvent.press(button);

    expect(queryAllByText("Password incorrect").length).toBe(1);
  });

  it("Login Successful", () => {
    const onSubmit = jest.fn();
    const navigationMock = jest.fn();
    const { getByTestId, getAllByTestId, toJSON } = render(
      <Provider store={store}>
        <LoginScreen navigation={navigationMock} />
      </Provider>
    );

    const input = getAllByTestId("login-input");
    const button = getByTestId("button");
    expect(input).toHaveLength(2);
    fireEvent.changeText(input[0], "sudar@gmail.com");
    fireEvent.changeText(input[1], "aa1122");
    fireEvent.press(button);

    expect(navigationMock).toBeCalledWith("Home");
    // expect(toJSON()).toMatchSnapshot();
    // expect(queryAllByText("Password incorrect").length).toBe(1);
  });

  // it("it should render text in color #4d4949", () => {
  //   const { getByTestId, getByText, getAllByTestId, toJSON } = render(
  //     <Provider store={store}>
  //       <LoginScreen />
  //     </Provider>
  //   );
  //   const text = getByTestId("login-header");
  //   expect(text.props.style).toMatchObject({ color: "#4d4949", fontSize: 24, fontWeight: "700" });
  // });
});
