import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box, DetailCard } from '../WeatherDetail/WeatherDetail';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

const AddCard = styled(DetailCard)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const searchOptions = {
  types: ['city'],
};

const AddCity = () => {
  const [address, setAddress] = useState('');
  const [real, setReal] = useState('');

  const searchOptions = {
    types: ['(cities)'],
  };

  useEffect(() => {
    setAddress(real);
  }, [real]);

  return (
    <Box>
      <AddCard>
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={setReal}
          debounce={500}
          searchOptions={searchOptions}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <input
                pattern="[a-zA-Z]*"
                {...getInputProps({ placeholder: 'Type address' })}
              ></input>
              <div>
                {loading ? <div>...Loading</div> : null}
                {suggestions.map((suggestion) => {
                  const style = {
                    background: suggestion.active ? '#41B6E6' : '#FFF',
                  };
                  //   console.log(suggestion);
                  return (
                    <div
                      key={suggestion.placeId}
                      {...getSuggestionItemProps(suggestion, { style })}
                    >
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </AddCard>
    </Box>
  );
};

export default AddCity;
