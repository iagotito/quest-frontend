import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <Home />}/>
      <Route exact path="/register" component={() => <Register />}/>
      <Route exact path="/login" component={() => <Login />}/>
      <Route exact path="/dashboard" component={() => <Dashboard />}/>
      <Route exact path='*' component={() => <Home />}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;