/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { Router } from '@reach/router';

import Header from '../components/HeaderTrip';
import MyMap from '../components/Map';
import Pickup from '../components/Pickup';
import DropOff from '../components/DropOff';
import Services from '../components/Services';
import DriverFound from '../components/DriverFound';
import NotFound from '../components/notFound';
import '../assets/styles/pages/TripLayout.scss';

const TripLayout = (props) => {

  const [originValue, setOriginValue] = useState('');

  const [destinationValue, setDestinationValue] = useState('');

  const [origin, setOrigin] = useState({
    lat: '',
    lng: '',
  });

  const [destination, setDestination] = useState(null);
  const [directions, setDirections] = useState({});
  const [tripInfo, setTripInfo] = useState({
    duration: '',
    distance: '',
  });
  const [locationUser, setLocationUser] = useState(false);

  const getCoordinates = (position) => {
    console.log(position.coords.latitude);

    setOrigin({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
    setOriginValue('Mi ubicación');

  };
  const getLocation = () => {
    setLocationUser(!locationUser);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
      alert('Geolocation is not supported by browser');
    }
  };

  const handleChange = (originValue) => {
    if (originValue.length === 0) {
      setOrigin({});
      setLocationUser(!locationUser);
    }
    setOriginValue(originValue);
  };
  const handleChange2 = (destinationValue) => {
    if (destinationValue.length === 0) {
      setDestination({});
    }
    setDestinationValue(destinationValue);
  };
  const handleOrigin = (state) => {
    setOrigin(state);
  };
  const handleDestination = (state, type) => {
    setDestination(state);
  };
  const handleSelectOrigin = (originValue) => {

    setOriginValue(originValue);

    // console.log(`origin value: ${originValue}`);

    geocodeByAddress(originValue)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => handleOrigin(latLng))
      .catch((error) => console.error('Error', error));

  };
  const handleSelectDestination = (destinationValue) => {
    setDestinationValue(destinationValue);
    console.log(`destination value: ${destinationValue}`);

    geocodeByAddress(destinationValue)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => handleDestination(latLng))
      .catch((error) => console.error('Error', error));

  };
  const handleDistanceMatrix = (response) => {
    const DistanceService = new window.google.maps.DistanceMatrixService();

    DistanceService.getDistanceMatrix({
      origins: [new window.google.maps.LatLng(origin.lat, origin.lng)],
      destinations: [new window.google.maps.LatLng(destination.lat, destination.lng)],
      travelMode: window.google.maps.TravelMode.DRIVING,
      avoidHighways: false,
      avoidTolls: false,
      unitSystem: window.google.maps.UnitSystem.IMPERIAL,
    },
    (result, status) => {
      setDirections(response);
      setTripInfo({
        duration: result.rows[0].elements[0].duration.text,
        distance: result.rows[0].elements[0].distance.text,
      });
    });
  };
  const handlleDirectionsService = () => {
    const DirectionsService = new window.google.maps.DirectionsService();

    DirectionsService.route({
      origin: new window.google.maps.LatLng(origin.lat, origin.lng),
      destination: new window.google.maps.LatLng(destination.lat, destination.lng),
      travelMode: window.google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        handleDistanceMatrix(result);
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
  };

  return (
    <div className='trip'>
      <div className='trip__header'>
        <Header />
      </div>

      <div className='trip__info'>
        <Router className='router'>
          <NotFound default />
          <Pickup
            path='/'
            value={originValue}
            onChange={handleChange}
            onSelect={handleSelectOrigin}
            onClick={getLocation}
            locationUser={locationUser}
          />
          <DropOff
            originValue={originValue}
            destinationValue={destinationValue}
            onChange={handleChange}
            onChange2={handleChange2}
            onSelect={handleSelectOrigin}
            onSelect2={handleSelectDestination}
            path='/dropoff'
            onClick={handlleDirectionsService}
          />
          <Services
            path='/service'
            originValue={originValue}
            destinationValue={destinationValue}
            onChange={handleChange}
            onChange2={handleChange2}
            onSelect={handleSelectOrigin}
            onSelect2={handleSelectDestination}
            duration={tripInfo.duration}
            onClick={handlleDirectionsService}

          />
          <DriverFound path='/driverfound' />
        </Router>

      </div>
      <div className='trip__map'>
        <MyMap
          origin={origin}
          destination={destination}
          originValue={originValue}
          destinationValue={destinationValue}
          directions={directions}
        />
      </div>
    </div>
  );
};
export default TripLayout;
