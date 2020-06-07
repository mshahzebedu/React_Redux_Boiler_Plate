import React from "react";
import User from "./components/User";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exac path="/user" component={User} />
        <Route exac path="/" component={App} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
// defiend all routers here applicatoin start from this file
