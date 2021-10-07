import React from "react";
import { useSelector } from "react-redux";
import { CircleCheck, Wallet } from "akar-icons";
import CurrencyFormat from "react-currency-format";
import "./Profileinfo.css";

export default function Profileinfo() {
  const userData = useSelector((state) => state.user.userData);
  const { firstname, lastname, email } = userData;

  return (
    <div className="bg-white min-h-full p-5 rounded-lg">
      {userData ? (
        <>
          <div className="tp-profile-userinfo">
            <div className="flex gap-4 mb-5">
              <h2 className="text-2xl text-gray-400">My profile</h2>
              <span className="text-green-400">
                <CircleCheck size={24} />
              </span>
            </div>
            <p className="tp-user-name">{`${firstname.toUpperCase()} ${lastname.toUpperCase()}`}</p>
            <p>{email}</p>
            <div className="border border-red-400 flex justify-between items-center mt-5 mb-5 p-2 rounded-lg">
              <div className="tp-userinfo-balance">
                <Wallet size={24} />
                <CurrencyFormat
                  value="400000"
                  thousandSeparator={true}
                  prefix={""}
                  className="tp-userinfo-balance-input"
                />
              </div>
              <div className="text-red-400">withdraw</div>
            </div>
          </div>

          <div className="mt-10 mb-10">
            <h2 className="2xl text-gray-400">Notification</h2>
            <p>
              <span className="text-sm">Email, SMS</span>
            </p>
          </div>

          <div className="mt-10 mb-10">
            <h2 className="2xl text-gray-400">Currency settings</h2>
            <p>
              <span className="text-sm">Naira (₦)</span>
            </p>
          </div>

          <div className="tp-profile-userinfo">
            <h2 className="2xl text-gray-400">Bank</h2>
            <p>
              <span>Access bank</span>
            </p>
            <p>
              <span className="text-sm text-gray-800">1234***89</span>
            </p>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
