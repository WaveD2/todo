import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  userItems: [],
  titleUser: [],
  isActiveBtn: { isStateBtn: {}, isActive: false },
  isResetBtn: { isStateBtn: {}, isActive: false },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserItems: (state, action) => {
      const users = action.payload;
      state.userItems = users;
    },

    updateTitle: (state, action) => {
      const titleActive = action.payload;
      console.log("titleActive", titleActive);
      state.userItems = current(state.userItems).map((item) => {
        if (item.id === titleActive.id) {
          return titleActive;
        }
        return item;
      });
    },
    isActiveUpdateTitle: (state, action) => {
      const isActive = action.payload;
      state.isActiveBtn = isActive;
    },

    isResetTitleUser: (state, action) => {
      const lastTitleUser = action.payload;
      console.log(lastTitleUser);
      state.isResetBtn = lastTitleUser;
    },
  },
});

export const userActions = userSlice.actions;

const userAction = {
  userSlice: userSlice.reducer,
};

export default userAction;
