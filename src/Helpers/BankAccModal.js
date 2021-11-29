import React, { useState, useEffect } from "react";
import transaction from "../Api/Transaction/Transaction";
import { useSelector, useDispatch } from "react-redux";
import { Cross } from "akar-icons";
import user from "../Api/User";
import { setUserData } from "../Store/UserSlice";

export default function BankAccModal({ show }) {
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
  const [bankList, setbankList] = useState([]);
  const [bankCode, setbankCode] = useState("");
  const [bankName, setbankName] = useState("");
  const [accountNumber, setaccNumber] = useState("");
  const [accountName, setaccountName] = useState("");
  const [btnText, setbtnText] = useState("Proceed");

  console.log(userData);

  const handleBankAccount = async (e) => {
    e.preventDefault();
    setbtnText("Processing");
    const userDetails = {
      accountNumber,
      bankCode,
      accountName,
    };
    const res = await transaction.verifyBankAccount(userDetails);
    if (res) {
      const bankdata = JSON.parse(res);
      const recipientCode = bankdata.data.recipient_code;
      const userBankDetails = {
        userid: userData._id,
        bankName,
        bankCode,
        recipientCode,
        accountNumber,
      };
      const response = await user.bankAccUpdate(userBankDetails);
      if (response.message) {
        dispatch(setUserData(response.message));
        setbtnText("Success!");
        console.log(response);
        setTimeout(() => {
          show(false);
        }, 2000);
      }
    }
  };

  const banksname = bankList.map((item) => (
    <option key={item.id} value={item.code}>
      {item.name}
    </option>
  ));

  useEffect(() => {
    transaction.bankList().then((res) => {
      if (res) {
        setbankList(res.data);
      }
    });
  }, []);

  useEffect(() => {
    let userbank = bankList.filter((item) => item.code === bankCode);
    if (userbank.length > 0) {
      setbankName(userbank[0].name);
    }
  }, [bankCode, bankList]); //watchinmg bankcode to get bank details from api
  return (
    <div>
      <div className="fixed w-full left-0 z-50 top-0 h-full  bg-gray-900 bg-opacity-80">
        <div
          className="slideup mt-28 w-11/12 sm:w-10/12 md:w-4/12 m-auto
     bg-white text-gray-500 p-4 rounded-lg min-h-96"
        >
          <h1 className="text-center sm:text-2xl text-gray-400">
            ADD BANK ACCOUNT
          </h1>

          <div className="mt-20 w-full relative">
            <div className="my-4">
              <form className="flex flex-col" onSubmit={handleBankAccount}>
                <select
                  className="py-3 px-2 bg-indigo-50 mb-2 outline-none text-gray-400"
                  onChange={(e) => setbankCode(e.target.value)}
                >
                  <option>Select your bank</option>
                  {banksname}
                </select>
                <input
                  type="text"
                  placeholder="Account Name"
                  value={accountName}
                  required
                  onChange={(e) => setaccountName(e.target.value)}
                  className="py-3 px-2 bg-indigo-50  mb-2 outline-none text-gray-400"
                />
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Account Number"
                  value={accountNumber}
                  required
                  onChange={(e) => setaccNumber(e.target.value)}
                  maxLength="10"
                  minLength="10"
                  className="py-3 px-2 bg-indigo-50  mb-2 outline-none text-gray-400"
                />
                <p className="py-4 pl-2 text-purple-500 font-light">
                  You can only perform this action once
                </p>
                <button
                  className="bg-purple-600 text-white py-3 px-4 rounded-lg"
                  type="submit"
                  onSubmit={handleBankAccount}
                >
                  {btnText}
                </button>
              </form>
            </div>
            <div className="mt-20 flex gap-10 justify-center">
              <Cross size={14} onClick={() => show(false)} color="red" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
