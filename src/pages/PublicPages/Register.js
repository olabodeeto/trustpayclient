import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import Style from "./Styles/register.module.css";
import "react-phone-number-input/style.css";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { Home } from "akar-icons";
import Loader from "../../Helpers/Activity_indicator/Loader";
import SignupSuccess from "../../Helpers/SignupSuccess";
import user from "../../Api/User";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmpassword: "",
  currency: "",
};
const validate = (values) => {
  const errors = {};
  const paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  if (!values.firstname || values.firstname.length < 2) {
    errors.firstname = "invalid entry";
  }
  if (!values.lastname || values.lastname.length < 2) {
    errors.lastname = "invalid entry";
  }
  if (!values.email) {
    errors.email = "invalid entry";
  } else if (!/^[A-Z0-9._%+]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email formt";
  }
  if (!values.password || values.password.length < 8) {
    errors.password = "Password is too short";
  }
  if (values.password !== values.confirmpassword) {
    errors.confirmpassword = "Please confirm your password";
  } else if (!values.password.match(paswd)) {
    errors.password = "Password must contain at least 1 special character";
  }
  return errors;
};

export default function Register() {
  const [phone, setphone] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [formError, setformError] = useState("");
  const [formSuccess, setformSuccess] = useState("");

  // ================== Formik ====================
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      const userData = { ...values, phone };
      setisLoading(true);
      // console.log(userData);
      user.createAccount(userData).then((data) => {
        if (data.user === "email") {
          setformError(`${data.user} already exist!`);
        } else if (data.user === "phone") {
          setformSuccess("");
          setformError(`${data.user} number already exist!`);
          setisLoading(false);
        } else if (data.user._id) {
          setisLoading(false);
          //proceed to account verification
          console.log(data.user);
          setformError("");
          setformSuccess("Account created successfully!");
        }
      });

      setTimeout(() => {
        if (formSuccess === "" || formError === "") {
          setisLoading(false);
          setformError(
            "Slow or No internet connection, unable to create account"
          );
        }
      }, 40000);
    },
  });

  // ======================================
  return (
    <div className={Style.register}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-11/12 sm:w-4/12 m-auto bg-white p-5 rounded-lg">
          <p className="text-center text-3xl text-indigo-600 font-bold">
            Create Account
          </p>

          <div className="mt-16">
            <form
              className={`${Style.signupform} flex flex-col gap-2`}
              onSubmit={formik.handleSubmit}
            >
              {formSuccess ? (
                <SignupSuccess formSuccess={formSuccess} url="/login" />
              ) : (
                <p className="text-red-400">{formError}</p>
              )}

              <input
                className="bg-indigo-50 py-3 px-2 w-full rounded-lg outline-none"
                type="text"
                name="firstname"
                value={formik.values.firstname}
                placeholder="First Name"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.firstname && formik.errors.firstname ? (
                <p className="text-red-400">{formik.errors.firstname}</p>
              ) : null}
              <input
                className="bg-indigo-50 py-3 px-2 w-full rounded-lg outline-none"
                type="text"
                name="lastname"
                value={formik.values.lastname}
                placeholder="Last Name"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lastname && formik.errors.lastname ? (
                <p className="text-red-400">{formik.errors.lastname}</p>
              ) : null}

              <input
                className="bg-indigo-100 py-3 px-2 w-full rounded-lg outline-none"
                type="email"
                name="email"
                value={formik.values.email}
                placeholder="Your Email"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-400">{formik.errors.email}</p>
              ) : null}

              <input
                className="bg-indigo-100 py-3 px-2 w-full rounded-lg outline-none"
                type="password"
                name="password"
                value={formik.values.password}
                placeholder="Password"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="text-red-400">{formik.errors.password}</p>
              ) : null}

              <input
                className="bg-indigo-100 py-3 px-2 w-full rounded-lg outline-none"
                type="password"
                name="confirmpassword"
                value={formik.values.confirmpassword}
                placeholder="Confirm password"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirmpassword &&
              formik.errors.confirmpassword ? (
                <p className="text-red-400">{formik.errors.confirmpassword}</p>
              ) : null}

              <div className="bg-indigo-100 py-3 px-2 w-full rounded-lg outline-none">
                <PhoneInput
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={setphone}
                  className={Style.PhoneInput}
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-400 text-white py-3 px-2 w-full rounded-lg outline-none mt-5"
              >
                Create account
              </button>
            </form>

            <div className="text-center mt-10 text-gray-400">
              Already have an account ?{" "}
              <Link to="/login">
                <span className="text-indigo-500">Login</span>
              </Link>
            </div>
            <div className="flex justify-center mt-8 text-gray-400">
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
