import React from 'react';
import { Link } from '@reach/router';
import '../assets/styles/components/DropOff.scss';
import PlacesAutocomplete from 'react-places-autocomplete';

import FavoriteSites from './FavoriteSites';

const DropOff = ({
  originValue,
  destinationValue,
  onChange,
  onChange2,
  onSelect,
  onSelect2,
}) => {
  return (
    <div className='dropOff'>
      <h2>Estoy en : </h2>
      <PlacesAutocomplete
        value={originValue}
        onChange={onChange}
        onSelect={onSelect}
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
                const className = 'sugerencia';
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
      <h2>Voy para : </h2>
      <PlacesAutocomplete
        value={destinationValue}
        onChange={onchange2}
        onSelect={onSelect2}
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
      <FavoriteSites />

      <Link className='btn' to='/service'>Viajar</Link>
    </div>
  );
};
export default DropOff;
