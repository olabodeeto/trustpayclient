import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
};

export const userSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    login: (state, action) => {},

    logout: (state, action) => {},
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
