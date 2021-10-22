import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CircleCheck, Wallet } from "akar-icons";
import CurrencyFormat from "react-currency-format";
import "./Profileinfo.css";
import currencyFormatter from "currency-formatter";
import BankAccModal from "../../../../Helpers/BankAccModal";

export default function Profileinfo() {
  const userData = useSelector((state) => state.user.userData);
  const [balance, setbalance] = useState(0);
  const [showBankModal, setshowBankModal] = useState(false);
  console.log(userData);
  const { firstname, lastname, email, verificationStatus } = userData;

  const showModal = () => {
    setshowBankModal(!showBankModal);
    console.log(showBankModal);
  };

  return (
    <>
      {showBankModal && <BankAccModal showModal={showModal} />}
      <div className="bg-white min-h-full p-5 rounded-lg">
        {userData ? (
          <>
            <div className="tp-profile-userinfo">
              <div className="flex gap-4 mb-5">
                <h2 className="text-2xl text-gray-400">My profile</h2>
                {verificationStatus && (
                  <span className="text-green-400">
                    <CircleCheck size={24} />
                  </span>
                )}
              </div>
              <p className="tp-user-name">{`${firstname.toUpperCase()} ${lastname.toUpperCase()}`}</p>
              <p>{email}</p>
              <div className="border border-purple-600 flex justify-between items-center mt-5 mb-5 p-2 rounded-lg">
                <div className="tp-userinfo-balance py-2">
                  <Wallet size={24} className="mr-2" />
                  <span className="text-green-400">
                    {currencyFormatter.format(balance, { code: "NGN" })}
                  </span>
                </div>
                <div className="text-green-400 cursor-pointer">withdraw</div>
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
              <div className="flex justify-between">
                <div>
                  <p>
                    <span>Access bank</span>
                  </p>
                  <p>
                    <span className="text-sm text-gray-800">1234***89</span>
                  </p>
                </div>
                <div>
                  <button
                    className="py-2 px-5 bg-purple-600 text-white rounded-lg"
                    onClick={showModal}
                  >
                    Add Bank
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
