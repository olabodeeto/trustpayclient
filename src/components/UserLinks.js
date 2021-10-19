import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import transaction from "../Api/Transaction/Transaction";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import currencyFormatter from "currency-formatter";
// import { setUserLinks } from "../Store/UserLinksSlice";

export default function UserLinks() {
  const userlinks = useSelector((state) => state.userlinks.userlinks);
  const userData = useSelector((state) => state.user.userData);
  const [paylinks, setpaylinks] = useState(userlinks);
  // const dispatch = useDispatch();

  const linkText = (sender, theclient, amount, id) => {
    if (sender === userData.email) {
      return (
        <Link to={`/pay/${id}`}>
          <span className="text-gray-600">
            You sent a new payment link of{" "}
            <span className="text-red-400 pr-1">
              {currencyFormatter.format(amount, { code: "NGN" })}
            </span>
            to {theclient}
          </span>
        </Link>
      );
    } else {
      return (
        <Link to={`/pay/${id}`}>
          <span className="text-gray-600">
            You've recieved a new payment link of
            <span className="text-red-400 ml-1 mr-1">
              {currencyFormatter.format(amount, { code: "NGN" })}
            </span>
            from {sender}
          </span>
        </Link>
      );
    }
  };

  const paymentlinks = paylinks.map((item) => (
    <div
      key={uuid()}
      className="bg-blue-50 flex justify-between border-2 rounded-lg p-4 text-sm mb-2"
    >
      {linkText(item.creator, item.clientEmail, item.amount, item._id)}
    </div>
  ));

  useEffect(() => {
    setpaylinks(userlinks);
  }, [userlinks]);
  return (
    <div>
      <div className="flex justify-between bg-purple-500 p-4 text-white text-md">
        Payment Links
        <span>({paylinks.length})</span>
      </div>
      <div className="bg-white p-4 max-h-80 overflow-y-scroll">
        {paymentlinks}
      </div>
    </div>
  );
}
