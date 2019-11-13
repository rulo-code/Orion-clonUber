import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';

import '../assets/styles/App.scss';
import { connect } from 'react-redux';

import HomeLayout from './HomeLayout';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';

import TripLayout from './TripLayout';
import Pickup from '../components/Pickup';
import DropOff from '../components/DropOff';
import Services from '../components/Services';
import DriverFound from '../components/DriverFound';

function App({ user }) {
  const UserLogged = ({ children }) => {
    if (user === true) {
      return children({ isAuth: true });
    }
    return children({ isAuth: true });
  };
  const API_KEY = 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw';
  console.log(`Hola ${API_KEY}`);
  return (
    <div>
      <UserLogged>
        {({ isAuth }) => (isAuth ?
          (
            <TripLayout>
              <Router className='router'>
                {/* <Pickup path='/' /> */}
                <DropOff path='/' />
                <Services path='/service' />
                <DriverFound path='/driverfound' />
              </Router>
            </TripLayout>
          ) :
          (
            <HomeLayout>
              <Router className='router'>
                <Home path='/' />
                <Login path='/login' />
                <Register path='/register' />
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
