import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Home from './pages/home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <Home />}/>
      <Route exact path="/dashboard" component={() => <Dashboard />}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;