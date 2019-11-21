/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { compose, withProps, lifecycle } from 'recompose';
import { withGoogleMap, GoogleMap, DirectionsRenderer, Marker } from 'react-google-maps';
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


  return (
    <div>
      <GoogleMap
        defaultZoom={12}
        defaultCenter={props.center}
        defaultOptions={{ styles: MapStyle }}
      >
        {props.origin && (
          <Marker position={{ lat: props.origin.lat, lng: props.origin.lng }} onClick={props.onMarkerClick} />
        )}
        {props.directions && (
          <DirectionsRenderer directions={props.directions} />
        ) }

      </GoogleMap>

    </div>
  );
});

export default Map;
