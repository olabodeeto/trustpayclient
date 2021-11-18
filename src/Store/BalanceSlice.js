import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userBalance: "",
};

export const balanceSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setUserBalance: (state, action) => {
      state.userBalance = action.payload;
    },
  },
});

export const { setUserBalance } = balanceSlice.actions;
export default balanceSlice.reducer;
