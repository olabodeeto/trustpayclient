import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  payLink: "",
};

export const paymentLinkSlice = createSlice({
  name: "paymentlinks",
  initialState,
  reducers: {
    setPaymentLink: (state, action) => {
      state.payLink = action.payload;
    },
  },
});

export const { setPaymentLink } = paymentLinkSlice.actions;

export default paymentLinkSlice.reducer;
