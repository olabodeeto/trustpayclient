import React, { useState } from "react";
// import { useHistory } from "react-router";
import { Cross } from "akar-icons";

export default function WithdrawalModal({ show, balance }) {
  //   const history = useHistory();
  const [amount, setamount] = useState(0);
  const [error, seterror] = useState("");

  const handleWithdraw = (e) => {
    e.preventDefault();
    if (amount > balance) {
      seterror("Insufficient balance");
    } else {
      seterror("");
    }
  };

  return (
    <div>
      <div className="fixed w-full left-0 z-50 top-0 h-full  bg-gray-900 bg-opacity-80">
        <div
          className="slideupp w-11/12 sm:w-10/12 md:w-4/12 m-auto
     bg-white text-gray-500 p-4 rounded-lg min-h-96"
        >
          <h1 className="text-center sm:text-2xl text-gray-400">
            WITHDRAW TO BANK ACCOUNT
          </h1>

          <div className="mt-20 w-full relative">
            <div className="my-4">
              <p className="text-red-500 py-4 text-center absolute left-0 right-0 bottom-10">
                {error}
              </p>
              <form className="flex flex-col" onSubmit={handleWithdraw}>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Amount"
                  required
                  maxLength="10"
                  className="py-3 px-2 bg-indigo-50  mb-2 outline-none text-gray-400"
                  onChange={(e) => setamount(parseInt(e.target.value))}
                />
                <button
                  className="bg-purple-600 text-white py-3 px-4 rounded-lg"
                  type="submit"
                  onSubmit={handleWithdraw}
                >
                  Proceed
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
