import React from 'react';
import RingLoader from 'react-spinners/RingLoader';
import styled from 'styled-components';

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  /* background: ${(props) => props.theme.text}; */
  background: rgba(133, 202, 232, 0.3);
  color: black;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  h1 {
    margin-right: 20px;
    font-weight: 600;
  }
`;

const Loader = () => {
  return (
    <Box>
      <h1>Loading...</h1>
      <RingLoader />
    </Box>
  );
};

export default Loader;
