import React, { useState, useEffect } from "react";
import currencyFormatter from "currency-formatter";
import { Link } from "react-router-dom";

export default function Pricing() {
  const [amount, setamount] = useState(2000);
  const [topay, settopay] = useState("");

  useEffect(() => {
    const sum = (2.5 / 100) * amount;
    settopay(sum + 200);
  }, [amount]);
  return (
    <>
      <div className="mb-60">
        <h1 className="text-center text-gray-600 text-3xl font-extralight mb-10">
          Simple and Transparent charges
        </h1>
        <div className="w-11/12 md:w-10/12  m-auto lg:px-10 lg:py-10 bg-gray-50 mt-10 mb-20">
          <div className="w-full flex gap-4 flex-col lg:flex-row">
            <div className="lg:w-6/12 md:bg-white bg-blue-50 p-4 rounded-lg">
              <p className="text-xl font-extralight">Local Transactions</p>
              <div className="mt-10">
                <p className="text-4xl mt-16 font-extrabold text-gray-600">
                  2.5% + ₦200
                </p>
                <p className="mt-16 text-gray-500">
                  This is applicable only to the transactions originatiing from
                  Nigeria, this includes deposits from local banks and
                  credit/debit cards.
                </p>
                {/* <p className="mt-4">This fee is capped at ₦8,000 </p> */}
              </div>
            </div>
            <div className="lg:w-6/12 mt-10">
              <form className="bg-gray-700 p-4 py-8 md:w-10/12 m-auto rounded-lg">
                <p className="text-center text-gray-50 text-2xl h-16 font-extrabold">
                  {currencyFormatter.format(amount, { code: "NGN" })}
                </p>
                <div className="">
                  <span className="mb-2 block text-yellow-500">
                    Sell / buy for:
                  </span>
                  <input
                    type="text"
                    placeholder="Sell/ buy  for"
                    value={amount}
                    onChange={(e) => setamount(e.target.value)}
                    className="px-2 py-3 bg-blue-50 w-full outline-none rounded-md"
                  />
                  <div className="flex gap-5 mt-2 bg-gray-800 px-2 py-3 rounded-md text-white">
                    <span className="w-6/12">Fee:</span>
                    <span className="w-6/12">
                      {currencyFormatter.format(topay, { code: "NGN" })}
                    </span>
                  </div>
                  <Link to="/register">
                    <div className="flex mt-4 justify-center items-center bg-yellow-500 px-2 py-3 rounded-md text-white">
                      Get started
                    </div>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
