import React from 'react';
import Header from '../components/HeaderTrip';
import Map from '../components/Map';
import '../assets/styles/pages/TripLayout.scss';

const TripLayout = ({ children }) => {
  return (
    <div className='trip'>

      <div className='trip__map'>
        <Map />
      </div>
      <div className='trip__info'>
        { children }
      </div>
      <div className='trip__header'>
        <Header />
      </div>
    </div>
  );
};
export default TripLayout;
