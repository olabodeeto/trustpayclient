import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import { useSelector, useDispatch } from "react-redux";
import trans from "../../../Api/Transaction/Transaction";
import { setTransaction } from "../../../Store/TransactionSlice";
import currencyFormatter from "currency-formatter";

export default function TransactionList() {
  const transactions = useSelector((state) => state.transaction.trans);
  const userData = useSelector((state) => state.user.userData);
  const [allTrans, setallTrans] = useState(transactions);
  const dispatch = useDispatch();

  const showCleared = () => {
    const Cleared = transactions.filter(
      (item) =>
        item.transactionStatus === "cleared" && item.reciever === userData.email
    );
    console.log(Cleared);
    setallTrans(Cleared);
  };

  const showPending = () => {
    const Pending = transactions.filter(
      (item) =>
        item.transactionStatus === "pending" ||
        item.transactionStatus === "dispatch"
    );
    setallTrans(Pending);
  };

  const showDebit = () => {
    const Debit = transactions.filter((item) => item.sender === userData.email);
    setallTrans(Debit);
  };

  const showAll = () => {
    setallTrans(transactions);
  };

  const getAmountColor = (transStatus, sender, text) => {
    if (
      (transStatus === "pending" && sender === userData.email) ||
      (transStatus === "dispatch" && sender === userData.email)
    ) {
      return (
        <div className="text-red-500">
          {currencyFormatter.format(text, { code: "NGN" })}
        </div>
      );
    } else if (
      (transStatus === "pending" && sender !== userData.email) ||
      (transStatus === "dispatch" && sender !== userData.email)
    ) {
      return (
        <div className="text-yellow-500">
          {currencyFormatter.format(text, { code: "NGN" })}
        </div>
      );
    } else if (transStatus === "cleared" && sender !== userData.email) {
      return (
        <div className="text-green-500">
          {currencyFormatter.format(text, { code: "NGN" })}
        </div>
      );
    } else if (transStatus === "cleared" && sender === userData.email) {
      return (
        <div className="text-red-500">
          {currencyFormatter.format(text, { code: "NGN" })}
        </div>
      );
    }
  };

  const getTextColor = (transStatus, sender) => {
    if (
      (transStatus === "pending" && sender === userData.email) ||
      (transStatus === "dispatch" && sender === userData.email)
    ) {
      return <div className="text-red-500">Debit</div>;
    } else if (
      (transStatus === "pending" && sender !== userData.email) ||
      (transStatus === "dispatch" && sender !== userData.email)
    ) {
      return <div className="text-yellow-500">{transStatus}</div>;
    } else if (transStatus === "cleared" && sender === userData.email) {
      return <div className="black">{transStatus}</div>;
    } else if (transStatus === "cleared" && sender !== userData.email) {
      return <div className="text-green-500">{transStatus}</div>;
    }
  };

  const transaction = allTrans.map((item) => (
    <div key={uuid()} className="flex justify-between bg-blue-100 px-2 py-4">
      {getAmountColor(item.transactionStatus, item.sender, item.amount)}

      {getTextColor(item.transactionStatus, item.sender)}
    </div>
  ));

  useEffect(() => {
    trans.userTransactions(userData._id, userData.email).then((data) => {
      dispatch(setTransaction(data.message));
      setallTrans(data.message);
      console.log(data.message);
    });
  }, [dispatch, userData._id, userData.email]);

  return (
    <div className="border p-2 mt-5">
      <p className="font-semibold text-gray-500">Transactions</p>
      <div className="mt-5 flex flex-col gap-2 text-sm h-80 overflow-y-scroll">
        {transaction.length > 0 ? (
          transaction
        ) : (
          <div className="flex justify-center items-center h-full">
            <h2 className="text-2xl text-gray-300">
              Your transaction list is empty
            </h2>
          </div>
        )}
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
