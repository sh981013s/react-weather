import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../../../hooks/useTheme';
import ThemeSelector from './ThemeSelector';
import Logo from '../../../assets/images/logo2.png';
import { Icon } from '@iconify/react';
import { StyledLink } from '../../../pages/Home/Home';
import { useLogout } from '../../../hooks/useLogout';
import { useAuthContext } from '../../../hooks/useAuthContext';

const NavbarStyled = styled.nav`
  position: absolute;
  width: 100%;
  height: 60px;

  display: flex;
  flex-direction: column;

  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
  transition: background-color 500ms linear;
  animation: 1s ease-in-out 0ms 1 fade-in;
  background: ${(props) => props.theme.navbar};
  color: ${(props) => props.theme.text};
  z-index: 88;

  img {
    display: inline-block;
    width: 3rem;
    overflow: hidden;
    margin: 0 0 10px 20px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const LeftSection = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

const RightSection = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 50px;
`;

const NavBarInner = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
`;

const NavbarLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavBarExtended = styled.div``;

const NavbarLink = styled(StyledLink)`
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const LogoutBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const NavName = styled.h1`
  font-weight: 500;
`;

const HamburgerIcon = styled(Icon)`
  color: ${(props) => props.theme.text};
  &:hover {
    cursor: pointer;
  }
`;

const Navbar = (props) => {
  const { user } = useAuthContext();

  console.log(user, 'user');

  const { logout } = useLogout();

  return (
    <>
      <NavbarStyled>
        <NavBarInner>
          <LeftSection>
            <NavbarLinkContainer>
              <NavbarLink to="/">
                <img src={Logo} alt="logo" />
              </NavbarLink>
              {user && <LogoutBtn onClick={logout}>Logout</LogoutBtn>}
              {!user && <NavbarLink to="/login">Login</NavbarLink>}

              <NavbarLink to="/compare">Compare</NavbarLink>
            </NavbarLinkContainer>
          </LeftSection>
          <RightSection>
            <ThemeSelector />
          </RightSection>
        </NavBarInner>
        <NavBarExtended></NavBarExtended>
      </NavbarStyled>
      {/*<Sidebar sidebar={sidebar} setSidebar={setSidebar} />*/}
    </>
  );
};

export default Navbar;
