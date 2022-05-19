/**
 * @format
 */

import "react-native";
import React from "react";

import { cleanup, fireEvent, render, waitFor } from "@testing-library/react-native";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import HomeScreen from "../src/screens/HomeScreen";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import { FlatList } from "react-native";
import { fetchUser } from "../src/redux/slices/userSlice";

describe("Home screen", () => {
  // it("should returns no data found", async () => {
  //   jest.useFakeTimers();
  //   const tree = renderer.create(
  //     <Provider store={store}>
  //       <HomeScreen />
  //     </Provider>
  //   );
  //   expect(tree).toMatchSnapshot();
  // });

  it("flat list rendered correctly", async () => {
    // const initialState = [{ id: 1, email: "test@test.com", name: "sudar", gender: "male", status: "active" }];
    store.dispatch(fetchUser(store.getState().userList.users.page));
    const rootTree = render(
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    );
    // debug();
    expect(await waitFor(() => rootTree.getByTestId("loading")));
    // expect(await waitFor(() => rootTree.getByTestId("error-block")));
    // expect(await waitFor(() => getByTestId("no-data")));
    // expect(await waitFor(() => getByTestId("user-list")));

    const userList = store.getState().userList;
    console.log(userList);
  });
});
