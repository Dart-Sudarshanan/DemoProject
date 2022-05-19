import { createSlice } from "@reduxjs/toolkit";

interface UserModel {
  id: number;
  email: string;
  name: string;
  gender: string;
  status: string;
}

interface UserList {
  page: number;
  data: UserModel[];
}

type UserState = {
  users: UserList;
  isLoading: boolean;
  hasError: boolean;
};

const initialState: Readonly<UserState> = {
  users: {
    page: 1,
    data: [],
  },
  isLoading: false,
  hasError: false,
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsers: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, { payload }) => {
      state.users = {
        page: payload.page,
        data: [...state.users.data, ...payload.userData],
      };
      state.isLoading = false;
      state.hasError = false;
    },
    getUserFailure: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const { getUsers, getUserSuccess, getUserFailure } = usersSlice.actions;

export default usersSlice.reducer;

export function fetchUser(page: number) {
  return async (dispatch: (arg0: { payload: UserList | undefined; type: string }) => void) => {
    dispatch(getUsers());
    try {
      const response = await fetch(`https://gorest.co.in/public/v2/users?page=${page}`);
      const userData = await response.json();
      dispatch(getUserSuccess({ userData, page }));
    } catch (error) {
      dispatch(getUserFailure());
    }
  };
}
