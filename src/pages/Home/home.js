import axios from 'axios';
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import WeatherCard from '../../components/home/WeatherCard';
import AddCard from '../../components/home/AddCard';
import useFetch from '../../hooks/useFetch';
import useWeather from '../../hooks/useWeather';
import { Link } from 'react-router-dom';

const Box = styled.div`
  padding-top: 15vh;
  width: 100%;
  min-height: 400vh;
  display: flex;
  background: ${(props) => props.theme.background};
  transition: background-color 500ms linear;
`;

const Main = styled.ul`
  position: fixed;
  top: 12rem;
  left: calc(1rem + 13vw);
  display: flex;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Home = () => {
  const ref = useRef(null);
  const { lodaing, data, error } = useWeather('seoul');

  useEffect(() => {
    const element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
    };

    window.addEventListener('scroll', rotate);
    return () => {
      window.removeEventListener('scroll', rotate);
    };
  }, []);

  return (
    <Box>
      <Main ref={ref}>
        {data && (
          <StyledLink
            to={`/city/${data.name}/${data.coord.lat}/${data.coord.lon}`}
          >
            <WeatherCard data={data} />
          </StyledLink>
        )}
        <AddCard />
      </Main>
    </Box>
  );
};

export default Home;
