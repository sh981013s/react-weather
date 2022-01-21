import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box, DetailCard } from '../WeatherDetail/WeatherDetail';
import { useHistory } from 'react-router-dom';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { useCurrentLocation } from '../../hooks/useCurrentLocation';
import { useAddCity } from '../../hooks/useAddCity';

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
  const { getCurrentLocation, error, city } = useCurrentLocation();
  const { addCity, findError } = useAddCity();
  const history = useHistory();

  const handleSubmit = () => {
    addCity(real);
    // history.push('/');
  };

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
        {findError && <p>{findError}</p>}
        <button onClick={handleSubmit}>Submit</button>
        <p>Add by currentLocation</p>
        <button onClick={getCurrentLocation}>getCur</button>
      </AddCard>
    </Box>
  );
};

export default AddCity;
