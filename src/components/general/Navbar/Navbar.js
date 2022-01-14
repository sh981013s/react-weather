import React, { useContext } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../hooks/useTheme';
import ThemeSelector from './ThemeSelector';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../../assets/images/logo2.png';

const Box = styled.nav`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 0.25fr;
  grid-template-rows: 1fr;
  align-items: center;
  align-self: center;

  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
  height: 4rem;
  transition: background-color 500ms linear;
  animation: 1s ease-in-out 0ms 1 fade-in;
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  padding: 0 1.5rem;

  img {
    display: inline-block;
    width: 3rem;
    overflow: hidden;
    margin: 0 0 20px 20px;
  }
`;

const LeftSection = styled.div`
  /* display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  max-width: 5rem; */
  display: flex;
  align-items: center;
`;

const NavName = styled.h1`
  font-weight: 500;
`;

const DateText = styled.h3`
  display: flex;
  align-items: center;
`;

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <Box theme={theme}>
      <LeftSection>
        <FontAwesomeIcon icon={faBars} size="2x" />
        <img src={Logo} alt="logo" />
        <NavName>House' The Weather?</NavName>
      </LeftSection>
      <DateText>Today</DateText>
      <ThemeSelector />
    </Box>
  );
};

export default Navbar;
