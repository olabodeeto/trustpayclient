import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Header from "./components/Header";
import transaction from "../../Api/Transaction/Transaction";
export default function Pay() {
  const { id } = useParams();
  const [linkDetails, setlinkDetails] = useState("");
  const userData = useSelector((state) => state.user.userData);
  console.log(userData);
  console.log(linkDetails);

  useEffect(() => {
    transaction.getPayLink(id).then((data) => {
      setlinkDetails(data.message);
    });
  }, []);

  const details = () => {
    if (userData._id === linkDetails.creatorID) {
      return (
        <div className="w-11/12 md:w-6/12 m-auto p-4 bg-white rounded-lg">
          <h2 className="text-center text-gray-500 text-2xl">Link Details</h2>
          <div className="mt-20">
            <div className="flex w-full gap-5">
              <span>Amount :</span>
              <span className="text-black">{linkDetails.amount}</span>
            </div>
          </div>
        </div>
      );
    } else if (userData.email === linkDetails.clientEmail) {
      return (
        <div className="w-11/12 md:w-6/12 m-auto p-4 bg-white rounded-lg">
          <h2 className="text-center text-gray-500 text-2xl">Link Details</h2>
          <div className="mt-20">
            <div className="flex w-full gap-5 mb-4 bg-blue-50 py-3 px-1">
              <span className="w-6/12">Amount :</span>
              <span className="text-black">{linkDetails.amount}</span>
            </div>
            <div className="flex w-full gap-5 mb-4 bg-blue-50 py-3 px-1">
              <span className="w-6/12">Description :</span>
              <span className="text-black">{linkDetails.description}</span>
            </div>
            <div className="mt-8">
              <button className=" w-full rounded-lg py-3 px-4 bg-purple-600 text-white">
                Pay
              </button>
            </div>
          </div>
        </div>
      );
    } else if (
      userData._id !== linkDetails.creatorID ||
      userData.email !== linkDetails.clientEmail
    ) {
      return (
        <div className="w-11/12 md:w-6/12 m-auto p-4 bg-white rounded-lg">
          <h2 className="text-center text-gray-500 text-2xl">
            Sorry, you cant use this payment link
          </h2>
        </div>
      );
    }
  };

  return (
    <>
      <Header />
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
