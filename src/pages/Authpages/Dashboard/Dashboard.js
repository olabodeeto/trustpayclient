import React, { useState } from "react";
import uuid from "react-uuid";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { readNoti } from "../../../Store/NotificationSlice";
import TransactionList from "../Transaction/TransactionList";
import CurrencyFormat from "react-currency-format";
import { Cross } from "akar-icons";

export default function Dashboard() {
  const [balance] = useState(0);
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notification.noti);
  const userData = useSelector((state) => state.user.userData);
  const notif = notifications.filter((item) => item.read === false);
  const notifs = notif.map((noti) => (
    <div
      key={uuid()}
      className="bg-blue-50 flex justify-between border-2 rounded-lg p-4 text-sm mb-2"
    >
      <span>
        {noti.notiType === "Payment"
          ? `New payment notification from ${noti.sender}`
          : `New dispatch notification from ${noti.sender}`}
      </span>
      <Cross
        size={14}
        color="red"
        onClick={() => dispatch(readNoti(noti.id))}
      />
    </div>
  ));

  return (
    <>
      <Header />
      <div className="bg-indigo-100 min-h-screen pb-10">
        <div
          className="relative w-full lg:w-10/12 xl:w-9/12 m-auto top-10  
        mt-5 py-10 md:px-20 md:mt-14"
        >
          <div className="flex flex-col gap-10  md:gap-10 lg:gap-20 md:flex-row">
            <div className="bg-white w-full md:w-7/12 p-2 md:p-5 rounded-lg h-full">
              <div className="w-full h-40 bg-purple-700 p-2 rounded-lg">
                <div className="w-full flex justify-between text-gray-50 text-sm">
                  <span>Balance</span>
                  <span>{userData.firstname}</span>
                </div>
                <div className="flex justify-center items-center mt-10 text-gray-50 text-2xl sm:text-4xl font-bold">
                  {
                    <CurrencyFormat
                      value={balance}
                      thousandSeparator={true}
                      prefix={""}
                      className=" bg-purple-700 w-full outline-none text-center"
                    />
                  }
                </div>
              </div>
              <TransactionList />
            </div>

            <div className="w-full md:w-5/12 sm:w-5/12">
              {notif.length > 0 ? (
                <div className="mb-20">
                  <div className="flex justify-between bg-purple-700 p-4 text-white text-md">
                    Notifications
                    <span>({notif.length} unread)</span>
                  </div>
                  <div className="bg-white p-4">{notifs}</div>
                </div>
              ) : (
                <></>
              )}

              <div>
                <div className="flex justify-between bg-purple-500 p-4 text-white text-md">
                  Payment Links
                  <span>(0)</span>
                </div>
                <div className="bg-white p-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
