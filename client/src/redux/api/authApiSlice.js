import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    user: localStorage.getItem("user") 
    ? JSON.parse(localStorage.getItem("user"))
    : null,
    token: localStorage.getItem("token")
}

export const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
            localStorage.setItem("user", JSON.stringify(action.payload.user))
            localStorage.setItem("token", action.payload.token)
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        }
    }
})

export const { setCredentials, logout } = authapiSlice.actions;
export default authReducer.reducer;