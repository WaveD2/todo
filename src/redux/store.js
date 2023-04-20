import { configureStore } from "@reduxjs/toolkit";
import userAction from "./createSlice/userSlice";
const store = configureStore({
  reducer: {
    userSlice: userAction.userSlice,
  },
});

export default store;
