import React, { useState } from 'react';
import { Link } from '@reach/router';
import { GoogleApiWrapper } from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import '../assets/styles/components/Pickup.scss';
import FavoriteSites from './FavoriteSites';

const Pickup = () => {
  const [originValue, setOriginValue] = useState('');
  const [origin, setOrigin] = useState({});
  const handleChange = (originValue) => {
    setOriginValue(originValue);
  };
  const handleState = (state, type) => {
    setOrigin({
      [type]: state,
    });
  };
  const handleSelectOrigin = (originValue) => {
    geocodeByAddress(originValue)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => handleState(latLng, 'origin'))
      .catch((error) => console.error('Error', error));

  };
  return (
    <div className='pickup'>
      <h2>¿Dónde te recogemos?</h2>
      <PlacesAutocomplete
        value={originValue}
        onChange={handleChange}
        onSelect={handleSelectOrigin}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className='autocomplete-dropdown-container'>
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active ?
                  'suggestion-item--active' :
                  'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active ?
                  { backgroundColor: '#fafafa', cursor: 'pointer' } :
                  { backgroundColor: '#ffffff', cursor: 'pointer' };
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
      <FavoriteSites />
      <Link to='/dropoff' className='btn' type='button'>Siguiente</Link>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(Pickup);
