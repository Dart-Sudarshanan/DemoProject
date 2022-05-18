import { createSlice } from "@reduxjs/toolkit";

interface CounterList {
  page: number;
  per_page: number;
  data: number[];
}

type CounterState = {
  counter: CounterList;
  isLoading: boolean;
  hasError: boolean;
};

const initialState: Readonly<CounterState> = {
  counter: {
    page: 1,
    per_page: 15,
    data: [],
  },
  isLoading: false,
  hasError: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getCounter: (state) => {
      state.isLoading = true;
    },
    getCounterSuccess: (state, { payload }) => {
      const { page, per_page } = state.counter;
      let startPT = payload === 1 ? 1 : page * per_page + 1;
      let temp = [];
      for (let index = 1; index <= per_page; index++) {
        temp.push(startPT);
        startPT++;
      }
      state.counter = {
        ...state.counter,
        page: payload,
        data: [...state.counter.data, ...temp],
        // data:payload.data
      };
      state.isLoading = false;
      state.hasError = false;
    },
    getCounterFailure: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const { getCounter, getCounterSuccess, getCounterFailure } = counterSlice.actions;

export default counterSlice.reducer;

export function fetchCounter(page: number) {
  return async (dispatch: (arg0: { payload: number | undefined; type: string }) => void) => {
    dispatch(getCounter());
    try {
      dispatch(getCounterSuccess(page));
    } catch (error) {
      dispatch(getCounterFailure());
    }
  };
}
