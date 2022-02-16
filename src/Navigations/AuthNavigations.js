import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Authpages/Dashboard/Dashboard";
import Transaction from "../pages/Authpages/Transaction/Transaction";
// import Errorpage from "../pages/Errorpage";
import Action from "../pages/Authpages/Action";
import Profile from "../pages/Authpages/Profile/Profile";
import Createlink from "../pages/Authpages/CreateLink/Createlink";
import Pay from "../pages/Authpages/Pay";
import Verify from "../pages/Authpages/Verify";
import Settings from "../pages/Authpages/Settings";

export default function AuthNavigations() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/transactions" component={Transaction} />
        <Route exact path="/action/:id" component={Action} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/create-link" component={Createlink} />
        <Route exact path="/pay/:id" component={Pay} />
        <Route exact path="/verify" component={Verify} />
        <Route exact path="/settings" component={Settings} />
        {/* <Route exact path="*" component={Errorpage} /> */}
      </Switch>
    </>
  );
}
