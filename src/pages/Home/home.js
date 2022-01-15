import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../../components/home/Card';

const Box = styled.div`
  padding-top: 15vh;
  height: 400vh;
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

const Home = () => {
  const ref = useRef(null);

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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Main>
    </Box>
  );
};

export default Home;
