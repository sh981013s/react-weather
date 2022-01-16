import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as BackBtn } from '../../assets/svgs/backBtn.svg';
import { useTheme } from '../../hooks/useTheme';
import WeatherDetailFunc from '../../hooks/useWeatherDetail';
import WeatherIconFunc from '../../hooks/weatherDetailIcon';

const Box = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.detailBackground};
  padding: 2rem 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GradientCircle = styled.div`
  position: absolute;
  top: -10%;
  right: 0;
  z-index: 1;
  width: 100rem;
  height: 100rem;
  border-radius: 50%;
  background: ${(props) => props.theme.circleBackground};
`;

const BackBtnStyled = styled.div`
  position: absolute;
  top: 3rem;
  left: 3.25rem;
  width: 5rem;
  cursor: pointer;
  z-index: 6;
  margin-top: 2rem;
`;

const DetailCard = styled.section`
  width: 90%;
  height: 80vh;
  position: absolute;
  z-index: 4;
  background: linear-gradient(180deg, #8782d0 35%, rgba(255, 177, 190, 1) 100%);
  border-radius: 3rem;
`;

const DetailMain = styled.div`
  width: 100%;
  height: 50%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, 1fr);
  /* background: ${(props) => props.theme.card}; */
  color: ${(props) => props.theme.text};
  border-radius: 3rem 3rem 0 0;
`;

const DetailLeft = styled.div`
  align-self: center;
  justify-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  span {
    display: block;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

const PictureContainer = styled.div`
  width: 20vw;
  height: 20vh;
  padding: 2em;
  /* background: ${(props) => props.theme.card}; */
  border-radius: 3rem;
`;

const WeatherDetail = ({ match }) => {
  const { theme } = useTheme();
  const { name, lat, long } = match.params;
  const { data } = WeatherDetailFunc(lat, long);
  const [img, setImg] = useState([]);

  useEffect(() => {
    if (data) {
      const img = WeatherIconFunc(data.current.weather[0].main);
      setImg(img);
    }
  }, [data]);

  return (
    <Box>
      <GradientCircle />
      <BackBtnStyled>
        <BackBtn />
      </BackBtnStyled>
      <DetailCard>
        <DetailMain>
          <DetailLeft>
            <div>
              <span>{name && name}</span>
              <PictureContainer>
                {data && <img src={img} alt="" />}
              </PictureContainer>
            </div>
          </DetailLeft>
          <DetailLeft>
            <div>
              <span>{data && Math.round(data.current.temp - 273)}°</span>
              <span>{data && data.current.weather[0].description}</span>
            </div>
          </DetailLeft>
        </DetailMain>
      </DetailCard>
    </Box>
  );
};

export default WeatherDetail;
