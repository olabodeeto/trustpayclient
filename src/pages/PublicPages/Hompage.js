import React from "react";
import { Link } from "react-router-dom";
import style from "./Styles/Homepage.module.css";
import googleplayicon from "../../Assets/googleplay.png";
import appstoreicon from "../../Assets/appstore.png";

export default function Hompage() {
  return (
    <>
      <header className={style.header}>
        <input type="checkbox" id={style.checkbox} />
        <div className={style.logo}>
          trust<span className="text-yellow-500">payme</span>
        </div>
        <label htmlFor={style.checkbox} className={style.menuicon}>
          <span className={style.navicon}></span>
        </label>
        <ul className={style.menu}>
          <div className={style.menulists}>
            <li>HOME</li>
            <li>DOWNLOAD</li>
            <li>HELP</li>
            <li>HOW IT WORKS</li>
          </div>
          <div className={style.menubtncontainer}>
            <Link to="/login">
              <button className="tp-default-btn">
                <i className="far fa-user-circle"></i> ACCOUNT
              </button>
            </Link>
          </div>
        </ul>
      </header>

      <div className={`${style.hero} `}>
        <div className="relative w-10/12 m-auto text-center mt-40">
          <p className=" text-gray-600 sm:w-6/12 m-auto">
            MAKE PAYMENT WITH TRUST
          </p>
          <p className=" w-10/12 text-3xl sm:text-6xl  text-gray-600 font-extrabold sm:w-6/12 m-auto">
            Trusted & Secured way to pay online
          </p>
          <p
            className="w-20 h-20
           rounded-full bg-opacity-30 absolute top-0 balls "
          ></p>
          <p
            className="w-20 h-20
           rounded-full bg-opacity-30 absolute top-0 ball "
          ></p>

          <div className="mt-60 m-auto flex gap-4 justify-center">
            <div
              className="flex justify-center items-center 
              py-3 bg-purple-600 px-8 rounded-lg w-44"
            >
              <img src={googleplayicon} alt="" className="w-6" />
            </div>
            <div
              className="flex justify-center items-center 
              py-3 bg-purple-600 px-8 rounded-lg w-44"
            >
              <img src={appstoreicon} alt="" className="w-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
