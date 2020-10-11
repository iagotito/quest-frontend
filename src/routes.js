import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <Dashboard/>}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;