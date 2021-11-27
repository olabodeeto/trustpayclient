import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "../pages/PublicPages/Hompage";
import Login from "../pages/PublicPages/Login";
import Register from "../pages/PublicPages/Register";
import Pay from "../pages/PublicPages/Pay";
import ForgotPassword from "../pages/PublicPages/ForgotPassword";
import About from "../pages/PublicPages/About";
// import Errorpage from "../pages/Errorpage";

export default function PublicNavigations() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/about" component={About} />
        <Route exact path="/pay/:id" component={Pay} />
        <Route exact path="/forgotpassword" component={ForgotPassword} />
      </Switch>
    </>
  );
}
