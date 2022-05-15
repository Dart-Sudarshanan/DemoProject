import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

const store = configureStore({
    reducer:{
        userAuth: authSlice.reducer
    }
});

export type ApplicationState = ReturnType<typeof store.getState >;

// export const selectUser = (state: ApplicationState) => state.userAuth;

export {store};