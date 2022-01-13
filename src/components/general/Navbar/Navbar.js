import React, { useContext } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../hooks/useTheme';
import ThemeSelector from './ThemeSelector';

const Box = styled.nav`
  width: 100%;
  background: ${(props) => props.theme.body};
`;

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <Box theme={theme}>
      asdasd
      <ThemeSelector />
    </Box>
  );
};

export default Navbar;
