import React, { useState } from 'react';
import { Link } from '@reach/router';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import '../assets/styles/components/Pickup.scss';

const Pickup = ({ value, onChange, onSelect, getLocation }) => {
  return (
    <div className='pickup'>
      <h2>¿Dónde te recogemos?</h2>
      <PlacesAutocomplete
        value={value}
        onChange={onChange}
        onSelect={onSelect}
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
      <button type='button' onClick={getLocation}>Obtener mis coordenadas</button>
      <Link to='/dropoff' className='btn' type='button'>Siguiente</Link>
    </div>
  );
};

export default Pickup;
