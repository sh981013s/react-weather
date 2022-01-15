import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

const Box = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 25;
  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
`;

const SidebarStyled = styled.div`
  background: ${(props) => props.theme.sidebar};
  width: 250px;
  height: 100vh;
  padding: 0rem;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  position: fixed;
  top: 0;
  left: ${(props) => (props.sidebar ? '0%' : '-100%')};
  opacity: 1;
  transition: 500ms;
  z-index: 10;
  clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
`;

const NavIcon = styled.div`
  margin-left: 2rem;
  font-size: 2rem;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const CloseIcon = styled(Icon)`
  color: ${(props) => props.theme.text};
`;

const Avatar = styled.header`
  width: 100%;
  text-align: center;
  display: flex;
`;

const Username = styled.div`
  width: 100%;
`;

const Bar = styled.div`
  width: 100%;
`;

const Sidebar = ({ sidebar, setSidebar }) => {
  const sidebarHandler = () => {
    setSidebar(!sidebar);
  };

  const ref = useRef();
  useOnClickOutside(ref, () => setSidebar(false));

  return (
    <Box>
      <SidebarStyled ref={ref} sidebar={sidebar}>
        <NavIcon>
          <CloseIcon onClick={sidebarHandler} icon="ep:close-bold" />
        </NavIcon>
        <Avatar>
          <Username>Welcome SeungHwan!</Username>
        </Avatar>
        <Bar>asdasd</Bar>
        <Bar>asdasd</Bar>
        <Bar>asdasd</Bar>
        <Bar>asdasd</Bar>
        <Bar>asdasd</Bar>
      </SidebarStyled>
    </Box>
  );
};

export default Sidebar;
