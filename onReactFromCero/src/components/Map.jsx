/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { compose, withProps, lifecycle } from 'recompose';
import { withGoogleMap, GoogleMap, DirectionsRenderer } from 'react-google-maps';
import MapStyle from '../assets/styles/components/MyMapStyles';

const Map = compose(
  withProps({
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '600px' }} />,
    mapElement: <div style={{ height: '80%', width: '100%' }} />,
  }),
  withGoogleMap,

  lifecycle({
  }),
)((props) => {
  const center = {
    lat: 4.6438136,
    lng: -74.1173041,
  };

  return (
    <div>
      <GoogleMap
        defaultZoom={12}
        defaultCenter={center}
        defaultOptions={{ styles: MapStyle }}
      >
        {props.directions && (
          <DirectionsRenderer directions={props.directions} />
        ) }

      </GoogleMap>

    </div>
  );
});

export default Map;
