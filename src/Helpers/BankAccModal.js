import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Cross } from "akar-icons";

export default function BankAccModal(showModal) {
  const [hidden, sethidden] = useState("");
  const history = useHistory();

  const closeModal = () => {
    sethidden("hidden");
    // history.push("/");
  };

  useEffect(() => {
    console.log("payment modal mount");
  }, []);
  return (
    <div>
      <div
        className={`${hidden} fixed w-full left-0 z-50 top-0 h-full  bg-gray-900 bg-opacity-80`}
      >
        <div
          className="slideup w-11/12 sm:w-10/12 md:w-4/12 m-auto
     bg-white p-4 rounded-lg min-h-96"
        >
          <h1 className="text-center text-28 sm:text-3xl text-gray-500">
            Add bank account
          </h1>

          <div className="mt-20 w-full relative">
            <p className="text-gray-400 text-center">bank modal content</p>
            <div className="mt-20 flex gap-10 justify-center">
              <Cross size={20} onClick={() => showModal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
