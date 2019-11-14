/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { compose, withProps, lifecycle } from 'recompose';
import { withGoogleMap, GoogleMap, DirectionsRenderer } from 'react-google-maps';
import MapStyle from '../assets/styles/components/MyMapStyles';

const styleMap = [
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e0dfe0"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#a8a9a8"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#5b5b5a"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]

const Map = compose(
  withProps({
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '600px' }} />,
    mapElement: <div style={{ height: '80%', width: '100%' }} />,
  }),
  withGoogleMap,

  lifecycle({
    componentDidMount() {
      const DirectionsService = new window.google.maps.DirectionsService();
      const DistanceService = new window.google.maps.DistanceMatrixService();

      DirectionsService.route({
        origin: new window.google.maps.LatLng(this.props.origin.lat, this.props.origin.lng),
        destination: new window.google.maps.LatLng(this.props.destination.lat, this.props.destination.lng),
        travelMode: window.google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });

      DistanceService.getDistanceMatrix({
        origins: [new window.google.maps.LatLng(this.props.origin.lat, this.props.origin.lng)],
        destinations: [new window.google.maps.LatLng(this.props.destination.lat, this.props.destination.lng)],
        travelMode: window.google.maps.TravelMode.DRIVING,
        avoidHighways: false,
        avoidTolls: false,
        unitSystem: window.google.maps.UnitSystem.IMPERIAL,
      },
      (result, status) => {
        this.setState({
          originAddresses: result.originAddresses,
          destinationAddresses: result.destinationAddresses,
          distance: result.rows[0].elements[0].distance.text,
          duration: result.rows[0].elements[0].duration.text,
        });
      });
    },
  }),
)((props) => (
  <div>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 4.624335, lng: -74.063644 }}
      defaultOptions={{ 
        styles: styleMap ,    
        disableDefaultUI: true,
        draggable: true,
        keyboardShortcuts: false,
        scaleControl: false,
        scrollwheel: true}}
    >
      {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
    <div className='sub-information'>
      Tiempo promedio de viaje es <strong>{props.duration}</strong> con <strong>{props.distance}</strong> entre <strong>{props.originValue} ({props.originAddresses})</strong> y <strong>{props.destinationValue} ({props.destinationAddresses})</strong>
    </div>
  </div>
));

export default Map;
