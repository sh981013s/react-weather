import React from 'react';
import styled from 'styled-components';
import { ReactComponent as DarkCity } from '../../assets/svgs/darkCity.svg';
import { ReactComponent as LightCity } from '../../assets/svgs/lightCity.svg';
import { ReactComponent as LightPlusSign } from '../../assets/svgs/plusSign-light.svg';
import { ReactComponent as DarkPlusSign } from '../../assets/svgs/plusSign-dark.svg';

import { useTheme } from '../../hooks/useTheme';

export const Box = styled.li`
  position: relative;
  width: 16rem;
  height: 50vh;
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
    border: 1px solid ${(props) => props.theme.sidebar};
    cursor: pointer;
  }
`;

export const Title = styled.h2`
  font-size: 1.7rem;
  text-align: center;
  letter-spacing: 0.1rem;
`;

export const PlusBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: all 0.2s ease;

  img {
    width: 50%;
  }
`;

const LightSign = styled(LightPlusSign)`
  width: 50%;
`;

const DarkSign = styled(DarkPlusSign)`
  width: 50%;
`;

const AddCard = () => {
  const { theme } = useTheme();
  return (
    <Box>
      <Title>Add City</Title>
      <PlusBox>
        {theme.themeName && theme.themeName === 'lightTheme' ? (
          <LightSign />
        ) : (
          <DarkSign />
        )}
      </PlusBox>
      {theme.themeName && theme.themeName === 'lightTheme' ? (
        <LightCity />
      ) : (
        <DarkCity />
      )}
    </Box>
  );
};

export default AddCard;
