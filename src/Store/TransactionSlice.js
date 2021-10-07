import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trans: [
    { id: 1, amount: 4000, transactionType: "Credit" },
    { id: 2, amount: 2000, transactionType: "Pending" },
    { id: 3, amount: 5000, transactionType: "Debit" },
    { id: 4, amount: 8000, transactionType: "Credit" },
    { id: 5, amount: 22000, transactionType: "Pending" },
    { id: 6, amount: 1000, transactionType: "Pending" },
  ],
};

export const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    all: (state) => {},
    credit: (state, action) => {},

    debit: (state, action) => {},

    pending: (state, action) => {},
  },
});

export const { all, credit, debit, pending } = transactionSlice.actions;

export default transactionSlice.reducer;
