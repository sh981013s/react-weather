import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../hooks/useTheme';
import { Box, Title, PlusBox } from './AddCard';
import clearDark from '../../assets/animated/weatherCategory/clear-dark.gif';
import clearLight from '../../assets/animated/weatherCategory/clear-light.gif';

import { ReactComponent as DarkCity } from '../../assets/svgs/darkCity.svg';
import { ReactComponent as GreenArrow } from '../../assets/svgs/greenArrow.svg';
import { ReactComponent as RedArrow } from '../../assets/svgs/redArrow.svg';

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

const WeatherCard = () => {
  const { theme } = useTheme();
  return (
    <Box>
      <Title>Seoul</Title>
      <PlusBox>
        <img
          src={theme.themeName === 'lightTheme' ? clearLight : clearDark}
          alt="asd"
        />
      </PlusBox>
      <WeatherInfoBox>
        <CurrentTmp>3°</CurrentTmp>
        <WeatherStatus>Clear</WeatherStatus>
      </WeatherInfoBox>
      <MinMaxContainer>
        <SingleContainer>
          <ArrowContainer>
            <GreenArrow />
          </ArrowContainer>
          <MinTemp>3°</MinTemp>
          <SingleMinText>Min</SingleMinText>
        </SingleContainer>
        <SingleContainer>
          <ArrowContainer>
            <RedArrow />
          </ArrowContainer>
          <MinTemp>21°</MinTemp>
          <SingleMaxText>Max</SingleMaxText>
        </SingleContainer>
      </MinMaxContainer>
    </Box>
  );
};

export default WeatherCard;
