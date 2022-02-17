import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box, DetailCard } from '../WeatherDetail/WeatherDetail';
import { useHistory } from 'react-router-dom';
import PlacesAutocomplete from 'react-places-autocomplete';
import { useCurrentLocation } from '../../hooks/useCurrentLocation';
import { useAddCity } from '../../hooks/useAddCity';
import { useAlert } from 'react-alert';

const EntireBox = styled(Box)`
  background: ${(props) => props.theme.background};
`;

const AddCard = styled(DetailCard)`
  width: 50vw;
  height: 70vh;
  background: #565670;
`;

const Title = styled.div`
  margin-top: 1rem;
  text-align: center;
  h1 {
    color: #ffff;
    font-size: 2rem;
  }
`;

const SearchBar = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    label {
      margin-right: 1rem;
    }
  }
`;

const BtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddCityBtn = styled.button`
  width: 40%;
  height: 8vh;
  margin: 0 1rem;
  background: #383867;
  color: #ffff;
  border: none;
  border-radius: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const AddCity = () => {
  const alert = useAlert();
  const [address, setAddress] = useState('');
  const [real, setReal] = useState('');
  const { getCurrentLocation, error, city } = useCurrentLocation();
  const { addCity, findError } = useAddCity();
  const history = useHistory();

  const handleSubmit = async () => {
    await addCity(real);
    const successAlert = alert.success('🌃 도시 추가 완료', {
      timeout: 4000,
    });
    history.push('/');
  };

  const locationSubmit = async () => {
    const successAlert = alert.success('🌃 도시 추가 완료', {
      timeout: 4000,
    });
    await getCurrentLocation();
  };

  useEffect(() => {
    const addCityWhenLocationValArrived = async () => {
      if (city) {
        await addCity(city);
        history.push('/');
      }
    };

    addCityWhenLocationValArrived();
  }, [city]);

  const searchOptions = {
    types: ['(cities)'],
  };

  useEffect(() => {
    setAddress(real);
  }, [real]);

  return (
    <EntireBox>
      <AddCard>
        <Title>
          <h1>🌞 도시 추가</h1>
        </Title>
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
            <SearchBar>
              <div>
                <label for="searchBar">🔎</label>
                <input
                  name="searchBar"
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
            </SearchBar>
          )}
        </PlacesAutocomplete>
        {findError && <p>{findError}</p>}
        <BtnBox>
          <AddCityBtn onClick={handleSubmit}>🏙 도시 추가</AddCityBtn>
          <AddCityBtn onClick={locationSubmit}>
            🗺 현재 위치 기준 도시 추가
          </AddCityBtn>
        </BtnBox>
        {error ?? <p>{error}</p>}
      </AddCard>
    </EntireBox>
  );
};

export default AddCity;
