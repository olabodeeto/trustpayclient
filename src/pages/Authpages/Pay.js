import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import Header from "./components/Header";
import transaction from "../../Api/Transaction/Transaction";
import currencyFormatter from "currency-formatter";
import { setPaymentLinkDetails } from "../../Store/PaymentlinkSlice";
import { PaystackButton } from "react-paystack";
import PaymentModal from "../../Helpers/PaymentModal";

export default function Pay() {
  const { id } = useParams();
  // console.log(id);
  const [linkDetails, setlinkDetails] = useState("");
  const userData = useSelector((state) => state.user.userData);
  const paymentLinkDetails = useSelector(
    (state) => state.paylink.payLinkDetails
  );
  const [showPaymentModal, setshowPaymentModal] = useState(false);
  const dispatch = useDispatch();
  const publicKey = process.env.REACT_APP_PAYSTACK_KEY;
  const amount = paymentLinkDetails.amount * 100;
  const email = paymentLinkDetails.clientEmail;
  const componentProps = {
    email,
    amount,
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      transaction.updateLink(id).then((data) => {
        // console.log(data);
      });
      setshowPaymentModal(true);
      console.log("Paystack payment successful, write transaction to DB");
    },

    onClose: () => {
      console.log("do something");
    },
  };

  const getLinkStatus = (linkstatus) => {
    if (linkstatus === "initial") {
      return <span className="text-green-500 w-6/12">Fresh</span>;
    } else {
      return <span className="text-yellow-500 w-6/12">In progress</span>;
    }
  };

  useEffect(() => {
    transaction.getPayLink(id).then((data) => {
      setlinkDetails(data.message);
      dispatch(setPaymentLinkDetails(data.message));
    });
  }, [dispatch, id]);

  const details = () => {
    if (userData._id === linkDetails.creatorID) {
      return (
        <div className="w-11/12 md:w-6/12 m-auto p-4 bg-white rounded-lg">
          <h2 className="text-center text-gray-500 text-2xl">Link Details</h2>
          <div className="mt-20">
            <div className="flex w-full gap-5 mb-2 bg-blue-50 py-3 px-1">
              <span className="w-6/12">Amount :</span>
              <span className="text-black w-6/12">
                {currencyFormatter.format(linkDetails.amount, { code: "NGN" })}
              </span>
            </div>
            <div className="flex w-full gap-5 mb-2 bg-blue-50 py-3 px-1">
              <span className="w-6/12">Description :</span>
              <span className="text-black w-6/12">
                {linkDetails.description}
              </span>
            </div>
            <div className="flex w-full gap-5 mb-2 bg-blue-50 py-3 px-1">
              <span className="w-6/12">Sent to:</span>
              <span className="text-black w-6/12">
                {linkDetails.clientEmail}
              </span>
            </div>
            <div className="flex w-full gap-5 mb-2 bg-blue-50 py-3 px-1">
              <span className="w-6/12">Link Status:</span>
              <span className="text-black w-6/12">
                {getLinkStatus(linkDetails.linkStatus)}
              </span>
            </div>
            <div className="mt-8">
              <div
                className=" w-full rounded-lg py-3 px-4 bg-purple-500
               text-white flex justify-center items-center"
              >
                You created this payment link
              </div>
            </div>
          </div>
        </div>
      );
    } else if (userData.email === linkDetails.clientEmail) {
      return (
        <div className="w-11/12 md:w-6/12 m-auto p-4 bg-white rounded-lg">
          <h2 className="text-center text-gray-500 text-2xl">Link Details</h2>
          <div className="mt-20">
            <div className="flex w-full gap-5 mb-2 bg-blue-50 py-3 px-1">
              <span className="w-6/12">Amount :</span>
              <span className="text-black w-6/12">
                {currencyFormatter.format(linkDetails.amount, { code: "NGN" })}
              </span>
            </div>
            <div className="flex w-full gap-5 mb-2 bg-blue-50 py-3 px-1">
              <span className="w-6/12">Description :</span>
              <span className="text-black w-6/12">
                {linkDetails.description}
              </span>
            </div>
            <div className="flex w-full gap-5 mb-2 bg-blue-50 py-3 px-1">
              <span className="w-6/12">Created By:</span>
              <span className="text-black w-6/12">{linkDetails.creator}</span>
            </div>
            <div className="flex w-full gap-5 mb-2 bg-blue-50 py-3 px-1">
              <span className="w-6/12">Link Status:</span>
              <span className="text-black w-6/12">
                {getLinkStatus(linkDetails.linkStatus)}
              </span>
            </div>
            <div className="mt-8">
              <div>
                <PaystackButton
                  {...componentProps}
                  className=" w-full rounded-lg py-3 px-4 bg-purple-600
               text-white flex justify-center items-center"
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
    // else if (
    //   userData._id !== linkDetails.creatorID ||
    //   userData.email !== linkDetails.clientEmail
    // ) {
    //   return (
    //     <div className="w-11/12 md:w-6/12 m-auto p-4 bg-white rounded-lg">
    //       <h2 className="text-center text-gray-500 text-2xl">
    //         Sorry, you cant use this payment link
    //       </h2>
    //     </div>
    //   );
    // }
  };

  return (
    <>
      <Header />
      {showPaymentModal && <PaymentModal />}
      <div className="bg-indigo-100 min-h-screen pb-10">
        <div
          className="relative w-full lg:w-10/12 xl:w-9/12 m-auto top-10  
        mt-5 py-10 md:px-20 md:mt-14"
        >
          {details()}
        </div>
      </div>
    </>
  );
}
