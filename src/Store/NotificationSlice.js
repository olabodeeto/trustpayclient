import { createSlice } from "@reduxjs/toolkit";
import notis from "../Api/Noti";

const initialState = {
  noti: [],
};

export const notificationSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    all: (state) => {},
    readNoti: (state, action) => {
      const id = action.payload;
      state.noti.map((p) => {
        if (p._id === id) {
          notis.readNoti(p._id).then((data) => {
            console.log(data);
          });

          p.notiRead = true;
          console.log(p.notiRead);
          return p;
        }
        return p;
      });
    },

    setNoti: (state, action) => {
      state.noti = [...action.payload];
    },
  },
});

export const { all, readNoti, setNoti } = notificationSlice.actions;

export default notificationSlice.reducer;
