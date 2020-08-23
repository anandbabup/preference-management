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
  const [userInfo, setUserInfo] = useState({ isAuthenticated: false });
  const setUser = function (user) {
    setUserInfo(user);
  }

  const logOut = () => {
    setUserInfo({ isAuthenticated: false });
  }

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">PMS</Link>
          </li>

          {userInfo.isAuthenticated ?
            <div style={{ float: "right", color: "white" }}>
              <li >
                <span>{userInfo.username}</span>
              </li>
              <li>
                <Link onClick={logOut} >Logout</Link>
              </li>
            </div>
            : <div>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </div>}

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
          <Route exact path="/" >
            <DashBoard user={userInfo} />
          </Route>
          <Route exact path="/dashboard">
            <DashBoard user={userInfo} />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
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
