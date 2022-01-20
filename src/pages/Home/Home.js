import React, { useRef, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import WeatherCard from '../../components/home/WeatherCard';
import AddCard from '../../components/home/AddCard';
import useFetch from '../../hooks/useFetch';
import useWeather from '../../hooks/useWeather';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';

const Box = styled(motion.div)`
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
  const { user } = useAuthContext();
  const ref = useRef(null);
  const { loading, data, error } = useWeather('seoul');

  const { documents: cities } = useCollection('city', [
    'userId',
    '==',
    user?.uid,
  ]);

  console.log(cities, 'cc');

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
    <Box
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Main ref={ref}>
        {/*        {user && data && (
          <StyledLink
            to={`/city/${data.name}/${data.coord.lat}/${data.coord.lon}`}
          >
            <WeatherCard data={data} />
          </StyledLink>
        )}*/}
        {user &&
          cities &&
          cities.map((city) => {
            console.log(city, 'prop');
            return (
              <StyledLink to={`/city/${city.name}/${city.lat}/${city.lon}`}>
                <WeatherCard data={city} />
              </StyledLink>
            );
          })}
        <StyledLink to="/addcity">
          <AddCard />
        </StyledLink>
      </Main>
    </Box>
  );
};

export default Home;
