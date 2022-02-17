import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../hooks/useTheme';
import { Box, Title, PlusBox } from './AddCard';
import { CloseIcon, NavIcon } from '../general/Sidebar/Sidebar';
import { useAlert } from 'react-alert';
import { ReactComponent as GreenArrow } from '../../assets/svgs/greenArrow.svg';
import { ReactComponent as RedArrow } from '../../assets/svgs/redArrow.svg';
import useWeatherIcon from '../../hooks/useWeatherIcon';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

const WeatherInfoBox = styled.div`
  text-align: center;
`;

const CurrentTmp = styled.span`
  font-size: 3rem;
  width: 100%;
`;

const WeatherStatus = styled.span`
  text-transform: uppercase;
  display: block;
  letter-spacing: 0.1rem;
`;

const MinMaxContainer = styled.section`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

const SingleContainer = styled.div`
  margin: 1rem 3rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
`;

const ArrowContainer = styled.div`
  width: 55%;
  height: 1.25rem;
  margin: auto;
`;
const MinTemp = styled.span`
  text-align: center;
  font-size: 2rem;
`;

const SingleMinText = styled.span`
  font-size: 1rem;
  text-align: center;
  color: #00ff96;
`;

const SingleMaxText = styled.span`
  font-size: 1rem;
  text-align: center;
  color: #ff0070;
`;

const WeatherCard = ({ data }) => {
  const alert = useAlert();
  const { theme } = useTheme();
  const weatherIcon = useWeatherIcon(data.weather);

  const closeHandler = (event) => {
    const deleteCity = async (id) => {
      const ref = doc(db, 'city', id);
      await deleteDoc(ref);
    };
    event.preventDefault();
    event.stopPropagation();
    deleteCity(data.fireId);
    const wrongAlert = alert.error('🌇 도시 삭제 완료', {
      timeout: 4000,
    });
  };

  return (
    <Box>
      <NavIcon>
        <CloseIcon onClick={closeHandler} icon="ep:close-bold" />
      </NavIcon>
      <Title>{data && data.name}</Title>
      <PlusBox>
        <img
          src={
            theme.themeName === 'lightTheme' ? weatherIcon[0] : weatherIcon[1]
          }
          alt="asd"
        />
      </PlusBox>
      <WeatherInfoBox>
        <CurrentTmp>{data && Math.round(data.temp)}°</CurrentTmp>
        <WeatherStatus>{data && data.weather_desc}</WeatherStatus>
      </WeatherInfoBox>
      <MinMaxContainer>
        <SingleContainer>
          <ArrowContainer>
            <GreenArrow />
          </ArrowContainer>
          <MinTemp>{data && Math.round(data.temp_min)}°</MinTemp>
          <SingleMinText>Min</SingleMinText>
        </SingleContainer>
        <SingleContainer>
          <ArrowContainer>
            <RedArrow />
          </ArrowContainer>
          <MinTemp>{data && Math.round(data.temp_max)}°</MinTemp>
          <SingleMaxText>Max</SingleMaxText>
        </SingleContainer>
      </MinMaxContainer>
    </Box>
  );
};

export default WeatherCard;
