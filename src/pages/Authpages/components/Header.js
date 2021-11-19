import React from "react";
import { Search, Bell, Home, Money, Gear, SignOut } from "akar-icons";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Avatar from "../Profile/Avatar/Avatar";
import Chaticon from "../../../Assets/chat.png";
import user from "../../../Api/User";
import "../style/Header.css";
import { useHistory } from "react-router";
import { logoutUser } from "../../../Store/LoginSlice";

export default function Header() {
  const notifications = useSelector((state) => state.notification.noti);
  // console.log(notifications);
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    user.userLogout().then((res) => {
      if (res.message) {
        dispatch(logoutUser());
        history.push("/login");
        localStorage.removeItem("login");
      }
    });
  };

  return (
    <>
      <header className="w-full h-20 fixed z-50 top-0 bg-white">
        <input type="checkbox" id="tp-header-check" />
        <label htmlFor="tp-header-check" className="tp-m-menu-icon">
          <span className="tp-m-nav-icon"></span>
        </label>
        <ul className="tp-m-menu">
          <li>
            <Link to="/profile">
              <Avatar />
            </Link>
          </li>
          <li>
            <Link to="/">
              <div className="tp-header-tab-icon">
                <Home size={24} className="tp-home-tab-icon" />
              </div>
            </Link>

            <Link to="/transactions">
              <div className="tp-header-tab-icon">
                <Money size={24} className="tp-money-tab-icon" />
              </div>
            </Link>

            <Link to="/settings">
              <div className="tp-header-tab-icon">
                <Gear size={2} className="tp-gear-tab-icon" />
              </div>
            </Link>

            <div className="tp-header-tab-icon" onClick={logout}>
              <SignOut size={2} className="tp-logout-tab-icon" />
            </div>
          </li>
        </ul>
        <div className="tp-m-header-right mt-1 sm:mt-1">
          <span className="tp-header-search">
            <Search size={24} />
          </span>

          <div className="relative w-14 ">
            <Link to="/transactions">
              <div className="absolute w-8 h-8 flex justify-center items-center py-2 p-2 bottom-5 left-2  rounded-full bg-purple-700 text-xs text-white">
                {notifications.length}
              </div>
              <Bell size={24} className="mt-1" />
            </Link>
          </div>
        </div>
      </header>
      <img
        src={Chaticon}
        alt="chat"
        className="fixed bottom-20 w-8 right-14 z-50"
      />
    </>
  );
}
