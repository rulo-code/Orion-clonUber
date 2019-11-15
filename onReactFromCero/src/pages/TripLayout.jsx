import React, { useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import Header from '../components/HeaderTrip';
import MyMap from '../components/Map';
import '../assets/styles/pages/TripLayout.scss';

const TripLayout = (props) => {
  const [originValue, setOriginValue] = useState('');
  const [destinationValue, setDestinationValue] = useState('');
  const [origin, setOrigin] = useState({});
  const [destination, setDestination] = useState({});
  const [showMap, setShowMAp] = useState(false);

  const handleChange = (originValue) => {
    if (originValue.length === 0) {
      setOrigin({});
    }
    setOriginValue(originValue);
  };
  const handleChange2 = (destinationValue) => {
    if (destinationValue.length === 0) {
      setDestination({});
    }
    setDestinationValue(destinationValue);
  };
  const handleOrigin = (state, type) => {
    setOrigin(state);
  };
  const handleDestination = (state, type) => {
    setDestination(state);
  };
  const handleSelectOrigin = (originValue) => {
    setOriginValue(originValue);
    console.log(`origin value: ${originValue}`);
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
  return (
    <div className='trip'>
      <div className='trip__header'>
        <Header />
      </div>

      <div className='trip__info'>
        <div className='Dashboard-header'>
          <h2>Create a new service</h2>

        </div>

        <PlacesAutocomplete
          value={originValue}
          onChange={handleChange}
          onSelect={handleSelectOrigin}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Origin',
                  className: 'location-search-input',
                })}
              />
              <div className='autocomplete-dropdown-container'>
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = 'suggestion-item';
                  const style = { cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        <PlacesAutocomplete
          value={destinationValue}
          onChange={handleChange2}
          onSelect={handleSelectDestination}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Destination',
                  className: 'location-search-input',
                })}
              />
              <div className='autocomplete-dropdown-container'>
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = 'suggestion-item';
                  const style = { cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>

      </div>
      <div className='trip__map'>
        {origin.lat && destination.lat && (
          <MyMap
            origin={origin}
            destination={destination}
            originValue={originValue}
            destinationValue={destinationValue}
          />
        )}
      </div>
    </div>
  );
};
export default TripLayout;
