import React from 'react';
import '../assets/styles/components/Locations.scss';
import PlacesAutocomplete from 'react-places-autocomplete';

const Locations = ({
  originValue,
  destinationValue,
  onChange,
  onChange2,
  onSelect,
  onSelect2,
}) => {
  return (
    <div className='locations'>
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
        onChange={onChange2}
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

    </div>
  );
};
export default Locations ;

