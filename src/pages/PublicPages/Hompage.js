import React from "react";
import { Link } from "react-router-dom";
import style from "./Styles/Homepage.module.css";
// import googleplayicon from "../../Assets/googleplay.png";
// import appstoreicon from "../../Assets/appstore.png";
import abstact from "../../Assets/abstact.png";
// import group2 from "../../Assets/Group2.png";
import grp from "../../Assets/grp.png";
import reg from "../../Assets/reg.svg";
import sec from "../../Assets/sec.svg";
import swi from "../../Assets/swi.svg";
import us from "../../Assets/us.svg";
// import frame13 from "../../Assets/Frame13.png";
// import icon22 from "../../Assets/icon22.png";
import phone from "../../Assets/phone.svg";
// import phones from "../../Assets/phones.png";
// import purse from "../../Assets/purse.png";
// import appleicon from "../../Assets/appleicon.png";
// import playstore from "../../Assets/playstore.png";
import facebook from "../../Assets/facebook.png";
import instagram from "../../Assets/instagram.png";
import linkedin from "../../Assets/linkedin.png";
import twitter from "../../Assets/twitter.png";
import { CircleCheck } from "akar-icons";

export default function Hompage() {
  return (
    <>
      <header className={`${style.header} bg-white shadow`}>
        <input type="checkbox" id={style.checkbox} />
        <div className={style.logo}>
          trust<span className="text-yellow-500">pay</span>
        </div>
        <label htmlFor={style.checkbox} className={style.menuicon}>
          <span className={style.navicon}></span>
        </label>
        <ul className={style.menu}>
          <div className={style.menulists}>
            <li>HOME</li>
            <li>PRICING</li>
            <li>HOW IT WORKS</li>
            <li>FAQ</li>
          </div>
          <div className="flex flex-col md:flex-row md:gap-4">
            <Link to="/login">
              <button className="px-14 py-3 border mb-3 border-white text-purple-700 font-extrabold ">
                Login
              </button>
            </Link>
            {/* <Link to="/register">
              <button className="px-8 py-3 border mb-3 border-white md:bg-purple-700 md:text-white rounded-md">
                Signup
              </button>
            </Link> */}
          </div>
        </ul>
      </header>

      <div className={`${style.hero} bg-indigo-50 `}>
        <div className="relative w-11/12 md:w-10/12 m-auto text-center mt-40">
          <p className=" text-gray-600 sm:w-6/12 m-auto">
            MAKE PAYMENT WITH TRUST LINK
          </p>
          <p className=" w-10/12 text-3xl  sm:text-6xl  text-gray-600 font-extrabold sm:w-6/12 m-auto">
            Trusted & Secured way to trade online
          </p>
          <div className="mt-10">
            <p className="text-2xl md:text-3xl font-extralight">
              Secure your next purchase.
            </p>
          </div>
          <p
            className="w-20 h-20
           rounded-full bg-opacity-30 absolute top-0 balls "
          ></p>
          <p
            className="w-20 h-20
           rounded-full bg-opacity-30 absolute top-0 ball "
          ></p>

          <div className="mt-48 md:mt-60 m-auto flex gap-4 justify-center">
            <Link to="/register">
              <div
                className="flex justify-center items-center 
              py-2 md:py-3 bg-purple-600 px-8  text-white rounded-lg"
              >
                Get started
              </div>
            </Link>
            <div
              className="flex justify-center items-center 
              py-2 md:py-3 border border-purple-700 bg-white px-8   rounded-lg"
            >
              Learn more
            </div>
          </div>
        </div>
      </div>

      <div className="py-40 bg-gray-50">
        <div className="flex flex-col lg:flex-row lg:w-10/12 m-auto">
          <div className="lg:w-6/12 px-4">
            <div className="mb-10">
              <h2 className="text-4xl text-gray-600 font-extralight bg-blue-50 inline pr-4 pt-4 pb-4">
                Why trustpay?
              </h2>
            </div>
            <p className="mb-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              quidem! Obcaecati deleniti ab aliquid earum rem voluptas,
              dignissimos illum cupiditate quas suscipit nulla ncidunt voluptate
              harum laboriosam pariatur, at esse?
            </p>
            <p className="mb-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              quidem! Obcaecati deleniti ab aliquid earum rem voluptas,
              dignissimos illum cupiditate quas suscipit nulla ncidunt voluptate
              harum laboriosam pariatur, at esse?
            </p>
          </div>
          <div className="mt-10 lg:mt-0 pl-5 lg:pl-10 lg:border-l-4 border-purple-700">
            <div className="flex mb-6 gap-5">
              <div>
                <img src={reg} alt="" className="w-14" />
              </div>

              <p className="mt-4 text-xl text-gray-600">
                Regulatory Compliance
              </p>
            </div>
            <div className="flex mb-5 gap-5">
              <div>
                <img src={sec} alt="" className="w-14" />
              </div>

              <p className="mt-4 text-xl text-gray-600">Security First</p>
            </div>
            <div className="flex mb-5 gap-5">
              <div>
                <img src={swi} alt="" className="w-14" />
              </div>

              <p className="mt-4 text-xl text-gray-600">Swift Disbursement</p>
            </div>

            <div className="flex mb-5 gap-6 mt-4">
              <div>
                <img src={us} alt="" className="w-12" />
              </div>

              <p className="mt-4 text-xl text-gray-600">User’s support</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:w-9/12 m-auto lg:py-20">
        <div className="flex justify-center items-center p-20">
          <img src={phone} alt="" className="w-40 lg:w-64" />
        </div>
        <div
          className="flex flex-col justify-center items-center 
        lg:items-start  p-10"
        >
          <h2 className="text-4xl font-extralight p-2 text-gray-600 bg-indigo-50">
            Pay and get paid instantly
          </h2>
          <p className="p-2 mt-4 text-gray-500 lg:w-6/12">
            Pay and get paid seemlessly using trustpay by creating and sharing
            your trustpay payment links.
          </p>
        </div>
      </div>

      <div className="py-20">
        <h2 className="text-center text-3xl text-gray-600 font-extralight">
          How it works
        </h2>
        <div className="flex flex-col gap-4 lg:flex-row lg:w-10/12 m-auto mt-16">
          <div className="lg:w-6/12 bg-red-50 p-4 rounded-lg">
            <h3 className="text-xl font-extralight">Sellers</h3>
            <div className=" py-4 mt-8">
              <ul className="flex flex-col gap-4">
                <li className="flex gap-4 mb-4">
                  <CircleCheck size={24} />
                  <p>Create account on trustpayme</p>
                </li>
                <li className="flex gap-4 mb-4">
                  <CircleCheck size={24} />
                  <p>Agree sales terms with the Buyer.</p>
                </li>
                <li className="flex gap-4 mb-4">
                  <CircleCheck size={24} />
                  <p>Create and share trustpayme payment link with buyer.</p>
                </li>
                <li className="flex gap-4 mb-4">
                  <CircleCheck size={24} />
                  <p>Wait for payment notification from buyer on trustpayme.</p>
                </li>
                <li className="flex gap-4 mb-4">
                  <CircleCheck size={24} />
                  <p>Deliver the agreed product or service.</p>
                </li>
                <li className="flex gap-4 mb-4">
                  <CircleCheck size={24} />
                  <p>Get paid.</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-6/12 bg-indigo-50 p-4 rounded-lg">
            <h3 className="text-xl font-extralight">Buyers</h3>
            <div className="py-4 mt-8">
              <ul className="flex flex-col gap-4">
                <li className="flex gap-4 mb-4">
                  <CircleCheck size={24} />
                  <p>Create account on trustpayme</p>
                </li>
                <li className="flex gap-4 mb-4">
                  <CircleCheck size={24} />
                  <p>Agree sales terms with the Seller.</p>
                </li>
                <li className="flex gap-4 mb-4">
                  <CircleCheck size={24} />
                  <p>Request trustpayme payment link from Seller.</p>
                </li>
                <li className="flex gap-4 mb-4">
                  <CircleCheck size={24} />
                  <p>
                    Make payment using the received payment link (Your payment
                    will be held in escrow)
                  </p>
                </li>
                <li className="flex gap-4 mb-4">
                  <CircleCheck size={24} />
                  <p>Wait for delivery of product or service from Seller.</p>
                </li>
                <li className="flex gap-4 mb-4">
                  <CircleCheck size={24} />
                  <p>Confirm order, Seller get paid.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-40 m-auto w-10/12 mb-20">
          <h1 className="text-4xl font-extralight text-center text-gray-500 flex flex-col">
            <span> Get early </span>
            <span className="text-purple-400 ">access right now</span>
          </h1>

          <div className="w-10/12 m-auto flex justify-center mt-20">
            <Link to="/register">
              <button className="py-3 px-14 bg-purple-600 text-gray-50 rounded-lg">
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
