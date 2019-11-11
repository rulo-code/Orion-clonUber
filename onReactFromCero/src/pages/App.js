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
import '../assets/styles/App.scss';

function App({ user }) {
  const UserLogged = ({ children }) => {
    if (user === true) {
      return children({ isAuth: true });
    }
    return children({ isAuth: true });
  };
  return (
    <>
      <UserLogged>
        {({ isAuth }) => (isAuth ?
          (
            <TripLayout>
              <Router className='router'>
                <Pickup path='/' />
                <DropOff path='/dropoff' />
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
    </>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(
  mapStateToProps,
  null,
)(App);
