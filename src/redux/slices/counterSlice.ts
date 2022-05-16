import { createSlice } from "@reduxjs/toolkit";

interface CounterList{
    "page": number,
    "per_page": number,
    "total": number,
    "total_pages": number,
    "data": []
}

const initialState = {
    counter:{
        "page": 1,
        "per_page": 15,
        "total_pages": null,
        "data": [] as number[]
    },
    isLoading: false,
    hasError: false
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        getCounter: state => {
            state.isLoading = true
        },
        getCounterSuccess: (state,{payload}) => {
            const {page,per_page} = state.counter;
            let startPT = payload === 1 ? 1 : (page * per_page)+1;
            let temp = [];
            for (let index = 1; index <= per_page; index++) {
                temp.push(startPT);
                startPT++;
            }
            state.counter = {
                ...state.counter,
                page: payload,
                data:[...state.counter.data , ...temp]
                // data:payload.data
            }
            state.isLoading = false
            state.hasError = false
        },
        getCounterFailure: state =>{
            state.isLoading = false
            state.hasError = true
        }
    }
});

export const {getCounter,getCounterSuccess,getCounterFailure} = counterSlice.actions;

export default counterSlice.reducer;

export function fetchCounter(page:number){
    return async (dispatch:any) => {
        dispatch(getCounter());

        try {
            dispatch(getCounterSuccess(page));
        } catch (error) {
            dispatch(getCounterFailure());
        }
    }
}