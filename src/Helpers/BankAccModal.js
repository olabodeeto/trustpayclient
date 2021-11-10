import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router";
import { Cross } from "akar-icons";

export default function BankAccModal({ show }) {
  // const history = useHistory();

  return (
    <div>
      <div className="fixed w-full left-0 z-50 top-0 h-full  bg-gray-900 bg-opacity-80">
        <div
          className="slideup w-11/12 sm:w-10/12 md:w-4/12 m-auto
     bg-white text-gray-500 p-4 rounded-lg min-h-96"
        >
          <h1 className="text-center sm:text-2xl text-gray-400">
            ADD BANK ACCOUNT
          </h1>

          <div className="mt-20 w-full relative">
            <div className="my-4">
              <form className="flex flex-col">
                <input
                  type="text"
                  placeholder="Bank Name"
                  required
                  className="py-3 px-2 bg-indigo-50 mb-2 outline-none text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Account Name"
                  required
                  className="py-3 px-2 bg-indigo-50  mb-2 outline-none text-gray-400"
                />
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Account Number"
                  required
                  maxLength="10"
                  minLength="10"
                  className="py-3 px-2 bg-indigo-50  mb-2 outline-none text-gray-400"
                />
                <button className="bg-purple-600 text-white py-3 px-4 rounded-lg">
                  Proceed
                </button>
              </form>
            </div>
            <div className="mt-20 flex gap-10 justify-center">
              <Cross size={14} onClick={() => show(false)} color="red" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
