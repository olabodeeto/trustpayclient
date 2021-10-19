import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trans: [],
};

export const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setTransaction: (state, action) => {
      state.trans = action.payload;
    },
  },
});

export const { setTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;
