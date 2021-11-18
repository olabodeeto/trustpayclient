import React, { useState } from "react";
import { Link } from "react-router-dom";
import Style from "./Styles/Login.module.css";
import { Home } from "akar-icons";
import user from "../../Api/User";

export default function ForgotPassword() {
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [btnText, setbtnText] = useState("Proceed");

  const handleReset = async (e) => {
    e.preventDefault();
    setbtnText("Processing..");
    const userdata = { email: email };
    const response = await user.forgotpassword(userdata);
    if (response.error) {
      setTimeout(() => {
        setbtnText("Proceed");
        setmessage(response.error);
      }, 1000);
    } else if (response.message) {
      setTimeout(() => {
        setbtnText("Proceed");
        console.log(response.message);
        setmessage("Reset link sent to your email");
      }, 1000);
    }
  };
  return (
    <div className={Style.login}>
      <div className="w-11/12 sm:w-4/12 m-auto bg-white p-5 rounded-lg mt-20">
        <p className="text-center text-3xl text-indigo-600 font-bold">
          Forgot password
        </p>

        <div className="mt-20">
          <p className="mb-4 text-yellow-800">{message}</p>
          <form className="flex flex-col gap-2" onSubmit={handleReset}>
            <input
              className="bg-indigo-100 py-3 px-2 w-full rounded-lg outline-none mb-2"
              type="email"
              value={email}
              placeholder="Email"
              required
              onChange={(e) => setemail(e.target.value)}
            />
            <button
              className="bg-indigo-500 text-white py-3 px-2 w-full rounded-lg outline-none"
              onClick={handleReset}
            >
              {btnText}
            </button>
          </form>
          <div className=" flex justify-center gap-6 text-center mt-10 text-gray-400 text-sm">
            <div>
              Dont have account ?
              <Link to="/register">
                <span className="text-indigo-600"> Create account</span>
              </Link>
            </div>
            |
            <Link to="/">
              <Home size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
