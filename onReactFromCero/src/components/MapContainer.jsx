import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const MapContainer = ({ google, markers }) => {
  const [state, setState] = useState({
    show: true,
  });

  const [infoWindow, setInfoWindow] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  });

  const handleClick = () => {
    if (state.show) {
      setState({ show: false });
    } else {
      setState({ show: true });
    }
  };

  const onMarkerClick = (props, marker, e) => setInfoWindow({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  const onMapClicked = (props) => {
    if (infoWindow.showingInfoWindow) {
      setInfoWindow({
        selectedPlace: props,
        activeMarker: null,
        showingInfoWindow: false,
      });
    }
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        {state.show ? 'Hide Map' : 'Show Map'}
      </button>
      <div className="MapContainer">
        <Map
          onClick={onMapClicked}
          visible={state.show}
          classNAme="Map"
          google={google}
          zoom={12}
          initialCenter={{ lat: 4.7058695, lng: -74.0662957 }}
        >
          {markers.map(marker => (
            <Marker
              onClick={onMarkerClick}
              key={marker.venueName}
              name={marker.venueName}
              position={{ lat: marker.venueLat, lng: marker.venueLon }}
            />
          ))}

          <InfoWindow
            marker={infoWindow.activeMarker}
            visible={infoWindow.showingInfoWindow}
          >
            <div>
              <h1>{infoWindow.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    </>
  );
};
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
