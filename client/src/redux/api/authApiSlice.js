import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user") 
    ? JSON.parse(localStorage.getItem("user")) 
    : null,
  token: localStorage.getItem("token") || null,
  role: localStorage.getItem("roles") || null,
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token, role } = action.payload;
      state.user = user;
      state.token = token;
      state.role = role;

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      localStorage.setItem("roles", role); 
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;

      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("roles"); 
    },
  },
});

export const { setCredentials, logout } = authReducer.actions;
export default authReducer.reducer;
