import React, { useEffect } from "react";
import uuid from "react-uuid";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { readNoti } from "../../../Store/NotificationSlice";
import TransactionList from "../Transaction/TransactionList";
import { Cross } from "akar-icons";
import UserLinks from "../../../components/UserLinks";
import transaction from "../../../Api/Transaction/Transaction";
import user from "../../../Api/User";
import noti from "../../../Api/Noti";
import { setNoti } from "../../../Store/NotificationSlice";
import { setUserLinks } from "../../../Store/UserLinksSlice";
import { setUserBalance } from "../../../Store/BalanceSlice";
import { Link } from "react-router-dom";
import Balance from "./Balance";

export default function Dashboard() {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notification.noti);
  const userData = useSelector((state) => state.user.userData);

  const notif = notifications.filter((item) => item.notiRead === false);
  const notifs = notif.map((noti) => (
    <div
      key={uuid()}
      className="bg-blue-50 flex justify-between border-2 rounded-lg p-4 text-sm mb-2"
    >
      <Link to={`/action/${noti._id}`}>
        <p>
          New <span className="text-red-400">{noti.notiType}</span> notification
          received
          {/* {noti.notiMessage} */}
        </p>
      </Link>
      <Cross
        size={14}
        color="red"
        onClick={() => dispatch(readNoti(noti._id))}
      />
    </div>
  ));

  useEffect(() => {
    transaction.userLinks(userData.email).then((data) => {
      dispatch(setUserLinks(data.message));
    });
  }, [dispatch, userData.email]);

  useEffect(() => {
    noti.getNewNoti(userData.email).then((data) => {
      dispatch(setNoti(data.message));
    });
  }, [dispatch, userData.email]);

  useEffect(() => {
    user.balance(userData.email).then((data) => {
      dispatch(setUserBalance(data.message));
    });
  }, [userData.email, dispatch]);

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
              <Balance />
              <TransactionList />
            </div>

            <div className="w-full md:w-5/12 sm:w-5/12">
              {notif.length > 0 ? (
                <div className="mb-20">
                  <div className="flex justify-between bg-purple-700 p-4 text-white text-md">
                    Notifications
                    <span>({notif.length} unread)</span>
                  </div>
                  <div className="bg-white p-4 max-h-80 overflow-y-scroll">
                    {notifs}
                  </div>
                </div>
              ) : (
                <></>
              )}

              <UserLinks />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
