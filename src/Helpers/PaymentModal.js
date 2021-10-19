import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { Cross } from "akar-icons";

export default function PaymentModal() {
  const paymentLinkDetails = useSelector(
    (state) => state.paylink.payLinkDetails
  );

  const [hidden, sethidden] = useState("");
  const history = useHistory();

  const closeModal = () => {
    sethidden("hidden");
    history.push("/");
  };

  useEffect(() => {
    console.log("payment modal mount");
  }, []);
  return (
    <div
      className={`${hidden} fixed w-full top-0 h-full z-50  bg-gray-900 bg-opacity-80`}
    >
      <div
        className="slideup w-11/12 sm:w-10/12 md:w-4/12 m-auto
     bg-white p-4 rounded-lg min-h-96"
      >
        <h1 className="text-center text-28 sm:text-3xl text-gray-500">
          Payment successful !
        </h1>

        <div className="mt-20 w-full relative">
          <p className="text-gray-400 text-center">
            We have notified {paymentLinkDetails.creator} of this transaction
          </p>
          <div className="mt-20 flex gap-10 justify-center">
            <Cross size={20} onClick={closeModal} />
          </div>
        </div>
      </div>
    </div>
  );
}
