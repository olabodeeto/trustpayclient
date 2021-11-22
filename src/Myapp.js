import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthNavigations from "./Navigations/AuthNavigations";
import PublicNavigations from "./Navigations/PublicNavigations";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser, loginUser } from "./Store/LoginSlice";
import { setUserData } from "./Store/UserSlice";
import user from "./Api/User";

function Myapp() {
  const login = useSelector((state) => state.isLogin.login);
  const localStrg = localStorage.getItem("login");

  const [isLoggedIn, setisLoggedIn] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStrg === "true") {
      try {
        user.checkLogin().then((res) => {
          if (res) {
            if (res.message !== false) {
              dispatch(loginUser());
              setisLoggedIn(login);
              dispatch(setUserData(res.user));
            } else {
              dispatch(logoutUser());
              setisLoggedIn(false);
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [login, localStrg, dispatch]);
  return (
    <>
      <Router>
        {isLoggedIn ? <AuthNavigations /> : <PublicNavigations />}
      </Router>
    </>
  );
}

export default Myapp;
