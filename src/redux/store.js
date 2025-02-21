import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Slices/AuthSlice";

const store = configureStore({
  reducer: {
    Auth: AuthReducer,
  },
});

export default store;
