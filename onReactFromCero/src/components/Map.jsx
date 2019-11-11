import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const MapContainer = ({ google }) => {
  const API = 'http://localhost:3000/locations';

  const [markers, setMarker] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((locations) => setMarker(locations))
      .catch((err) => {
        console.log(err);
      });
  }, []);
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

      <div className='MapContainer'>
        <Map
          onClick={onMapClicked}
          visible={state.show}
          classNAme='Map'
          google={google}
          zoom={17}
          initialCenter={{ lat: 4.7121064, lng: -74.121374 }}
        >
          {markers.map((marker) => (
            <Marker
              onClick={onMarkerClick}
              key={marker.venueName}
              name={marker.venueName}
              position={{ lat: marker.venueLat, lng: marker.venueLon }}
              icon={{
                url: '/src/assets/static/custom-marker.png',
              }}
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
