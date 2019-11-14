import React from 'react';
import { Router } from '@reach/router';

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
import NotFound from '../components/notFound';

import '../assets/styles/App.scss';

function App({ user }) {

  const isAuth = user.auth;

  if (isAuth) {
    return (
      <TripLayout>
        <Router className='router'>
          <NotFound default />
          <Pickup path='/' />
          <DropOff path='/dropoff' />
          <Services path='/service' />
          <DriverFound path='/driverfound' />
        </Router>
      </TripLayout>
    );
  } return (
    <HomeLayout>
      <Router className='router'>
        <NotFound default />
        <Home path='/' />
        <Login path='/login' />
        <Register path='/register' />
      </Router>
    </HomeLayout>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(
  mapStateToProps,
  null,
)(App);
