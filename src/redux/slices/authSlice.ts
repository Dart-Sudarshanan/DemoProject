import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const userData = [
    {
        name: "Sudar",
        email: "sudar@gmail.com",
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

interface AuthUserModel{
    name: string;
    email: string;
    password: string;
    token: string;
}

type UserState = {
    user: AuthUserModel|{},
    error: string|undefined
}

const initialState = {
    user: {} as UserState,
    error: undefined,
}

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