/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';
import { Link } from '@reach/router';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import '../assets/styles/components/Pickup.scss';

const Pickup = ({ value, onChange, onSelect, locationUser, onClick }) => {
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
                placeholder: 'Punto de origen',
                className: 'search-input',
              })}
            />
            <div className='autocomplete-dropdown-container'>
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = 'suggestion';
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
      <p>
        Obtener mi ubicación
        <i
          role='button'
          onClick={onClick}
          className={locationUser ?
            'userLocationActive fas fa-map-marker-alt' :
            'userLocation fas fa-map-marker-alt'}
        />
      </p>
      {/* <button type='button' onClick={getLocation}>Obtener mis coordenadas</button> */}
      <Link to='/dropoff' className='btn' type='button'>Siguiente</Link>
    </div>
  );
};

export default Pickup;
