import React, { useState } from "react";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import { useSelector } from "react-redux";

export default function TransactionList() {
  const transactions = useSelector((state) => state.transaction.trans);
  const [allTrans, setallTrans] = useState(transactions);

  const showCleared = () => {
    const Cleared = transactions.filter(
      (item) => item.transactionType === "Credit"
    );
    setallTrans(Cleared);
  };

  const showPending = () => {
    const Pending = transactions.filter(
      (item) => item.transactionType === "Pending"
    );
    setallTrans(Pending);
  };

  const showDebit = () => {
    const Debit = transactions.filter(
      (item) => item.transactionType === "Debit"
    );
    setallTrans(Debit);
  };

  const showAll = () => {
    setallTrans(transactions);
  };

  const transaction = allTrans.map((item) => (
    <div key={uuid()} className="flex justify-between bg-blue-100 px-2 py-4">
      <div
        className={`${item.transactionType === "Credit" && "text-green-700"} ${
          item.transactionType === "Debit" && "text-red-700"
        } ${item.transactionType === "Pending" && "text-yellow-500"}`}
      >
        {item.amount}
      </div>
      <div
        className={`${item.transactionType === "Credit" && "text-green-700"} ${
          item.transactionType === "Debit" && "text-red-700"
        } ${item.transactionType === "Pending" && "text-yellow-500"}`}
      >
        {item.transactionType}
      </div>
    </div>
  ));
  return (
    <div className="border p-2 mt-5">
      <p className="font-semibold text-gray-500">Transactions</p>
      <div className="mt-5 flex flex-col gap-2 text-sm h-80 overflow-y-scroll">
        {transaction}
      </div>
      <div className="flex gap-1 mt-6 text-sm">
        <button
          className="p-2 w-3/12 border-2 text-gray-400 rounded-lg"
          onClick={showAll}
        >
          All
        </button>
        <button
          className="p-2 w-3/12 bg-green-600 text-white rounded-lg"
          onClick={showCleared}
        >
          Cleared
        </button>
        <button
          className="p-2 w-3/12 bg-red-400 text-white rounded-lg"
          onClick={showDebit}
        >
          Debit
        </button>
        <button
          className="p-2 w-3/12 bg-yellow-400 text-white rounded-lg"
          onClick={showPending}
        >
          Pending
        </button>
      </div>
      <div className="mt-10 w-full">
        <Link to="/create-link">
          <button className="bg-red-300 rounded-lg text-black w-full py-2">
            Create payment link
          </button>
        </Link>
      </div>
    </div>
  );
}
