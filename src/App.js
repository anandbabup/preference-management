import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import DashBoard from './components/dashboard';
import Login from './components/login';
import Register from './components/register';

function App() {
  let isUserLogged = false;
  const [authenticated, setAuthenticated] = useState(false);

  function requireAuth(nextState, replace, next) {
    if (!authenticated) {
      replace({
        pathname: "/login",
        state: { nextPathname: nextState.location.pathname }
      });
    }
    next();
  }
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>

          {/* <li>
            <Link to="/logout">Logout</Link>
          </li> */}

        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/" render={requireAuth}>
            <DashBoard />
          </Route>
          <Route exact path="/dashboard" render={requireAuth}>
            <DashBoard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          {/* <Route path="/logout">
            
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
