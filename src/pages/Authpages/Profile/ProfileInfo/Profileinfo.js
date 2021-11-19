import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CircleCheck, Wallet } from "akar-icons";
import "./Profileinfo.css";
import currencyFormatter from "currency-formatter";
import BankAccModal from "../../../../Helpers/BankAccModal";
import WithdrawalModal from "../../../../Helpers/WithdrawalModal";
import user from "../../../../Api/User";
import { setUserBalance } from "../../../../Store/BalanceSlice";

export default function Profileinfo() {
  const userData = useSelector((state) => state.user.userData);
  const userBalance = useSelector((state) => state.balance.userBalance);
  // const [balance, setbalance] = useState(0);
  const [showBankModal, setshowBankModal] = useState(false);
  const [showWithdrawModal, setshowWithdrawModal] = useState(false);
  const [withdrawBtnText, setwithdrawBtnText] = useState("withdraw");
  const { firstname, lastname, email, verificationStatus } = userData;
  const dispatch = useDispatch();

  // console.log(userData);

  function showModal() {
    setshowBankModal(!showBankModal);
  }

  function showWModal() {
    setshowWithdrawModal(!showWithdrawModal);
  }

  function handleWithdraw() {
    console.log(userData.accNumber);
    if (
      userData.accNumber === "empty" ||
      userData.bankName === "empty" ||
      userData.recipientCode === "empty"
    ) {
      showModal(true);
    } else if (userData.accNumber !== "empty" && userBalance > 1000) {
      setshowWithdrawModal(true);
    } else if (userBalance > 15 && userBalance < 1000) {
      setwithdrawBtnText("Minimum withdraw is ₦1,000");
    } else if (userBalance < 15) {
      setwithdrawBtnText("Insufficient balance");
    }
  }

  useEffect(() => {
    user.balance(userData.email).then((data) => {
      dispatch(setUserBalance(data.message));
    });
  }, [userData.email, dispatch]);

  return (
    <>
      {showWithdrawModal && (
        <WithdrawalModal show={showWModal} balance={userBalance} />
      )}
      {showBankModal && <BankAccModal show={showModal} />}
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
                    {currencyFormatter.format(userBalance, { code: "NGN" })}
                  </span>
                </div>
                <div className="cursor-pointer" onClick={handleWithdraw}>
                  {withdrawBtnText === "Insufficient balance" && (
                    <span className="text-red-400 ">{withdrawBtnText}</span>
                  )}

                  {withdrawBtnText === "Minimum withdraw is ₦1,000" && (
                    <span className="text-red-400 ">{withdrawBtnText}</span>
                  )}
                  {withdrawBtnText === "withdraw" && (
                    <span className="text-green-400">{withdrawBtnText}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-10 mb-10">
              <h2 className="2xl text-gray-400">Notification</h2>
              <p>
                <span className="text-sm">Email</span>
              </p>
            </div>

            <div className="mt-10 mb-10">
              <h2 className="2xl text-gray-400">Currency settings</h2>
              <p>
                <span className="text-sm">Naira (₦)</span>
              </p>
            </div>

            <div className="tp-profile-userinfo">
              <h2 className="2xl text-gray-400 mb-2">Bank Details</h2>
              <div className="flex justify-between">
                <div>
                  <p>
                    <span className="text-gray-700">
                      {userData.bankName !== "empty"
                        ? userData.bankName
                        : "Bank Name"}
                    </span>
                  </p>
                  <p>
                    <span className="text-sm text-gray-800">
                      {userData.accNumber !== "empty"
                        ? userData.accNumber
                        : "Account Number"}
                    </span>
                  </p>
                </div>
                <div>
                  {userData.accNumber === "empty" ? (
                    <button
                      className="py-2 px-5 bg-purple-600 text-white rounded-lg"
                      onClick={() => showModal(true)}
                    >
                      Add Bank
                    </button>
                  ) : (
                    ""
                  )}
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
