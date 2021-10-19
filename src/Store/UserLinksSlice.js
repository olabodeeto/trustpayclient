import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userlinks: [],
};

export const userLinksSlice = createSlice({
  name: "userlinks",
  initialState,
  reducers: {
    setUserLinks: (state, action) => {
      state.userlinks = [...action.payload];
    },
  },
});

export const { setUserLinks } = userLinksSlice.actions;

export default userLinksSlice.reducer;
