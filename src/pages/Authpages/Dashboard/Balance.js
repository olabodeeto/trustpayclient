import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import currencyFormatter from "currency-formatter";
import user from "../../../Api/User";

export default function Balance() {
  const userData = useSelector((state) => state.user.userData);
  const [balance, setbalance] = useState("");

  useEffect(() => {
    user.balance(userData.email).then((data) => {
      setbalance(data.message);
    });
  }, [userData.email]);
  return (
    <div>
      <div className="w-full h-40 bg-purple-700 p-2 rounded-lg">
        <div className="w-full flex justify-between text-gray-50 text-sm">
          <span>Balance</span>
          <span>{userData.firstname}</span>
        </div>
        <div className="flex justify-center items-center mt-10 text-gray-50 text-2xl sm:text-4xl font-bold">
          {currencyFormatter.format(balance, { code: "NGN" })}
        </div>
      </div>
    </div>
  );
}
