import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Welcome from './pages/welcome';
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home';
import NotFound from './pages/notfound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <Welcome />}/>
      <Route exact path="/welcome" component={() => <Welcome />}/>
      <Route exact path="/register" component={() => <Register />}/>
      <Route exact path="/login" component={() => <Login />}/>
      <Route exact path="/home" component={() => <Home />}/>
      <Route exact path="/dashboard" component={() => <Dashboard />}/>
      <Route exact path='*' component={() => <NotFound />}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;