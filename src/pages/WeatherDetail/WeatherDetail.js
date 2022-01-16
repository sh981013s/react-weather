import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as BackBtn } from '../../assets/svgs/backBtn.svg';
import WeatherDetailFunc from '../../hooks/useWeatherDetail';
import WeatherIconFunc from '../../hooks/weatherDetailIcon';
import unixConverter from '../../utility/unixConverter';

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
`;

const DetailBottom = styled.div`
  width: 100%;
  height: 50%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(5, 1fr);
  color: ${(props) => props.theme.text};
  border-radius: 3rem 3rem 0 0;
`;

const SmallPictureContainer = styled.div`
  width: 20%;
  height: 20%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const WeatherDetail = ({ match }) => {
  const { name, lat, long } = match.params;
  const { data } = WeatherDetailFunc(lat, long);
  const [img, setImg] = useState([]);
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    if (data) {
      const img = WeatherIconFunc(data.current.weather[0].main);
      setImg(img);
      setDailyData(data.daily.slice(1, 6));
    }
  }, [data]);

  console.log(data);

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
              <span>기온 : {data && Math.round(data.current.temp - 273)}°</span>
              <span>
                날씨 상태 : {data && data.current.weather[0].description}
              </span>
              <span>습도 : {data && data.current.humidity}%</span>
              <span>풍속 : {data && data.current.wind_speed}m/sec</span>
            </div>
          </DetailLeft>
        </DetailMain>
        <DetailBottom>
          {dailyData &&
            dailyData.map((day) => {
              return (
                <div>
                  <p>{unixConverter(day.dt)}</p>
                  <SmallPictureContainer>
                    {data && (
                      <img src={WeatherIconFunc(day.weather[0].main)} alt="" />
                    )}
                  </SmallPictureContainer>
                  <p>{Math.round(day.temp.day - 273)}°</p>
                </div>
              );
            })}
        </DetailBottom>
      </DetailCard>
    </Box>
  );
};

export default WeatherDetail;
