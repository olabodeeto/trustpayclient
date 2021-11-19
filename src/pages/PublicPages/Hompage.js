import React from "react";
import { Link } from "react-router-dom";
import style from "./Styles/Homepage.module.css";
import googleplayicon from "../../Assets/googleplay.png";
import appstoreicon from "../../Assets/appstore.png";
import frame9 from "../../Assets/Frame9.png";
import abstact from "../../Assets/abstact.png";
// import group2 from "../../Assets/Group2.png";
import grp from "../../Assets/grp.png";
// import frame13 from "../../Assets/Frame13.png";
import icon22 from "../../Assets/icon22.png";
import phones from "../../Assets/phones.png";
import purse from "../../Assets/purse.png";
import appleicon from "../../Assets/appleicon.png";
import playstore from "../../Assets/playstore.png";
import facebook from "../../Assets/facebook.png";
import instagram from "../../Assets/instagram.png";
import linkedin from "../../Assets/linkedin.png";
import twitter from "../../Assets/twitter.png";

export default function Hompage() {
  return (
    <>
      <header className={`${style.header} bg-white`}>
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

          <div className="mt-48 md:mt-60 m-auto flex gap-4 justify-center">
            <div
              className="flex justify-center items-center 
              py-2 bg-purple-600 px-8 rounded-full w-44"
            >
              <img src={googleplayicon} alt="" className="w-6" />
            </div>
            <div
              className="flex justify-center items-center 
              py-2 bg-purple-600 px-8 rounded-full w-44"
            >
              <img src={appstoreicon} alt="" className="w-6" />
            </div>
          </div>
        </div>
      </div>

      <div className={style.getStarted}>
        <div className="w-10/12 md:w-7/12 m-auto pt-40 md:pt-28">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            {/* Welcome to the new era of digital trust payments */}
            Pay and get paid instantly
          </h1>
          <div className="w-10/12 md:w-7/12 m-auto flex justify-center items-center">
            <Link to="/register">
              <button className="mt-24 bg-purple-900 text-white py-3 px-10 md:px-20 rounded-full">
                Get started
              </button>
            </Link>
          </div>
          <div className="mt-32 w-full md:w-5/12 h-40 m-auto flex justify-center items-center">
            <img
              src={frame9}
              alt=""
              className="absolute w-full h-10/12  bottom-0 md:w-6/12 md:h-auto"
            />
          </div>
        </div>
      </div>
      <div className=" bg-white w-11/12 md:w-10/12 m-auto pt-24 flex flex-col md:flex-row">
        <div className="w-11/12 md:w-6/12">
          <img src={abstact} alt="" className="w-16 h-auto" />
          <div className="mt-20 md:mt-28">
            <h1 className="text-4xl w-10/12 md:w-5/12 mt-20 font-bold text-purple-400">
              <span className="text-purple-600">WE MAKE YOU</span> FEARLESS
            </h1>
            <p className="mt-10 text-gray-500 w-10/12">
              Paying sellers online just got easier with us. We take away the
              fear of loosing your funds to fake sellers online by holding it
              till you get what you paid for.
            </p>
          </div>
        </div>
        <div className="w-11/12 md:w-6/12 flex justify-center mt-10">
          <img src={grp} alt="" className="w-9/12 md:w-5/12 h-auto" />
        </div>
      </div>

      <div className="mt-40 bg-white w-11/12 md:w-10/12 m-auto hidden md:block">
        <div className="flex flex-col md:flex-row mb-20">
          <div className="w-11/12 md:w-6/12">
            <div className="mt-40 flex">
              <img src={purse} alt="" className="w-8/12 h-auto" />
            </div>
          </div>
          <div className="xl:w-6/12 w-8/12 mt-10">
            <img src={icon22} alt="" className="w-16 h-auto mb-10" />
            <h1 className="text-4xl lg:w-6/12 md:10/12 mt-28 font-bold text-gray-400">
              <span className="text-gray-600 mr-2">
                EASIEST AND SAFEST WAY OF RECEIVING
              </span>
              PAYMENTS
            </h1>

            <p className="mt-5 text-gray-500 w-10/12">
              Receive payment through payment link or your email
            </p>
          </div>
        </div>
      </div>

      <div className="h-screen bg-white w-11/12 md:w-10/12 m-auto pt-24 md:hidden mb-40 md:mb-2">
        <div className="flex flex-col md:flex-row">
          <div className="w-11/12 md:w-6/12  mt-16 md:mt-20">
            <img src={icon22} alt="" className="w-16 h-auto" />
            <div className="md:mt-28">
              <h1 className="text-4xl mt-24 md:mt-28 font-bold text-gray-400 flex flex-col md:flex-row">
                <span className="text-gray-600 mr-2 w-full md:w-6/12">
                  EASIEST AND SAFEST WAY OF RECEIVING
                </span>
                <span>PAYMENTS</span>
              </h1>
              <p className="mt-5 text-gray-500 w-10/12">
                Receive payment through payment link or your email
              </p>
            </div>
          </div>
          <div className="mt-20 w-11/12 md:w-6/12 flex justify-center items-center">
            <img src={purse} alt="" className="w-10/12 h-auto" />
          </div>
        </div>
      </div>
      <div className={style.downloadsection}>
        <div className="h-screen pt-10 mt-20 relative">
          <div className="w-11/12 md:w-4/12 m-auto mt-16 lg:mt-40">
            <h1 className="text-center text-4xl font-bold text-purple-200">
              YOU CAN USE OUR APP ON{" "}
              <span className="text-purple-400">YOUR DEVICE</span>
            </h1>
          </div>
          <div className="mt-40 lg:mt-2 w-4/12 m-auto">
            <img
              src={phones}
              alt=""
              className="absolute left-0 md:left-1/4 md:ml-16 lg:left-60 xl:ml-60 lg:ml-28 w-full h-8/12  bottom-40 md:w-4/12 md:h-auto"
            />
          </div>
          <div className="absolute left-0 right-0 bottom-20 mt-20 w-11/12 md:w-4/12 m-auto flex justify-center gap-4 text-center">
            <button
              className="py-3 px-14 w-10/12 bg-purple-900 text-gray-50 rounded-full
            flex justify-center items-center"
            >
              <img src={appleicon} alt="" className="w-4/12 md:w-3/12" />
            </button>

            <button
              className="py-3 px-14 w-10/12 bg-purple-900 text-gray-50 rounded-full
            flex justify-center items-center"
            >
              <img src={playstore} alt="" className="w-4/12 md:w-3/12" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-40 m-auto w-10/12 mb-20">
          <h1 className="text-4xl text-center text-gray-500 flex flex-col font-bold">
            <span> Get early </span>
            <span className="text-purple-400">access right now</span>
          </h1>

          <div className="w-10/12 m-auto flex justify-center mt-20">
            <Link to="/register">
              <button className="py-3 px-14 bg-purple-600 text-gray-50 rounded-full">
                Get started
              </button>
            </Link>
          </div>
        </div>
        <div className="md:px-10 pt-20 bg-gray-900 flex flex-col justify-center">
          <div className="w-11/12 md:w-6/12 m-auto">
            <ul className="flex justify-center gap-4 text-gray-400 mb-10">
              <li>About</li>
              <li>Support</li>
              <li>Contact</li>
              <li>Faq</li>
              <li>Policy</li>
            </ul>
            <h1 className="text-gray-200 text-2xl font-bold text-center">
              trust<span className="text-gray-500">payme</span>
            </h1>
            <div className="mt-10 flex justify-center gap-4 mb-4">
              <img src={twitter} alt="" className="w-8 h-8" />
              <img src={linkedin} alt="" className="w-8 h-8" />
              <img src={facebook} alt="" className="w-8 h-8" />
              <img src={instagram} alt="" className="w-9 h-9" />
            </div>
          </div>
          <div className="w-11/12 md:w-6/12"></div>
        </div>
        <div className="pt-10 bg-gray-900">
          <p className="text-gray-600 text-center pb-4">
            © 2021 trustpayme | A Division of Africa's Young Entrepreneurs
            Organization. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}
