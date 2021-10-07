import React from "react";
import Header from "./components/Header";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Action() {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notification.noti);
  const { id } = useParams();
  const notif = notifications.filter((item) => item.id === id);
  const actionTodo = notif.map((el) => {
    if (el.notiType === "Dispatch") {
      return (
        <div className=" text-gray-500 bg-white p-4 rounded-lg">
          <p className="text-2xl">
            Hello, you have a new dispatch notification from{" "}
            <span className="text-red-400">{el.sender}</span>.
          </p>
          <p className="text-sm mt-5">
            Confirm deal only when are you satisfied with what you paid for
          </p>
          <p className="text-sm ">Click confirm button close this process</p>
          <button
            className="mt-10 bg-purple-700 text-white py-2 px-5 
          flex justify-center w-20 rounded-lg"
          >
            Confirm
          </button>
        </div>
      );
    } else if (el.notiType === "Payment") {
      return (
        <div className=" text-gray-500 bg-white p-4 rounded-lg">
          <p className="text-2xl">
            Hello, you have a new payment notification from
            <span className="text-red-400"> {el.sender}</span>.
          </p>
          <p className="text-sm mt-5 sm:w-8/12">
            Kindly dispatch goods/service on time. click on dispatch button to
            notify {el.sender} of the dispatch action
          </p>
          <button
            className="mt-10 bg-purple-700 text-white py-2 px-5 
          flex justify-center w-20 rounded-lg"
          >
            Dispatch
          </button>
        </div>
      );
    }
    return el;
  });
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
