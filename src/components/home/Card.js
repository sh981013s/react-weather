import React from 'react';
import styled from 'styled-components';
import { ReactComponent as DarkCity } from '../../assets/svgs/darkCity.svg';
import { ReactComponent as LightCity } from '../../assets/svgs/lightCity.svg';
import { useTheme } from '../../hooks/useTheme';

const Box = styled.li`
  width: 16rem;
  height: 40vh;
  background: ${(props) => props.theme.card};
  color: ${(props) => props.theme.text};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;
  box-shadow: 0 0 2rem rgb(0 0 255 / 60%);

  &:hover {
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }
`;

const Card = () => {
  const { theme } = useTheme();
  return (
    <Box>{theme.themeName === 'lightTheme' ? <LightCity /> : <DarkCity />}</Box>
  );
};

export default Card;
