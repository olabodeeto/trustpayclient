import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./TransactionSlice";
import notificationReducer from "./NotificationSlice";
import userReducer from "./UserSlice";
import loginReducer from "./LoginSlice";
import paylinkReducer from "./PaymentlinkSlice";

export const store = configureStore({
  reducer: {
    transaction: transactionReducer,
    notification: notificationReducer,
    user: userReducer,
    isLogin: loginReducer,
    paylink: paylinkReducer,
  },
});
