import React, { useEffect } from "react";
import uuid from "react-uuid";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import TransactionList from "./TransactionList";
import { Link } from "react-router-dom";
import UserLinks from "../../../components/UserLinks";
import noti from "../../../Api/Noti";
import { setNoti } from "../../../Store/NotificationSlice";

export default function Transaction() {
  const notifications = useSelector((state) => state.notification.noti);
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  const notifs = notifications.map((noti) => {
    if (noti.notiType === "Dispatch" && noti.notiStatus === true) {
      return (
        <Link key={uuid()} to={`/action/${noti._id}`}>
          <div
            key={uuid()}
            className="bg-blue-50 flex justify-between border-2 rounded-lg p-4 text-sm mb-2"
          >
            <span> New dispatch, Confirmation action required</span>
          </div>
        </Link>
      );
    } else if (noti.notiType === "Payment" && noti.notiStatus === true) {
      return (
        <Link key={uuid()} to={`/action/${noti._id}`}>
          <div
            key={uuid()}
            className="bg-blue-50 flex justify-between border-2 rounded-lg p-4 text-sm mb-2"
          >
            <span>
              Payment received from{" "}
              <span className="text-red-400">{noti.notiSender}</span>. Dispatch
              action is needed
            </span>
          </div>
        </Link>
      );
    }
    return noti;
  });

  useEffect(() => {
    noti.getNewNoti(userData._id).then((data) => {
      dispatch(setNoti(data.message));
    });
  }, [dispatch, userData._id]);
  return (
    <>
      <Header />
      <div className="bg-indigo-100 h-screen overflow-y-scroll">
        <div
          className="relative w-11/12 md:w-10/12 m-auto border-2 top-10  
        mt-5 py-10 md:px-20 md:mt-14"
        >
          <div className="flex flex-col gap-10  md:gap-40 lg:flex-row">
            <div className="bg-white w-full md:w-6/12 p-2 md:p-5 rounded-lg h-full">
              <TransactionList />
            </div>
            <div className=" w-full md:w-4/12 sm:w-5/12">
              <div className="mb-10">
                <div className="flex justify-between bg-indigo-400 p-4 text-white text-md">
                  Actions
                  <span>({notifications.length})</span>
                </div>
                <div className="bg-white">{notifs}</div>
              </div>

              <div className="h-80">
                <UserLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
