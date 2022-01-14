import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../../../hooks/useTheme';
import ThemeSelector from './ThemeSelector';
import Logo from '../../../assets/images/logo2.png';
import { Icon } from '@iconify/react';
import Sidebar from '../Sidebar/Sidebar';

const NavbarStyled = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
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
    &:hover {
      cursor: pointer;
    }
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

const HamburgerIcon = styled(Icon)`
  color: ${(props) => props.theme.text};
  &:hover {
    cursor: pointer;
  }
`;

const Navbar = (props) => {
  const { theme } = useTheme();
  const [sidebar, setSidebar] = useState(false);

  const sidebarHandler = () => setSidebar(!sidebar);

  return (
    <>
      <NavbarStyled>
        <LeftSection>
          <HamburgerIcon
            icon="radix-icons:hamburger-menu"
            width="30"
            height="30"
            onClick={sidebarHandler}
          />
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <NavName>House' The Weather?</NavName>
        </LeftSection>
        <DateText>Today</DateText>
        <ThemeSelector />
      </NavbarStyled>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
    </>
  );
};

export default Navbar;
