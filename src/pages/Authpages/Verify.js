import React, { useState } from "react";
import Header from "./components/Header";

export default function Verify() {
  const [vcodeStatus, setvcodeStatus] = useState(false);
  const [error, seterror] = useState("");
  const [num1, setnum1] = useState("");
  const [num2, setnum2] = useState("");
  const [num3, setnum3] = useState("");
  const [num4, setnum4] = useState("");
  const [num5, setnum5] = useState("");
  const resendVcode = () => {
    setTimeout(() => {
      setvcodeStatus(true);
    }, 2000);
    setTimeout(() => {
      setvcodeStatus(false);
    }, 6000);
  };

  const verify = async (e) => {
    e.preventDefault();
    if (num1 && num2 && num3 && num4 && num5) {
      try {
        let vCode = num1 + num2 + num3 + num4 + num5;
        let userData = { vCode, name: "verification" };

        const result = await fetch(
          "http://localhost:5000/api/user/verifyuser",
          {
            credentials: "include",
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(userData),
          }
        );
        const res = await result.json();
        if (res.message) {
          seterror("");
          console.log(res.message.verificationStatus);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      seterror("Invalid entry");
    }
  };
  return (
    <>
      <Header />

      <div className="fixed w-full top-0 h-full z-50  bg-gray-900 bg-opacity-80">
        <div
          className="w-11/12 sm:w-10/12 md:w-4/12 m-auto mt-28
     bg-white p-4 rounded-lg min-h-96"
        >
          <h1 className="text-center text-28 sm:text-3xl text-gray-500">
            Kindly verify your account
          </h1>
          <p className="text-center text-sm mt-4 text-gray-400">
            We've sent verification code to your email
          </p>

          {vcodeStatus && (
            <p className="absolute left-0 right-0 text-green-600 mt-8 text-center">
              Verification code sent
            </p>
          )}
          {error && (
            <p className="absolute left-0 right-0 text-red-600 mt-8 text-center">
              {error}
            </p>
          )}

          <div className="mt-20 w-full relative">
            <form className="mt-20 w-full justify-center">
              <div className="flex  gap-4">
                <input
                  type="text"
                  value={num1}
                  className="p-2  border-purple-200 
                w-2/12 rounded-lg outline-none text-center text-4xl font-extrabold
                 text-gray-400 bg-indigo-100 "
                  maxLength="1"
                  required
                  onChange={(e) => setnum1(e.target.value)}
                />
                <input
                  type="text"
                  value={num2}
                  className="p-2  border-purple-200 
                w-2/12 rounded-lg outline-none text-center text-4xl font-extrabold
                 text-gray-400 bg-indigo-100 "
                  maxLength="1"
                  required
                  onChange={(e) => setnum2(e.target.value)}
                />
                <input
                  type="text"
                  value={num3}
                  className="p-2  border-purple-200 
                w-2/12 rounded-lg outline-none text-center text-4xl font-extrabold
                 text-gray-400 bg-indigo-100 "
                  maxLength="1"
                  required
                  onChange={(e) => setnum3(e.target.value)}
                />
                <input
                  type="text"
                  value={num4}
                  className="p-2  border-purple-200 
                w-2/12 rounded-lg outline-none text-center text-4xl font-extrabold
                 text-gray-400 bg-indigo-100 "
                  maxLength="1"
                  required
                  onChange={(e) => setnum4(e.target.value)}
                />
                <input
                  type="text"
                  value={num5}
                  className="p-2  border-purple-200 
                w-2/12 rounded-lg outline-none text-center text-4xl font-extrabold
                 text-gray-400 bg-indigo-100 "
                  maxLength="1"
                  required
                  onChange={(e) => setnum5(e.target.value)}
                />
              </div>
              <button
                className="p-3 mt-10 rounded-lg w-full bg-purple-600 text-white"
                onClick={verify}
              >
                Verify
              </button>
              <p className="text-center mt-5 text-xs sm:text-sm text-gray-500">
                Didnt get the code?{" "}
                <span
                  className="text-purple-600 font-extrabold cursor-pointer"
                  onClick={resendVcode}
                >
                  Resend verification code
                </span>
              </p>
            </form>
            <div className="mt-20 flex gap-10 justify-center"></div>
          </div>
        </div>
      </div>
    </>
  );
}
