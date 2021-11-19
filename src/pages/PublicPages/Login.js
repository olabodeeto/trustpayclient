import React, { useState } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import Style from "./Styles/Login.module.css";
import { Home } from "akar-icons";
import Loader from "../../Helpers/Activity_indicator/Loader";
import user from "../../Api/User";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Store/LoginSlice";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("");
  const [isLoading, setisLoading] = useState(false);
  // const [redir, setredir] = useState(false);
  const dispatch = useDispatch();
  const paylink = useSelector((state) => state.paylink.payLink);

  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    setisLoading(true);
    user.loginUser(userData).then((data) => {
      if (data.message !== true) {
        console.log(data);
        setmessage(data.message);
        setisLoading(false);
      } else {
        dispatch(loginUser());
        // setredir(true);
        localStorage.setItem("login", true);
        window.location.href = "/";
      }
    });
  };

  if (paylink === "") {
    return <Redirect to="/" />;
  } else if (paylink) {
    return <Redirect to={`/pay/${paylink}`} />;
  }

  return (
    <div className={Style.login}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-11/12 sm:w-4/12 m-auto bg-white p-5 rounded-lg">
          <p className="text-center text-3xl text-indigo-600 font-bold">
            Welcome
          </p>

          <p className="text-center text-gray-400 mt-10 text-sm">
            Enter your credentials to access your account
          </p>

          <div className="mt-20">
            <p className="mb-2 text-red-500">{message}</p>
            <form className="flex flex-col gap-2" onSubmit={handleLogin}>
              <input
                className="bg-indigo-100 py-3 px-2 w-full rounded-lg outline-none"
                type="email"
                value={email}
                placeholder="Email"
                required
                onChange={(e) => setemail(e.target.value)}
              />
              <input
                className="bg-indigo-100 py-3 px-2 w-full rounded-lg outline-none"
                type="password"
                value={password}
                placeholder="Password"
                required
                onChange={(e) => setpassword(e.target.value)}
              />
              <Link to="/forgotpassword">
                <p className="text-gray-400 mt-2 mb-2">Forgot password?</p>
              </Link>
              <button
                className="bg-indigo-500 text-white py-3 px-2 w-full rounded-lg outline-none"
                onClick={handleLogin}
              >
                Login
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
      )}
    </div>
  );
}
