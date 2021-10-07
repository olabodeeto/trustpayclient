import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noti: [
    {
      id: "1",
      amount: 4000,
      sender: "Segun",
      notiType: "Payment",
      reciever: "Bode",
      action: false,
      read: false,
    },
    {
      id: "4",
      amount: 1000,
      sender: "John Doe",
      reciever: "Bode",
      notiType: "Dispatch",
      action: false,
      read: false,
    },
  ],
};

export const notificationSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    all: (state) => {},
    readNoti: (state, action) => {
      const id = action.payload;
      state.noti.map((p) => {
        if (p.id === id) {
          p.read = true;
          console.log(p.read);
          return p;
        }
        return p;
      });
    },
  },
});

export const { all, readNoti } = notificationSlice.actions;

export default notificationSlice.reducer;
