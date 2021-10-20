import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import noti from "../../Api/Noti";
import uuid from "react-uuid";
import transaction from "../../Api/Transaction/Transaction";

export default function Action() {
  const history = useHistory();
  const notifications = useSelector((state) => state.notification.noti);
  const { id } = useParams();
  const [btnText, setbtnText] = useState("Dispatch");
  const [confirmbtnText, setconfirmbtnText] = useState("Confirm");

  const handleUpdate = async (transactionID) => {
    setbtnText("Processing...");
    const res = await transaction.updateLink(transactionID);
    if (res.message === "success") {
      console.log(res.message, "first call");
      const feedback = await noti.updateActionNoti(id);
      if (feedback.message === "success") {
        setbtnText("Success !");
        setTimeout(() => {
          history.push("/transactions");
        }, 3000);
      }
    } else {
      setbtnText("Failed to dispatch !");
      setTimeout(() => {
        history.push("/transactions");
      }, 3000);
    }
  };

  const handleConfirm = async (transactionID) => {
    setconfirmbtnText("Processing...");
    const res = await transaction.updateLink(transactionID);
    if (res.message === "success") {
      console.log(res.message, "first call");
      const feedback = await noti.updateActionNoti(id);
      if (feedback.message === "success") {
        setconfirmbtnText("Success !");
        setTimeout(() => {
          history.push("/transactions");
        }, 3000);
      }
    } else {
      setconfirmbtnText("Failed to dispatch !");
      setTimeout(() => {
        history.push("/transactions");
      }, 3000);
    }
  };

  console.log(notifications);

  const notif = notifications.filter((item) => item._id === id);
  const actionTodo = notif.map((el) => {
    if (el.notiType === "Dispatch") {
      return (
        <div key={uuid()} className=" text-gray-500 bg-white p-4 rounded-lg">
          <p className="text-2xl">
            Hello, you have a new dispatch notification from
            <span className="text-red-400"> {el.notiSender}</span>.
          </p>
          <p className="text-sm mt-5">
            Confirm deal only when are you satisfied with what you paid for
          </p>
          <p className="text-sm ">
            Click confirm button below to close this process
          </p>
          <button
            className="mt-10 bg-purple-700 text-white py-2 px-5 
          flex justify-center rounded-lg"
            onClick={() => handleConfirm(el.transactionID)}
          >
            {confirmbtnText}
          </button>
        </div>
      );
    } else if (el.notiType === "Payment") {
      return (
        <div key={uuid()} className=" text-gray-500 bg-white p-4 rounded-lg">
          <p className="text-2xl">
            Hello, you have a new payment notification from
            <span className="text-red-400"> {el.notiSender}</span>.
          </p>
          <p className="text-sm mt-5 sm:w-8/12">
            Kindly dispatch goods/service on time. click on dispatch button to
            notify {el.sender} of the dispatch action
          </p>
          <button
            className="mt-10 bg-purple-700 text-white py-2 px-5 
          flex justify-center  rounded-lg"
            onClick={() => handleUpdate(el.transactionID)}
          >
            {btnText}
          </button>
        </div>
      );
    }
    return el;
  });

  useEffect(() => {
    noti.readNoti(id).then((data) => {
      console.log("noti read");
    });
  }, [id]);
  return (
    <>
      <Header />
      <div className="bg-indigo-100 h-screen">
        <div
          className="relative w-11/12 md:w-10/12 m-auto border-2 top-10  
        mt-5 py-10 md:px-20 md:mt-14"
        >
          <div className="rounded-lg  sm:w-8/12">{actionTodo}</div>
        </div>
      </div>
    </>
  );
}
