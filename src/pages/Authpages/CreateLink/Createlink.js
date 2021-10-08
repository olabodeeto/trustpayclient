import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import CurrencyFormat from "react-currency-format";
import Header from "../components/Header";
import Loader from "../../../Helpers/Activity_indicator/Loader";
import LinkModal from "../../../Helpers/LinkModal";
import VerificationModal from "../../../Helpers/VerificationModal";

const initialValues = {
  amount: "",
  description: "",
  clientEmail: "",
};
const validate = (values) => {
  const errors = {};
  if (!values.amount) {
    errors.amount = "invalid entry";
  }

  if (!values.description || values.description.length < 8) {
    errors.description = "Description is too short";
  }
  if (!values.clientEmail) {
    errors.clientEmail = "invalid entry";
  } else if (
    !/^[A-Z0-9._%+]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.clientEmail)
  ) {
    errors.clientEmail = "Invalid email formt";
  }
  return errors;
};

export default function Createlink() {
  // const [amount, setamount] = useState("");
  // const [clientEmail, setclientEmail] = useState("");
  // const [description, setdescription] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [showModal, setshowModal] = useState(false);
  const [showVerifyModal, setshowVerifyModal] = useState(false);
  const [content, setcontent] = useState("");
  const userData = useSelector((state) => state.user.userData);
  const { email, _id, verificationStatus } = userData;

  useEffect(() => {
    window.scroll(0, 0);
  });

  // ================== Formik ====================
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: async (values) => {
      if (verificationStatus) {
        const userData = { ...values, email, _id };
        setisLoading(true);
        const result = await fetch(
          "http://localhost:5000/api/transaction/paymentlink",
          {
            credentials: "include",
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(userData),
          }
        );
        const res = await result.json();
        setisLoading(false);
        setshowModal(true);
        setcontent(res.message);
        console.log(res);
      } else {
        setshowVerifyModal(true);
      }
    },
  });
  return (
    <>
      <Header />
      {showVerifyModal && <VerificationModal />}
      <div className="bg-indigo-100 h-screen">
        <div
          className="relative w-full md:w-10/12 m-auto border-2 top-10  
        mt-5 py-10 md:px-20 md:mt-14 "
        >
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {showModal ? (
                <LinkModal content={content} />
              ) : (
                <div className="w-11/12 sm:w-10/12 md:w-5/12 m-auto bg-white p-4 rounded-lg">
                  <h1 className="text-center text-2xl sm:text-3xl text-gray-400">
                    Create payment Link
                  </h1>
                  <div className="mt-20 flex justify-center items-center w-8/12 m-auto">
                    <CurrencyFormat
                      value={formik.values.amount}
                      thousandSeparator={true}
                      prefix={""}
                      className="text-center w-full  text-4xl font-extrabold 
                outline-none text-gray-300"
                    />
                  </div>
                  <div className="mt-10 w-full">
                    <form onSubmit={formik.handleSubmit}>
                      <input
                        type="number"
                        placeholder="Amount"
                        name="amount"
                        value={formik.values.amount}
                        className="p-3 mb-4 outline-none bg-gray-50 border w-full rounded-lg"
                        required
                        maxLength="7"
                        onChange={formik.handleChange}
                      />
                      <input
                        type="email"
                        name="clientEmail"
                        value={formik.values.email}
                        placeholder="Client email"
                        className="p-3 mb-4 outline-none bg-gray-50 border w-full rounded-lg"
                        required
                        onChange={formik.handleChange}
                      />

                      <textarea
                        value={formik.values.description}
                        name="description"
                        className="w-full resize-none 
              h-16 bg-gray-50 mb-5 border p-2 outline-none"
                        placeholder="Description"
                        onChange={formik.handleChange}
                      ></textarea>
                      <button
                        className="p-3 mb-4 outline-none bg-purple-600 text-white w-full rounded-lg"
                        type="submit"
                      >
                        Create link
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
