import React from 'react';
import { Link } from '@reach/router';
import '../assets/styles/components/DriverFound.scss';
import Locations from './Locations';
import DriverCar from './DriverCar';
import DriverInfo from './DriverInfo';

const DriverFound = () => {
  return (
    <div className='driverFound'>
      <div className='driverFound__locations'>
        <Locations />
      </div>
      <div className='driverFound__service'>
        <DriverCar />
      </div>
      <div className='driverFound__driverInfo'>
        <DriverInfo />
      </div>
    </div>
  );
};
export default DriverFound;
