import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit"

const userData = [
    {
        name: "Sudar",
        email: "sudarshanan@dartinnovations.net",
        password: "aa1122",
        token: "shudhd23def2r2f23",
    },
    {
        name: "Jeeva",
        email: "jeeva@dartinnovations.net",
        password: "abcd$123",
        token: "shdasdhd23def2r2f23",
    }
]

interface UserModel{
    name: string;
    email: string;
    password: string;
    token: string;
}

type UserState = {
    user: UserModel,
    error: string|undefined
}

interface LoginAction{
    readonly type: 'ON_LOGIN',
    payload: UserModel
}

interface LogoutAction{
    readonly type: 'ON_LOGOUT',
    payload: any
}

interface ErrorAction{
    readonly type: 'ON_ERROR',
    payload: any
}

const initialState = {
    user: {} as UserState,
    error: undefined,
}

type UserAction = LoginAction|LogoutAction|ErrorAction;

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers:{
        onLogin:(state:UserState,action:PayloadAction<any>)=>{
            try {
                const user = userData.find(user => user.email === action.payload.email );
                if(!user){
                    state.user = {};
                    state.error = "User not found";
                }else {
                    if(user.password === action.payload.password){
                        state.user = user;
                        state.error = undefined;
                    }else{
                        state.user = {};
                        state.error = "Password incorrect";
                    }
                }
            } catch (error) {
                ({
                    type:"ON_ERROR",
                    payload: error
                });
            }
        },
    },

});

export const {onLogin} = authSlice.actions;
export default authSlice;