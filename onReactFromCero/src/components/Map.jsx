/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { compose, withProps, lifecycle } from 'recompose';
import { withGoogleMap, GoogleMap, DirectionsRenderer, Marker } from 'react-google-maps';
import MapStyle from '../assets/styles/components/MyMapStyles';

const Map = compose(
  withProps({
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '100%' }} />,
    mapElement: <div style={{ height: '100%', width: '100%' }} />,
  }),
  withGoogleMap,

  lifecycle({
  }),
)((props) => {
  const defaultCenter = {
    lat: 4.6550365,
    lng: -74.1381167,
  };
  return (

    <div>
      <GoogleMap
        defaultZoom={12}
        defaultCenter={props.centerMap}
        defaultOptions={{ styles: MapStyle }}
      >
        {props.origin && !props.destination && (
          <Marker position={{ lat: props.origin.lat, lng: props.origin.lng }} />
        )}
        {props.directions && (
          <DirectionsRenderer directions={props.directions} />
        ) }

      </GoogleMap>

    </div>
  );
});

export default Map;
