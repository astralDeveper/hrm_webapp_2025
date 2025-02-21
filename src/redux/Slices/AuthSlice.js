import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: false 
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state) => {
      state.token = true 
    },
  },
});

export const { setAuth } = AuthSlice.actions;

export default AuthSlice.reducer;
