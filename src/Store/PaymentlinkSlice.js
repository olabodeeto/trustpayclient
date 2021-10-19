import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  payLink: "",
  payLinkDetails: {},
};

export const paymentLinkSlice = createSlice({
  name: "paymentlinks",
  initialState,
  reducers: {
    setPaymentLink: (state, action) => {
      state.payLink = action.payload;
    },
    setPaymentLinkDetails: (state, action) => {
      state.payLinkDetails = action.payload;
    },
  },
});

export const { setPaymentLink, setPaymentLinkDetails } =
  paymentLinkSlice.actions;

export default paymentLinkSlice.reducer;
