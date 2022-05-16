import { createSlice } from "@reduxjs/toolkit"

interface UserModel{
    "id": number,
    "email": string,
    "first_name": string,
    "last_name": string,
    "avatar":string
}

interface UserList{
    "page": number,
    "per_page": number,
    "total": number,
    "total_pages": number,
    "data": []
}

// type UserState = {
//     users: Array<UserList>,
//     isLoading: boolean,
//     hasError: boolean
// }

const initialState = {
    users: {
        "page": 1,
        "per_page": null,
        "total": null,
        "total_pages": null,
        "data": [] as UserModel[]
    },
    isLoading: false,
    hasError: false,
}

const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        getUsers: state => {
            state.isLoading = true
        },
        getUserSuccess: (state,{payload}) => {
            state.users = {
                page:payload.page,
                per_page:payload.per_page,
                total:payload.total,
                total_pages:payload.total_pages,
                data:[...state.users.data , ...payload.data]
                // data:payload.data
            }
            state.isLoading = false
            state.hasError = false
        },
        getUserFailure: state =>{
            state.isLoading = false
            state.hasError = true
        }
    }
});

export const {getUsers,getUserSuccess,getUserFailure} = usersSlice.actions;

export default usersSlice.reducer;

export function fetchUser(page:number){
    return async (dispatch:any) => {
        dispatch(getUsers());

        try {
            // const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const response = await fetch(`https://reqres.in/api/users?page=${page}`);
            const userData = await response.json();
            // console.log(userData);
            dispatch(getUserSuccess(userData));
        } catch (error) {
            // console.log(error)
            dispatch(getUserFailure());
        }
    }
}