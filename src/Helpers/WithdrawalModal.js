import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserBalance } from "../Store/BalanceSlice";

import { Cross } from "akar-icons";
import user from "../Api/User";

export default function WithdrawalModal({ show, balance }) {
  const userData = useSelector((state) => state.user.userData);
  // const userBalance = useSelector((state) => state.balance.userBalance);
  const dispatch = useDispatch();
  const [amount, setamount] = useState("");
  const [error, seterror] = useState("");
  const [btnText, setbtnText] = useState("Proceed");

  const handleWithdraw = async (e) => {
    e.preventDefault();
    setbtnText("Processing...");
    if (parseInt(amount) > balance) {
      seterror("Insufficient balance");
      setbtnText("Proceed");
    } else {
      const { recipientCode } = userData;
      const userdetails = { amount, userid: userData.email, recipientCode };
      const response = await user.withdraw(userdetails);
      if (response.message) {
        seterror("");
        setbtnText("Success!");
        console.log(response);
        dispatch(setUserBalance(response.message));
        setTimeout(() => {
          show(true);
        }, 3000);
      }
    }
  };

  return (
    <div>
      <div className="fixed w-full left-0 z-50 top-0 h-full  bg-gray-900 bg-opacity-80">
        <div
          className="slideup w-11/12 sm:w-10/12 md:w-4/12 m-auto
     bg-white text-gray-500 p-4 rounded-lg min-h-96"
        >
          <h1 className="text-center py-3 sm:text-xl text-gray-400">
            WITHDRAW
          </h1>

          <div className="mt-20 w-full relative">
            <div className="my-4">
              <p className="text-red-500 py-4 text-center absolute left-0 right-0 bottom-10">
                {error}
              </p>
              <form className="flex flex-col" onSubmit={handleWithdraw}>
                <input
                  type="text"
                  placeholder="Amount"
                  required
                  maxLength="6"
                  value={amount}
                  className="py-3 px-2 bg-indigo-50  mb-2 outline-none text-gray-400"
                  onChange={(e) => setamount(e.target.value)}
                />
                <button
                  className="bg-purple-600 text-white py-3 px-4 rounded-lg"
                  type="submit"
                  onSubmit={handleWithdraw}
                >
                  {btnText}
                </button>
              </form>
            </div>
            <div className="mt-20 flex gap-10 justify-center">
              <Cross size={14} onClick={() => show()} color="red" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
