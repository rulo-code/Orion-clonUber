import React, { useState, useEffect } from 'react';
import { Router, Switch, Route } from '@reach/router';

import '../assets/styles/App.scss';
import { connect } from 'react-redux';

import Home from '../components/Home';
import HomeLayout from "./HomeLayout";
import TripLayout from "./TripLayout";
import Pickup from "../components/Pickup";
import Login from '../components/Login';
import Register from '../components/Register';
import Header from '../components/Header';
import Hero from '../components/Hero';

import Map from '../components/Map';

function App() {
  // const [isAuth, setisAuth] = useState({
  //   isAuth: false,
  // });
  const UserLogged = ({ children }) => {

    return children({ isAuth: true });
  };
  // const handleLog = () => {
  //   setisAuth({
  //     isAuth: true,
  //   });
  // };

  return (
    <div>
      <UserLogged>
        {({ isAuth }) => (isAuth ? (
          <TripLayout>
            <Router className="router">
              <Pickup path="/pickup" />
            </Router>
          </TripLayout>
          ) : (
            <HomeLayout>
              <Router>
                <Home path="/" />
                <Login path="/login" />
                <Register path="/register" />
              </Router>
            </HomeLayout>
          ))}
      </UserLogged>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(
  mapStateToProps,
  null,
)(App);
