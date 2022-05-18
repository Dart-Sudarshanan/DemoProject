import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

import { reducer as formReducer } from "redux-form";
import userSlice from "./slices/userSlice";
import counterSlice from "./slices/counterSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    userAuth: authSlice.reducer,
    userList: userSlice,
    counterList: counterSlice,
  },
});

export type ApplicationState = ReturnType<typeof store.getState>;

export const authUser = (state: ApplicationState) => state.userAuth;
export const userList = (state: ApplicationState) => state.userList;
export const counterList = (state: ApplicationState) => state.counterList;

export { store };
