import React from 'react';
import { Link } from '@reach/router';
import '../assets/styles/components/HeaderTrip.scss';

const Header = () => {
  return (
    <div className='headerTrip'>
      <Link to='/'>
        <div className='headerTrip__logo'>
          <h1>City</h1>
          <p>Driver</p>
        </div>
      </Link>
    </div>
  );
};
export default Header;
